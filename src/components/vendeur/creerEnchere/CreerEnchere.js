import './CreerEnchere.css';
import axios from "axios";
import React, { Component }  from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarUser from '../../user/navbarUser/NavbarUser';
import Footer from '../../Footer';
import Api from '../../../services/Api';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const CreerEnchere = () => {
  
  const [state1, setstate1] = useState({
    description_ench: "",
    date_debut: "",
    date_fin: "",
  });
  const navigate = useNavigate();
  function handleForm(e)
  {
    e.preventDefault();
    
      Api.post(`/api/enchere`, state1)
      .then((res) => {
        console.log(res);
        navigate('/ajoutArticle')
      })
  }
  function handleInput(e) {
    const newdata1 = { ...state1 };
    newdata1[e.target.id] = e.target.value;
    setstate1(newdata1);
    console.log(newdata1);
  }
      
    return (
   
    <>
      <NavbarUser/>
      <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>
        <div class="wrapper bg-white">
            <div class="h2 text-center">Création Enchere</div>
            <div class="row ">
            <div class="col-md-12 mb-2">
                <label class="form-label" for="typeText">Description enchere</label>
                <textarea class="form-control" id="description_ench" rows="4" 
                onChange={(e) => handleInput(e)} required 
                placeholder="Entrer une descption de l'enchere " 
                ></textarea>  
              </div>           
            </div>
            <div class="row ">
              <div class="col-md-6 mb-2">
                <label class="form-label" for="typeText">Date debut enchere </label>
                <input type="datetime-local" id="date_debut" class="form-control" 
                onChange={(e) => handleInput(e)} required />
              </div>
              <div class="col-md-6 mb-2">
                <label class="form-label" for="typeText">Date fin enchere </label>
                <input type="datetime-local" id="date_debut" class="form-control" 
                onChange={(e) => handleInput(e)} required />
                </div>
              </div>
              <div class="row">             
                        
       < button type="button"
               class="btn btn-block text-center my-3" id="suivant">Etape suivante : Ajout article</button>            
        
               </div>
       
       
</div></form>
<Footer/></>);
}
export default CreerEnchere;