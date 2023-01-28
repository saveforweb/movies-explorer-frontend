import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [cardsArray, setCardsArray] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [isEmptySearch, setEmptySearch] = React.useState(false);
  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);


  function searchInLocalCards(searchValue) {
    let searchResult = JSON.parse(localStorage.getItem('moviesCards'))?.filter(item => item.nameRU.toUpperCase().includes(searchValue.toUpperCase()));
    setCardsArray(searchResult);

    if (searchResult.length === 0) {
      setEmptySearch(true);
    } else {
      setEmptySearch(false);
    }
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

  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header loggedIn={loggedIn} />
            <Movies cards={cardsArray} isEmptySearch={isEmptySearch} isLoading={isLoading} onSearch={handleClickSearchMoviesButton} isMoviesApiError={isMoviesApiError} />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header loggedIn={loggedIn} />
            <Profile />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <Header loggedIn={loggedIn} />
            <SavedMovies cards={cardsArray} isEmptySearch={isEmptySearch} isLoading={isLoading} onSearch={handleClickSearchMoviesButton} />
            <Footer />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Register />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Login />
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
  );
}

export default App;
