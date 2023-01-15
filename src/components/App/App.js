import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import Footer from '../Footer/Footer';

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
            <Movies />
            <Footer />
          </>
        } />
        <Route
          path="*"
          element={<Navigate to="/signin" />}
        />
      </Routes>
    </div>
  );
}

export default App;
