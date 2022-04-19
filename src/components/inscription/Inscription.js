import React, { Component, useState } from "react";
import './Inscription.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Inscription = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
  
        return (
<div className="form-container">
  <center>
    <div class="container ">
      <div class="col-lg-6"><br/>
        <div class="h2 text-center">Inscription</div>
          <div class="h4 text-muted text-center pt-2">Entrez vos coordonées</div>
            <div class="row g-3">
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Nom</label>
                <input type="text" id="nom" class="form-control  " placeholder="Nom" />
              </div>
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Prenom</label>
                <input type="text" id="prenom" class="form-control" placeholder="Prenom"  />
              </div>
            </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">        
              <label class="form-label" for="typeText">Email</label>
              <input type="email" id="email" class="form-control  " placeholder="Email" />
            </div>
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Mot de passe</label>
              <input type="text" id="password" class="form-control" placeholder="Mot de passe"  />         
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Télephone</label>
                <input type="text" id="telephone" class="form-control  " placeholder="Télephone" />
            </div>
            <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText" >Genre</label>  <br/> 
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="genre" value="option1"></input>
                  <label class="form-check-label" for="inlineRadio1">Homme</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="genre" value="option2"></input>
                  <label class="form-check-label" for="inlineRadio2">Femme</label>
                </div>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Adresse</label>
              <input type="text" id="adresse" class="form-control" placeholder="Adresse" />
            </div>
            <div class="col-md-3 mb-6">
              <label class="form-label" for="typeText">Ville</label>
              <input type="text" id="ville" class="form-control " placeholder="Ville" />      
            </div>
            <div class="col-md-3 mb-4">
              <label class="form-label" for="typeText">Code Postal</label>
              <input type="text" id="codePostal" class="form-control  " placeholder="Code postal" />
            </div>
          </div>             
          <div class="row g-3 ">
            <div class="col-md-4 mb-4">
              <label class="form-label" for="typeText">N° Carte Bancaire</label>
              <input type="text" id="numeroCarte" class="form-control " placeholder="N° carte bancaire" />
            </div>
            <div class="col-md-2 mb-3">
              <label class="form-label" for="typeText">Id internet</label>
              <input type="text" id="codeSecurite" class="form-control " placeholder="Code sécurité" />
            </div>   
            <div class="col-md-6 mb-4">
              <div class="row ">             
              <label class="form-label" for="typeText">Expire </label>
                <div class="col-12 col-md-6 mb-4">
                  <div class="input-group mb-3" >
                    <select class="form-select" id="moisExp" >
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
                    <select class="form-select" id="anneeExp" >
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
              <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
              <p>déja inscrit <a href="#">Connectez</a> </p>
              </div>
            </center>
          </div> 
        </div>
      </div>
   </center>
  </div>



        );
    }
export default Inscription;