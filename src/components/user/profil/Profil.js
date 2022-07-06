import './Profil.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from "../../../services/Api";
import Login from "../../login/Login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React from 'react';
import axios from 'axios';
import { NavDropdown } from "react-bootstrap";
import NavbarUser from '../navbarUser/NavbarUser';
import Footer from '../../Footer';
const Profil = () =>  {

    const [user, SetUser] = useState({});
    let info=
    JSON.parse(localStorage.getItem('user-info'));
    console.log(info);
  
   
    useEffect(() => {
      const fetch = async () => {
        try {
          const { data } = await Api.get(`/api/userInfo`);
          SetUser(data);
          console.log(data)
        
        } catch (err) {
          console.error(err);
        }
      };
      fetch();
    }, []);
    
        return (
        <>
  <NavbarUser/>
          <div className="form-container">
        
<center>
    <div className="container ">
      <div className="col-lg-6"><br/>
        <div className="h2 text-center">Profil</div>
        
          <div className="h4 text-muted text-center pt-2">Consultez vos coordonées</div>
            <div className="row g-3">
              <div className="col-md-6 mb-4">
                <label className="form-label" for="typeText">Nom</label>
                <input type="text" id="nom" className="form-control " placeholder="" />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label" for="typeText">Prenom</label>
                <input type="text" id="prenom" className="form-control" placeholder=""  />
              </div>
            </div>
          <div className="row g-3">
            <div className="col-md-6 mb-4">        
              <label className="form-label" for="typeText">Email</label>
              <input type="email" id="email" className="form-control  " placeholder="" />
            </div>
            <div class="col-md-6 mb-4">
              <label className="form-label" for="typeText">Mot de passe</label>
              <input type="text" id="password" className="form-control" placeholder=""  />         
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6 mb-4">
                <label className="form-label" for="typeText">Télephone</label>
                <input type="text" id="telephone" className="form-control  " placeholder="" />
            </div>
            <div className="col-md-6 mb-4">
                <label className="form-label" for="typeText">Genre</label>  <br/> 
                <input type="text" id="genre" className="form-control  " placeholder="" />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6 mb-4">
              <label className="form-label" for="typeText">Adresse</label>
              <input type="text" id="adresse" className="form-control" placeholder="" />
            </div>
            <div className="col-md-3 mb-6">
              <label className="form-label" for="typeText">Ville</label>
              <input type="text" id="ville" className="form-control " placeholder="" />      
            </div>
            <div className="col-md-3 mb-4">
              <label className="form-label" for="typeText">Code Postal</label>
              <input type="text" id="codePostal" className="form-control  " placeholder="" />
            </div>
          </div>             
          <div className="row g-3 ">
            <div className="col-md-4 mb-4">
              <label className="form-label" for="typeText">N° Carte Bancaire</label>
              <input type="text" id="NumCarte" className="form-control " placeholder="" />
            </div>
            <div className="col-md-2 mb-3">
              <label className="form-label" for="typeText">Id internet</label>
              <input type="text" id="codeSecurite" className="form-control " placeholder="" />
            </div>   
            <div className="col-md-6 mb-4">
              <div className="row ">             
              <label className="form-label" for="typeText">Expire </label>
                <div className="col-12 col-md-6 mb-4">
                <input type="text" id="moisExp" className="form-control  " placeholder="" />
                </div>
                <div className="col-12 col-md-6 mb-4">
                <input type="text" id="anneeExp" className="form-control  " placeholder="" />
                </div> 
              </div>
            </div>
          </div>
          <div className="row">
            <center>
              <div className="col-12 col-md-4 mb-3">
              <button type="submit" className="btn btn-dark btn-lg btn-block">Modifier</button>
              <a href="#">Supprimer mon compte</a>
              </div>
            </center>
          </div> 
        </div>
      </div>
   </center>
  </div>
  <Footer/></>    );
    }

export default Profil;