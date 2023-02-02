import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApiConfig } from '../../utils/config';

function App() {

  const navigate = useNavigate();
  const [cardsArray, setCardsArray] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [isEmptySearch, setEmptySearch] = React.useState(false);
  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true);

  const token = localStorage.getItem('jwt');
  const mainApi = new MainApi({...mainApiConfig, token});

  React.useEffect(() => {
    if (token) {
      mainApi.checkToken(token)
        .then((result) => {
          setCurrentUser(result)
          setLoggedIn(true);
        })
        .catch((result) => {
          console.log(result);
        })
    } else {
      setLoggedIn(false);
    }
  }, []);

  function searchInLocalCards(searchValue) {
    let searchResult = JSON.parse(localStorage.getItem('moviesCards'))?.filter(item => item.nameRU.toUpperCase().includes(searchValue.toUpperCase()));
    setCardsArray(searchResult);

    if (searchResult.length === 0) {
      setEmptySearch(true);
    } else {
      setEmptySearch(false);
    }
  }

  function handleClickRegistrationButton(registrationValues) {
    const { name, email, password } = registrationValues;
    mainApi.signUp(name.value, email.value, password.value)
      .then((result) => {
        if (result) {
          handleClickLoginButton({ email, password })
        }
      })
      .catch((err) => {
        setRegistrationError(err);
      });
  }

  function handleClickLoginButton(loginValues) {
    const { email, password } = loginValues;
    mainApi.signIn(email.value, password.value)
      .then((result) => {
        if (result.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", result.token);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setLoginError(err);
      });
  }

  function handleClickSearchMoviesButton(searchValue) {
    setLoading(true);

    if (JSON.parse(localStorage.getItem('moviesCards'))) {
      searchInLocalCards(searchValue);
      setLoading(false);
    } else {
      MoviesApi.getCards()
        .then((result) => {
          setIsMoviesApiError(false);
          localStorage.setItem('moviesCards', JSON.stringify(result))
          searchInLocalCards(searchValue);
        })
        .catch((result) => {
          console.log(result);
          setIsMoviesApiError(true);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }

  function handleClickLogoutLink() {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path="/" element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />

          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Movies cards={cardsArray} isEmptySearch={isEmptySearch} isLoading={isLoading} onSearch={handleClickSearchMoviesButton} isMoviesApiError={isMoviesApiError} />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Profile onLogout={handleClickLogoutLink} />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <SavedMovies cards={cardsArray} isEmptySearch={isEmptySearch} isLoading={isLoading} onSearch={handleClickSearchMoviesButton} />
              <Footer />
            </ProtectedRoute>
          } />

          <Route path="/signup" element={
            <>
              <Register onRegistration={handleClickRegistrationButton} registrationError={registrationError} setRegistrationError={setRegistrationError} />
            </>
          } />
          <Route path="/signin" element={
            <>
              <Login onLogin={handleClickLoginButton} loginError={loginError} setLoginError={setLoginError} />
            </>
          } />
          <Route path="/404" element={
            <>
              <NotFoundPage />
            </>
          } />
          <Route
            path="*"
            element={<Navigate to="/404" />}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
