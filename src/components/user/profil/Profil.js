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
import { get } from "../../../services/http";
const Profil = () =>  {
  const userInfo = localStorage.getItem("user-info");
  const [profil, setProfil] = useState({});
  async function getUserDetails() {
    try {
      const parsedUser = JSON.parse(userInfo);
      const userApiUrl = `user/mail/${parsedUser.email}`;
      console.log(parsedUser);
      const res = await get(userApiUrl);
      console.log("profil",res);
      setProfil(res.data[0])
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDetails();
  }, [userInfo]);
  const navigate = useNavigate();

  function modifProfil(userId) {
    navigate (`/modifierProfil/${profil.id}`,{
      state: {
        id: userId,
      },
    });
  }
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
                <input type="text" id="nom" className="form-control " placeholder={profil.nom} />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label" for="typeText">Prenom</label>
                <input type="text" id="prenom" className="form-control" placeholder={profil.prenom}  />
              </div>
            </div>

          <div className="row g-3">
            <div className="col-md-6 mb-4">        
              <label className="form-label" for="typeText">Email</label>
              <input type="email" id="email" className="form-control  " placeholder={profil.email} />
            </div>
            <div className="col-md-6 mb-4">
                <label className="form-label" for="typeText">Télephone</label>
                <input type="text" id="telephone" className="form-control  " placeholder={profil.telephone}/>
            </div>
          </div>
        
          <div className="row g-3">
            <div className="col-md-6 mb-4">
              <label className="form-label" for="typeText">Adresse</label>
              <input type="text" id="adresse" className="form-control" placeholder={profil.adresse}/>
            </div>
            <div className="col-md-3 mb-6">
              <label className="form-label" for="typeText">Ville</label>
              <input type="text" id="ville" className="form-control " placeholder={profil.ville} />      
            </div>
            <div className="col-md-3 mb-4">
              <label className="form-label" for="typeText">Code Postal</label>
              <input type="text" id="codePostal" className="form-control  " placeholder={profil.code_postal} />
            </div>
          </div>    

          <div className="row g-3 ">
            <div className="col-md-4 mb-4">
              <label className="form-label" for="typeText">N° Carte Bancaire</label>
              <input type="text" id="NumCarte" className="form-control " placeholder={profil.numero_carte} />
            </div>
            <div className="col-md-2 mb-3">
              <label className="form-label" for="typeText">Id internet</label>
              <input type="text" id="codeSecurite" className="form-control " placeholder={profil.code_securite} />
            </div>   
            <div className="col-md-6 mb-4">
              <div className="row ">             
              <label className="form-label" for="typeText">Expire </label>
                <div className="col-12 col-md-6 mb-4">
                <input type="text" id="moisExp" className="form-control  " placeholder={profil.mois_exp} />
                </div>
                <div className="col-12 col-md-6 mb-4">
                <input type="text" id="anneeExp" className="form-control  " placeholder={profil.annee_exp} />
                </div> 
              </div>
            </div>
          </div>
          <div className="row">
            
          </div> 
        </div>
      </div>
   </center>
  </div>
  <Footer/></>    );
    }

export default Profil;