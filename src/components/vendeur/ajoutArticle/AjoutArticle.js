import './AjoutArticle.css';
import axios from "axios";
import React, { Component }  from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { get } from "../../../services/http";
import { post } from "../../../services/http";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarUser from '../../user/navbarUser/NavbarUser';
import Footer from '../../Footer';
const AjoutArticle = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate=useNavigate();
  const { enchere} = useParams();
  const [article,setArticle]=useState({
    nom: "",
    description: "",
    categorie:"",
    image:""})
    async function handleForm(e)
   {
      e.preventDefault();
      console.log("form",article)
      const userApiUrl = `/article/${enchere}`;
      const res = await post(userApiUrl,article);
          console.log("ggg",res);
          navigate(`/encheresPlanifiees`)
    }
    function handleInput(e) {
      const newdata1 = { ...article };
      newdata1[e.target.id] = e.target.value;
      setArticle(newdata1,enchere);
      console.log(newdata1);
    }
   
  
    useEffect(() => {
      handleForm();
    }, [userInfo]);
    return (<>
      <NavbarUser/>
      <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>
        <div class="wrapper bg-white">
            <div class="h2 text-center">Ajout article</div>
            <div class="row ">
                <div class="col-md-12 mb-6">
                  <label class="form-label" for="typeText">Nom de l'article</label>
                  <input type="text"  required 
                  id="nom" class="form-control " placeholder="Nom"
                  onChange={(e) => handleInput(e)} />
                </div>
              
            </div>
            <div class="row ">
            <div class="col-md-12 mb-2">
                <label class="form-label" for="typeText">Description article</label>
                <textarea class="form-control" id="description" rows="4" 
              onChange={(e) => handleInput(e)} required
                placeholder="Entrer une descption pour l'article " 
                ></textarea>  
              </div>       
            </div>
            <div class="row ">
                <label class="form-label" for="typeText">Catégorie</label>
                
                  <div class="input-group mb-3" >
                    <select class="form-select" 
                    required  id="categorie" onChange={(e) => handleInput(e)}>
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
              <input type="file" id="image" accept="image/png, image/jpeg"
               onChange={(e) => handleInput(e)} required/>
              </div>
              <div class="row">             
<center>  <button className="btn btn-dark btn-lg btn-block">
                       Enregistrer
                      </button></center>
                   
               </div>
       
</div></form>
<Footer/></>);
}
export default AjoutArticle;

