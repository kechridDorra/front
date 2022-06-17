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
import InscriVendeur from './components/vendeur/InscriVendeur';
import Encheres from './components/visiteur/encheres/Encheres'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccueilUser from './components/user/accueilUser/AccueilUser';
import DetailEnch from './components/visiteur/detail/DetailEnch';
import Cat1 from './components/visiteur/categorie/cat1/Cat1';
import Cat2 from './components/visiteur/categorie/cat2/Cat2';
import Cat3 from './components/visiteur/categorie/cat3/Cat3';
import Cat4 from './components/visiteur/categorie/cat4/Cat4';
import Cat5 from './components/visiteur/categorie/cat5/Cat5';
import Cat6 from './components/visiteur/categorie/cat6/Cat6';
import Cat7 from './components/visiteur/categorie/cat7/Cat7';
import Cat8 from './components/visiteur/categorie/cat8/Cat8';
import Cat9 from './components/visiteur/categorie/cat9/Cat9';
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
        <Route path="/inscriVendeur" element={<InscriVendeur/>} />
        <Route path="/encheres" element={<Encheres/>} />
        <Route path="/detailEnch/:id" element={<DetailEnch/>} />
        <Route path="/categorie1" element={<Cat1/>} />
        <Route path="/categorie2" element={<Cat2/>} />
        <Route path="/categorie3" element={<Cat3/>} />
        <Route path="/categorie4" element={<Cat4/>} />
        <Route path="/categorie5" element={<Cat5/>} />
        <Route path="/categorie6" element={<Cat6/>} />
        <Route path="/categorie7" element={<Cat7/>} />
        <Route path="/categorie8" element={<Cat8/>} />
        <Route path="/categorie9" element={<Cat9/>} />
      </Routes>
   </BrowserRouter>

</>
  );}