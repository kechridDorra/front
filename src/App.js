import React from 'react';
import './App.css';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inscription from './components/inscription/Inscription';
import Login from './components/login/Login'
import Profil from './components/user/profil/Profil';
import Users from './components/user/list/Users';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
  <>
    <Navbar/>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </BrowserRouter>
<Footer/>
</>
  );
 
}