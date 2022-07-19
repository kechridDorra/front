import './AjoutArticle.css';
import axios from "axios";
import React, { Component }  from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarUser from '../../../user/navbarUser/NavbarUser';
import Footer from '../../../Footer';
const AjoutArticle = () => {
  let user = JSON.parse(localStorage.getItem('user-info'));
    function AjoutImage(props) {
        return <div> <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg"/></div>;
      }
    return (<>
      <NavbarUser/>
  <div>
        <div class="wrapper bg-white">
            <div class="h2 text-center">Ajout article</div>
            <div class="row ">
                <div class="col-md-6 mb-2">
                  <label class="form-label" for="typeText">Nom de l'article</label>
                  <input type="text"  required 
                  id="titre" class="form-control " placeholder="Nom" />
                </div>
                <div class="col-md-6 mb-2">
                   <label class="form-label" for="typeText">Prix de l'article</label>
                   <input type="double" required 
                   id="prix_depart" class="form-control " placeholder="Prix" />
                </div>
            </div>
            <div class="row ">
            <div class="col-md-12 mb-2">
                <label class="form-label" for="typeText">Description article</label>
                <textarea class="form-control" id="description_ench" rows="4" 
               required 
                placeholder="Entrer une descption pour l'article " 
                ></textarea>  
              </div>       
            </div>
            <div class="row ">
                <label class="form-label" for="typeText">Catégorie</label>
                
                  <div class="input-group mb-3" >
                    <select class="form-select" 
                    required  id="categorie" >
                      <option selected disabled>Choisir la catégorie de l'article </option>
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
              
                   
            </div>
            <div class="row ">           
              <input type="file"id="avatar" name="avatar"accept="image/png, image/jpeg"/>
              </div>
              <div class="row">             
              <button type="button"
               class="btn btn-block text-center my-3" id="suivant">Enregitrer</button>            
        
              
        </div>
       
</div></div>
<Footer/></>);
}
export default AjoutArticle;

