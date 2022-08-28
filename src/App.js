import React, { useEffect } from 'react';
import Users from './components/user/list/Users';
import Encheres from './components/visiteur/encheres/Encheres'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//visituer
import Inscription from './components/inscription/Inscription';
import Login from './components/login/Login';
import AccueilUser from './components/user/accueilUser/AccueilUser';
import ListCategories from './components/visiteur/categorie/listCategories/ListCategories';

import Categorie1 from './components/visiteur/categorie/Categorie1';
import Categorie2 from './components/visiteur/categorie/Categorie2';
import Categorie3 from './components/visiteur/categorie/Categorie3';
import Categorie4 from './components/visiteur/categorie/Categorie4';
import Categorie5 from './components/visiteur/categorie/Categorie5';
import Categorie6 from './components/visiteur/categorie/Categorie6';
import Categorie7 from './components/visiteur/categorie/Categorie7';
import Categorie8 from './components/visiteur/categorie/Categorie8';
import Categorie9 from './components/visiteur/categorie/Categorie9';
import Appels from './components/visiteur/appels/Appels';
import DetailEnch from './components/visiteur/detail/DetailEnch';
//user
import Profil from './components/user/profil/Profil';
import ModifierProfil from './components/user/profil/modifierProfil/ModifierProfil';
import Accueil from './components/Accueil';
import EncheresPlanifiees from './components/user/encheres/encheresPlanifiees/EncheresPlanifiees';
import EncheresEnCours from './components/user/encheres/encheresEnCours/EncheresEnCours';
import EncheresTerminees from './components/user/encheres/encheresTerminees/EncheresTerminees';
import RejointEnchereEC from './components/user/encheres/rejointEnchereEC/RejointEnchereEC';
import Categories from './components/user/categorie/categories/Categories';
//import AjoutArticle from './components/vendeur/ajoutArticle/AjoutArticle';
import EncheresT from './components/visiteur/encheresT/EncheresT';
import MesAppelOffres from './components/user/appelOffre/mesAppelOffres/MesAppelOffres';
import AjoutAppelOffre from './components/user/appelOffre/ajoutAppelOffre/AjoutAppelOffre';
import Cat1 from './components/user/categorie/Cat1';
import Cat2 from './components/user/categorie/Cat2';
import Cat3 from './components/user/categorie/Cat3';
import Cat4 from './components/user/categorie/Cat4';
import Cat5 from './components/user/categorie/Cat5';
import Cat6 from './components/user/categorie/Cat6';
import Cat7 from './components/user/categorie/Cat7';
import Cat8 from './components/user/categorie/Cat8';
import Cat9 from './components/user/categorie/Cat9';
import ListeParticipants from './components/user/encheres/ListeParticipants';
//vendeur
import InscriVendeur from './components/vendeur/inscriVendeur/InscriVendeur';
import AjoutArticle from './components/vendeur/ajoutArticle/AjoutArticle';
import ReponseVendeur from './components/vendeur/reponseAppel/ReponseVendeur';
import CreerEnchere from './components/vendeur/creerEnchere/CreerEnchere';
import MesEncheres from './components/vendeur/mesEncheres/MesEncheres';
import MesParticipants from './components/vendeur/mesEncheres/mesParticipants/MesParticipants';
import SaisieProposition from './components/vendeur/reponseAppel/sasieResponse/SaisieProposition';






export default function App() {
  return (
  <>  
   
   <BrowserRouter>
      <Routes>
        //visiteur
        <Route path="/login" element={<Login/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/users" element={<Users/>} />
        <Route exact path="/" element={<Accueil/>} />
        <Route path="/encheres" element={<Encheres/>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categorie1" element={<Categorie1/>} />
        <Route path="/categorie2" element={<Categorie2/>} />
        <Route path="/categorie3" element={<Categorie3/>} />
        <Route path="/categorie4" element={<Categorie4/>} />
        <Route path="/categorie5" element={<Categorie5/>} />
        <Route path="/categorie6" element={<Categorie6/>} />
        <Route path="/categorie7" element={<Categorie7/>} />
        <Route path="/categorie8" element={<Categorie8/>} />
        <Route path="/categorie9" element={<Categorie9/>} />
        <Route path="/encheresT" element={<EncheresT/>} />
        <Route path="/appels" element={<Appels/>}/>
        <Route path= "/detailEnch/:enchere" element={<DetailEnch/>}/>
        <Route path= "/listCategories" element={<ListCategories/>}  />    
  
        //user
        <Route exact path="/accueil" element={<AccueilUser/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/modifierProfil/:id" element={<ModifierProfil/>} />
        <Route path="/encheresPlanifiees/:user" element={<EncheresPlanifiees/>} />
        <Route path="/encheresTerminees/:user" element={<EncheresTerminees/>} />
        <Route path="/encheresEnCours/:user" element={<EncheresEnCours/>} />
        <Route path="/listeParticipants/:user/:enchere" element={<ListeParticipants/>} />
        <Route path="/mesAppelOffres" element={<MesAppelOffres/>}/>
        <Route path="/ajoutAppelOffre/:user" element={<AjoutAppelOffre/>}/>
        <Route path="/rejointEnchereEC/:enchere" element={<RejointEnchereEC/>}/>
        <Route path="/cat1" element={<Cat1/>}/>
       <Route path="/cat2" element={<Cat2/>}/>
        <Route path="/cat3" element={<Cat3/>}/>
        <Route path="/cat4" element={<Cat4/>}/>
        <Route path="/cat5" element={<Cat5/>}/>
        <Route path="/cat6" element={<Cat6/>}/>
        <Route path="/cat7" element={<Cat7/>}/>
        <Route path="/cat8" element={<Cat8/>}/>
        <Route path="/cat9" element={<Cat9/>}/>


       
        //vendeur
        <Route path="/inscriVendeur" element={<InscriVendeur/>} />
        <Route path="/creerEnchere/:profil_vendeur" element={<CreerEnchere/>} />       
        <Route path="/reponseVendeur/:profilVendeur" element={<ReponseVendeur/>} />
        <Route path="/saisieProposition/:profilVendeur/:appelOffre" element={<SaisieProposition/>} />
        <Route path="/mesEncheres" element={<MesEncheres/>} />
        <Route path="/MesParticipants/:enchere" element={<MesParticipants/>} />
        //visiteur
        
      </Routes>
   </BrowserRouter>

</>
  );}