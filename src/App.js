import React, { useEffect } from 'react';
import './App.css';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inscription from './components/inscription/Inscription';
import Login from './components/login/Login';
import Profil from './components/user/profil/Profil';
import Users from './components/user/list/Users';
import Article from './components/article/Article';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccueilUser from './components/user/accueilUser/AccueilUser';
export default function App() {
  // let t;
  // const id=localStorage.getItem(id)
  // useEffect(async()=>{
  //  t='oui'
  // },[id])
  return (
  <>
    
   <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Accueil/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/login" element={<Login/>} />
    
        <Route path="/article" element={<Article/>}/>
        <Route exact path="/accueil" element={<AccueilUser/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/users" element={<Users/>} />
      
      
      </Routes>
   </BrowserRouter>

</>
  );}