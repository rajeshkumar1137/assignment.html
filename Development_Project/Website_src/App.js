import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Home from './pages/Home';

import Header from './Componet/Header';
import Footer from './Componet/Footer';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Products from './pages/Products';




function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<><Header /><Login /><Footer /></>}></Route>
          <Route path='/Signup' element={<><Header /><Signup /><Footer /></>}></Route>
          <Route path='/Home' element={<><Header /><Home /><Footer /></>}></Route>
          <Route path='/Contact' element={<><Header /><Contact/><Footer /></>}></Route>
          <Route path='/Profile' element={<><Header /><Profile/><Footer /></>}></Route>
          <Route path='/Blog' element={<><Header /><Blog/><Footer /></>}></Route>
          <Route path='/Products' element={<><Header /><Products/><Footer /></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
