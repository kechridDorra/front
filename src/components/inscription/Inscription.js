import React, {  useState } from "react";
import './Inscription.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Api from "../../services/Api";
const Inscription = () => {
  const [state1, setstate1] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    telephone: "",
    adresse:"",
    ville:"",
    codePostal:"",
    numeroCarte:"",
    codeSecurite:"",
    moisExp:"",
    anneeExp:"",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  function handleForm(e)
  {
    e.preventDefault();
    console.log("form", state1)
      Api.post(`/inscription`, state1)
      .then((res) => {
        console.log(res);
        navigate('/login')
      })
  }
  function handleInput(e) {
    const newdata1 = { ...state1 };
    newdata1[e.target.id] = e.target.value;
    setstate1(newdata1);
    console.log(newdata1);
  }
        return (<>
        <Navbar/>
    
<div className="form-container">
  <center>
    <div class="container">
    <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>
      <div class="col-lg-6"><br/>
        <div class="h2 text-center">Inscription</div>
          <div class="h4 text-muted text-center pt-2">Entrez vos coordonées</div>
            <div class="row g-3">
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Nom</label>
                <input type="text"  
                required     onChange={(e) => handleInput(e)}
                id="nom" class="form-control " placeholder="Nom" />
              </div>
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Prenom</label>
                <input type="text" 
                required     onChange={(e) => handleInput(e)}
                id="prenom" class="form-control" placeholder="Prenom"  />
              </div>
            </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">        
              <label class="form-label" for="typeText">Email</label>
              <input type="email" 
                required     onChange={(e) => handleInput(e)}
              id="email" class="form-control  " placeholder="Email" />
            </div>
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Mot de passe</label>
              <input type="password"  
                required     onChange={(e) => handleInput(e)}
              id="password" class="form-control" placeholder="Mot de passe"  />         
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Télephone</label>
                <input type="text" 
                required     onChange={(e) => handleInput(e)}
                 id="telephone" class="form-control  " placeholder="Télephone" />
            </div>
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Adresse</label>
              <input type="text" 
                required     onChange={(e) => handleInput(e)}
                id="adresse" class="form-control" placeholder="Adresse" />
            </div>
          </div>
          <div class="row g-3">
            
          <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Ville</label>
              <input type="text"
                required     onChange={(e) => handleInput(e)}
              id="ville" class="form-control " placeholder="Ville" />      
            </div>
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Code Postal</label>
              <input type="text"
                required     onChange={(e) => handleInput(e)}
               id="codePostal" class="form-control  " placeholder="Code postal" />
            </div>
          </div>             
          <div class="row g-3 ">
            <div class="col-md-4 mb-4">
              <label class="form-label" for="typeText">N° Carte Bancaire</label>
              <input type="text" 
                required     onChange={(e) => handleInput(e)}
              id="numeroCarte" class="form-control " placeholder="N° carte bancaire" />
            </div>
            <div class="col-md-2 mb-3">
            <label class="form-label" for="typeText">Id internet</label>
              <input type="text"  
                required     onChange={(e) => handleInput(e)}
              id="codeSecurite" class="form-control " placeholder="Id internet" />
            </div>   
            <div class="col-md-6 mb-4">
              <div class="row ">             
              <label class="form-label" for="typeText">Expire </label>
                <div class="col-12 col-md-6 mb-4">
                  <div class="input-group mb-3" >
                    <select class="form-select" 
                  
                    required     onChange={(e) => handleInput(e)}id="moisExp" >
                      <option selected disabled>Mois</option>
                      <option value="1">1 - Janvier</option>
                      <option value="2">2 - Février</option>
                      <option value="3">3 - Mars</option>
                      <option value="4">4 - Avril</option>
                      <option value="5">5 - Mai</option>
                      <option value="6">6 - Juin</option>
                      <option value="7">7 - Juillet</option>
                      <option value="8">8 - Aout</option>
                      <option value="9">9 - Septembre</option>
                      <option value="10">10 - Octobre</option>
                      <option value="11">11 - Novembre</option>
                      <option value="12">12 - Décembre</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-4">
                  <div class="input-group mb-3" >
                    <select class="form-select" id="anneeExp"             
                    required    onChange={(e) => handleInput(e)}>
                      <option selected disabled>Année</option>
                      <option value="1">2022</option>
                      <option value="2">2023</option>
                      <option value="3">2024</option>
                      <option value="1">2025</option>
                      <option value="2">2026</option>
                      <option value="3">2027</option>
                    </select>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div class="row">
            <center>
              <div class="col-12 col-md-4 mb-3">
              <button  className="btn btn-dark btn-lg btn-block">Enregistrer </button>
              <p>déja inscrit <a href="/login">Connectez</a> </p>
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
export default Inscription;