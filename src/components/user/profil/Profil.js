import React, { Component } from "react";
import './Profil.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const api = axios.create({baseURL: 'http:localhost:8000/api/user/{id}'})
export default class Profil extends Component {
  state = { user :[]}
  
  
  
  



  render() {
        return (
<div className="form-container">
  <center>
    <div class="container ">
      <div class="col-lg-6"><br/>
        <div class="h2 text-center">Profil</div>
          <div class="h4 text-muted text-center pt-2">Consultez vos coordonées</div>
            <div class="row g-3">
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Nom</label>
                <input type="text" id="nom" class="form-control  " placeholder="" />
              </div>
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Prenom</label>
                <input type="text" id="prenom" class="form-control" placeholder=""  />
              </div>
            </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">        
              <label class="form-label" for="typeText">Email</label>
              <input type="email" id="email" class="form-control  " placeholder="" />
            </div>
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Mot de passe</label>
              <input type="text" id="password" class="form-control" placeholder=""  />         
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Télephone</label>
                <input type="text" id="telephone" class="form-control  " placeholder="" />
            </div>
            <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Genre</label>  <br/> 
                <input type="text" id="genre" class="form-control  " placeholder="" />
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-6 mb-4">
              <label class="form-label" for="typeText">Adresse</label>
              <input type="text" id="adresse" class="form-control" placeholder="" />
            </div>
            <div class="col-md-3 mb-6">
              <label class="form-label" for="typeText">Ville</label>
              <input type="text" id="ville" class="form-control " placeholder="" />      
            </div>
            <div class="col-md-3 mb-4">
              <label class="form-label" for="typeText">Code Postal</label>
              <input type="text" id="codePostal" class="form-control  " placeholder="" />
            </div>
          </div>             
          <div class="row g-3 ">
            <div class="col-md-4 mb-4">
              <label class="form-label" for="typeText">N° Carte Bancaire</label>
              <input type="text" id="NumCarte" class="form-control " placeholder="" />
            </div>
            <div class="col-md-2 mb-3">
              <label class="form-label" for="typeText">Id internet</label>
              <input type="text" id="codeSecurite" class="form-control " placeholder="" />
            </div>   
            <div class="col-md-6 mb-4">
              <div class="row ">             
              <label class="form-label" for="typeText">Expire </label>
                <div class="col-12 col-md-6 mb-4">
                <input type="text" id="moisExp" class="form-control  " placeholder="" />
                </div>
                <div class="col-12 col-md-6 mb-4">
                <input type="text" id="anneeExp" class="form-control  " placeholder="" />
                </div> 
              </div>
            </div>
          </div>
          <div class="row">
            <center>
              <div class="col-12 col-md-4 mb-3">
              <button type="submit" className="btn btn-dark btn-lg btn-block">Modifier</button>
              <a href="#">Supprimer mon compte</a>
              </div>
            </center>
          </div> 
        </div>
      </div>
   </center>
  </div>



        );
    }
}