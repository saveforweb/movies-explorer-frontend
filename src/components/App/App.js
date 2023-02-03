import React from 'react';
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
import { ProtectedRouteAfterLogin } from '../ProtectedRouteAfterLogin/ProtectedRouteAfterLogin';

function App() {
  const navigate = useNavigate();
  const [cardsArray, setCardsArray] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [isEmptySearch, setEmptySearch] = React.useState(false);
  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [editUserError, setEditUserError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') === 'true');
  const [userCardsArray, setUserCardsArray] = React.useState([]);

  const token = localStorage.getItem('jwt');
  const mainApi = new MainApi({ ...mainApiConfig, token });

  React.useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn)
  }, [loggedIn]);

  React.useEffect(() => {
    if (token) {
      mainApi.checkToken(token)
        .then(({ data }) => {
          setLoggedIn(true);
          setCurrentUser(data);
        })
        .catch((result) => {
          console.log(result);
        })
    } else {
      setLoggedIn(false);
    }

    if (loggedIn && !localStorage.getItem('savedMoviesSearch')) {
      getUserCards();
    }

  }, [loggedIn]);

  function searchInLocalCards(searchValue) {
    let searchResult = JSON.parse(localStorage.getItem('moviesCards'))?.filter(item => item.nameRU.toUpperCase().includes(searchValue.toUpperCase()));
    setCardsArray(searchResult);

    if (searchResult.length === 0) {
      setEmptySearch(true);
    } else {
      setEmptySearch(false);
    }
  }

  function handleClickSearchSavedMoviesButton(searchValue) {
    setLoading(true);

    if (JSON.parse(localStorage.getItem('savedMoviesCards'))) {
      searchInSavedCards(searchValue);
      setLoading(false);
    } else {
      mainApi.getUserCards()
        .then(({ data }) => {
          setIsMoviesApiError(false);
          localStorage.setItem('savedMoviesCards', JSON.stringify(data))
          searchInSavedCards(searchValue);
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

  function searchInSavedCards(searchValue) {
    let searchResult = JSON.parse(localStorage.getItem('savedMoviesCards'))?.filter(item => item.nameRU.toUpperCase().includes(searchValue.toUpperCase()));
    setUserCardsArray(searchResult);

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

  function handleClickEditUserButton(userValue) {
    const { name, email } = userValue;
    mainApi.updateUserInfo(name.value, email.value)
      .then((result) => {
        setEditUserError('Данные успешно обновлены');
      })
      .catch((err) => {
        setEditUserError(err);
      });
  }

  function getUserCards() {
    mainApi.getUserCards()
      .then(({ data }) => {
        localStorage.setItem('savedMoviesCards', JSON.stringify(data))
        setUserCardsArray(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClickLogoutLink() {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
  }

  function handleClickAddMoviesButton(card) {
    mainApi.createUserCard(card)
      .then((result) => {
        getUserCards();
      })
      .catch((err) => {
        setEditUserError(err);
      });
  }

  function handleClickDislike(cardId) {
    mainApi.deleteUserCard(cardId)
      .then((result) => {
        getUserCards();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClickDeleteSavedButton(cardId) {
    mainApi.deleteUserCard(cardId)
      .then((result) => {
        getUserCards();
      })
      .catch((err) => {
        console.log(err);
      });
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
              <Movies
                cards={cardsArray}
                isEmptySearch={isEmptySearch}
                isLoading={isLoading}
                onSearch={handleClickSearchMoviesButton}
                isMoviesApiError={isMoviesApiError}
                onClickLike={handleClickAddMoviesButton}
                userCardsArray={userCardsArray}
                onClickDislike={handleClickDislike}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Profile onLogout={handleClickLogoutLink} onEditUser={handleClickEditUserButton} editUserError={editUserError} setEditUserError={setEditUserError} />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <SavedMovies
                cards={userCardsArray}
                isEmptySearch={isEmptySearch}
                isLoading={isLoading}
                onSearch={handleClickSearchSavedMoviesButton}
                onDelete={handleClickDeleteSavedButton}
              />
              <Footer />
            </ProtectedRoute>
          } />

          <Route path="/signup" element={
            <ProtectedRouteAfterLogin loggedIn={loggedIn}>
              <Register onRegistration={handleClickRegistrationButton} registrationError={registrationError} setRegistrationError={setRegistrationError} />
            </ProtectedRouteAfterLogin>
          } />
          <Route path="/signin" element={
            <ProtectedRouteAfterLogin loggedIn={loggedIn}>
              <Login onLogin={handleClickLoginButton} loginError={loginError} setLoginError={setLoginError} />
            </ProtectedRouteAfterLogin>
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
