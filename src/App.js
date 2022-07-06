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
import EncheresPlanifiees from './components/enchere/encheresPlanifiees/EncheresPlanifiees';
import EncheresTerminees from './components/enchere/encheresTerminees/EncheresTerminees';
import EncheresEnCours from './components/enchere/enchereEnCours/EncheresEnCours';
import CreerEnchere from './components/vendeur/creerEnchere/CreerEnchere';
import AjoutArticle from './components/vendeur/ajoutArticle/AjoutArticle';
import EncheresT from './components/visiteur/encheresT/EncheresT';
import AppelOffres from './components/visiteur/appelOffres/AppelOffres';

export default function App() {
  return (
  <>  
   
   <BrowserRouter>
      <Routes>
   
        <Route path="/login" element={<Login/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/users" element={<Users/>} />
        
      
        //user
        <Route exact path="/accueil" element={<AccueilUser/>} />
       
        <Route path="/encheresPlanifiees" element={<EncheresPlanifiees/>} />
        <Route path="/encheresTerminees" element={<EncheresTerminees/>} />
        <Route path="/encheresEnCours" element={<EncheresEnCours/>} />
        //vendeur
        <Route path="/inscriVendeur" element={<InscriVendeur/>} />
        <Route path="/creerEnchere" element={<CreerEnchere/>} />
        <Route path="/ajoutArticle" element={<AjoutArticle/>} />
        //visiteur
        <Route exact path="/" element={<Accueil/>} />
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
        <Route path="/encheresT" element={<EncheresT/>} />
        <Route path="/appelOffres" elemement={<AppelOffres/>}/>
      
      </Routes>
   </BrowserRouter>

</>
  );}