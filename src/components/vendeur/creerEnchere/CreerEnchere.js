import "./CreerEnchere.css";
import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { post } from "../../../services/http";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarUser from "../../user/navbarUser/NavbarUser";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
const CreerEnchere = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate = useNavigate();
  const { profil_vendeur } = useParams();



  /*   function AjoutArticle(enchereId) {
      navigate(`/ajoutArticle/${enchereId}`, {
        state: {
          id: enchereId,
        },
      });*/

  return (
    <>
      <NavbarUser />
      <form
        class="form-horizontal"
        method="post"
        action="#"
     
      >
   
        <div class="wrapper bg-white">
          <div class="h2 text-center">Création Enchère</div>
          <div class="col-md-12 mb-2">
          <div class="row ">
            <div class="col-md-12 mb-1">
              <label class="form-label" for="typeText">
                Description l'enchère
              </label>
              <textarea
                type="text"
                class="form-control"
                id="description_ench"
                rows="4"
               
                required
                placeholder="Entrer une description de l'enchère "
              ></textarea>
            </div>
          </div>
          <div class="row ">
            <div class="col-md-6 mb-1">
              <label class="form-label" for="typeText">
                Date debut enchère{" "}
              </label>
              <input
                type="datetime-local"
                id="date_debut"
                class="form-control"
               
                required
              />
            </div>
            <div class="col-md-6 mb-1">
              <label class="form-label" for="typeText">
                Date fin enchère{" "}
              </label>
              <input
                type="datetime-local"
                id="date_fin"
                class="form-control"
             
                
                required
              />
            </div>
          </div>
          </div>
          
          <div class="row ">
            <div class="col-md-6 mb-1">
              <label class="form-label" for="typeText">
               Nom Article{" "}
              </label>
              <input
                type="textg"
                id="nom_article"
                class="form-control"
                
                required
                placeholder="Entrer le nom de l'article"
              />
            </div>
            <div class="col-md-6 mb-1">
              <label class="form-label" for="typeText">
                Prix Depart{" "}
              </label>
              <input
                type="number"
                id="prix_depart"
                class="form-control"
                placeholder= "Entrer le prix de l'article en dinars"
                
                required
              />
            </div>
          </div>
          <div class="row ">
            <div class="col-md-12 mb-1">
              <label class="form-label" for="typeText">
                Description article
              </label>
              <textarea
                class="form-control"
                id="description_article"
                rows="4"
                
                required
                placeholder="Entrer une description de l'article "
              ></textarea>
            </div>
          </div>
          <div class="row ">
            <label class="form-label" for="typeText">
              Catégorie
            </label>

            <div class="input-group mb-3">
              <select
                class="form-select"
                required
                id="categorie"

              >
                <option selected disabled>
                  Choisir la catégorie de l'article{" "}
                </option>
                <option value="1">Arts et Décoration</option>
                <option value="2">Mode et Bijoux</option>
                <option value="3">Informatique et Téléphones</option>
                <option value="4">Véhicules</option>
                <option value="5">Horlogerie</option>
                <option value="6">Eléctromenager</option>
                <option value="7">Ameublement</option>
                <option value="8">Immeubles et Maisons</option>
                <option value="9"> Autres</option>
              </select>
            </div>
            <div class="row ">           
              <input type="file" id="image" 
              accept="image/png, image/jpeg"
             required/>
              </div>
          </div>
          <br></br>
          <div class="row">
            <center>
              {" "}
              <button className="btn btn-dark btn-lg btn-block">
                Enregistrer
              </button>
            </center>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};
export default CreerEnchere;
