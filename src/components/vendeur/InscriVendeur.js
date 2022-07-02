 import {  useState } from "react";
import './InscriVendeur.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import NavbarUser from "../user/navbarUser/NavbarUser";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Api from "../../services/Api";

const InscriVendeur = () => {
  let user=
  JSON.parse(localStorage.getItem('user-info'));
  console.log(user);

  const [state1, setstate1] = useState({
    activite: "",
    nomEntreprise: "",
    
  });
  const navigate = useNavigate();
  function postVendeur(e)
  {
    e.preventDefault();
    console.log("form", state1)
   Api
      .post("api/profilVendeur", state1)
      .then((res) => {     
       
        console.log(res);
        navigate('/accueil')
      })
  }
  function handleInput(e) {
    const newdata1 = { ...state1 };
    newdata1[e.target.id] = e.target.value;
    setstate1(newdata1);
    console.log(newdata1);
  }
        return (<>
   
        <NavbarUser/>
    
<div className="form-container">
  <center>
    <div class="container">
    <form class="form-horizontal" method="post" action="#" onSubmit={(e) => postVendeur(e)}>
      <div class="col-lg-6"><br/>
        <div class="h2 text-center">Inscription Vendeur</div>
          <div class="h4 text-muted text-center pt-2">Entrez vos coordonées</div>
            <div class="row g-3">
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Activité</label>
                <input type="text"  
                required     onChange={(e) => handleInput(e)}
                id="activite" class="form-control " placeholder="Activité" />
              </div>
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Nom Entreprise</label>
                <input type="text" 
                onChange={(e) => handleInput(e)}
                id="nomEntreprise" class="form-control" placeholder="Nom entreprise"  />
              </div>
            </div>
            <div class="row">
            <center>
              <div class="col-12 col-md-4 mb-3">
              <button  className="btn btn-dark btn-lg btn-block">Enregistrer </button>
              </div>
            </center>
          </div> 
        </div>
    </form>
      </div>
   </center>
  </div>
<Footer/>
  </>
        ); 
}
export default InscriVendeur;