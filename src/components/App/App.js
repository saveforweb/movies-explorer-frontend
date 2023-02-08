import React from 'react';
import { Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom';
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
import StorageService from '../../utils/storageService/storageService';
import useMovies from '../../contexts/hooks/useMovies';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(!!StorageService.get('loggedIn'));
  const [currentUser, setCurrentUser] = React.useState({});

  const [registrationError, setRegistrationError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [editUserError, setEditUserError] = React.useState('');

  const [userCardsArray, setUserCardsArray] = React.useState([]);

  const [isLoading, setLoading] = React.useState(false);
  const [isEmptySearch, setEmptySearch] = React.useState(false);

  const [isFilterMovies, setFilterMovies] = React.useState(!!StorageService.get('isFilterMovies'));
  const [searchValueMovies, setSearchValueMovies] = React.useState(typeof StorageService.get('searchValueMovies') === 'string' ? StorageService.get('searchValueMovies') : '');

  const token = StorageService.get('jwt');
  const mainApi = new MainApi({ ...mainApiConfig, token });

  const [cardsForRender, isMoviesApiError] = useMovies(searchValueMovies, isFilterMovies, loggedIn);

  function registration({ name, email, password }) {
    mainApi.signUp(name.value, email.value, password.value)
      .then((result) => {
        if (result) {
          login({ email, password })
        }
      })
      .catch((err) => {
        setRegistrationError(err);
      });
  }

  function login({ email, password }) {
    mainApi.signIn(email.value, password.value)
      .then((result) => {
        if (result.token) {
          setLoggedIn(true);
          StorageService.save("jwt", result.token);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setLoginError(err);
      });
  }

  function editUser({ name, email }) {
    mainApi.updateUserInfo(name.value, email.value)
      .then(({ data }) => {
        setCurrentUser(data);
        setEditUserError('Данные успешно обновлены');
      })
      .catch((err) => {
        setEditUserError(err);
      });
  }

  function logout() {
    StorageService.clear();
    navigate("/");
    setLoggedIn(false);
  }

  function addUserMovie(card) {
    mainApi.createUserCard(card)
      .then((result) => {
        console.log({ 'createUserCard': result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteUserMovie(cardId) {
    mainApi.deleteUserCard(cardId)
      .then((result) => {
        console.log({ 'deleteUserCard': result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (token) {
      mainApi.checkToken(token)
        .then(({ data }) => {
          setLoggedIn(true);
          setCurrentUser(data);
          StorageService.save('loggedIn', true)
        })
        .catch((err) => {
          console.log(err);
          logout();
          setLoggedIn(false);
          StorageService.save('loggedIn', false);
        })
    } else {
      setLoggedIn(false);
      StorageService.save('loggedIn', false);
    }
  }, [loggedIn, location]);

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
                cards={cardsForRender}
                isEmptySearch={isEmptySearch}
                isLoading={isLoading}
                onLike={addUserMovie}
                onDislike={deleteUserMovie}
                isFilterMovies={isFilterMovies}
                setFilterMovies={setFilterMovies}
                setSearchValueMovies={setSearchValueMovies}
                searchValueMovies={searchValueMovies}
                isMoviesApiError={isMoviesApiError}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Profile onLogout={logout} editUser={editUser} editUserError={editUserError} setEditUserError={setEditUserError} />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <SavedMovies
                cards={userCardsArray}
                isEmptySearch={isEmptySearch}
                isLoading={isLoading}
                onDelete={deleteUserMovie}
              />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <ProtectedRouteAfterLogin loggedIn={loggedIn}>
              <Register
                onRegistration={registration}
                registrationError={registrationError}
                setRegistrationError={setRegistrationError} />
            </ProtectedRouteAfterLogin>
          } />
          <Route path="/signin" element={
            <ProtectedRouteAfterLogin loggedIn={loggedIn}>
              <Login
                onLogin={login}
                loginError={loginError}
                setLoginError={setLoginError}
              />
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
