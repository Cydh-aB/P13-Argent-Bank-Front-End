import React from 'react';
// import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home'
import Error from './Pages/Error';
import SignIn from './Pages/SignIn'
import Profil from './Pages/Profil'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/profile' element={<Profil />} />
            <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
