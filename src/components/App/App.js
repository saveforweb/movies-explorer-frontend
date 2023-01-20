import React, { useEffect } from 'react';
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
import cardsData from '../../utils/moviesCards';
import userMoviesCards from '../../utils/userMoviesCards';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

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
            <Movies cards={cardsData.data} />
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
            <SavedMovies cards={userMoviesCards.data} />
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
