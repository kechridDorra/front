import './Article.css';
import axios from "axios";
import React, { Component }  from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Article = () => {
    function AjoutImage(props) {
        return <div> <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg"/></div>;
      }
    return (
  <div>
        <div class="wrapper bg-white">
            <div class="h2 text-center">Ajout article</div>
            <div class="row ">
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Nom de l'article</label>
                <input type="text"  
                required 
                id="nom" class="form-control " placeholder="Nom" />
              </div>
              <div class="col-md-6 mb-4">
                <label class="form-label" for="typeText">Prix de l'article</label>
                <input type="double"  
                required 
                id="nom" class="form-control " placeholder="Prix" />
              </div>
              <div class="row ">           
              <input type="file"id="avatar" name="avatar"accept="image/png, image/jpeg"/>
              </div>
              <div class="row">             
              <button type="button" onClick={AjoutImage}
               class="btn btn-block1 text-center my-3" id="suivant">Ajouter une autre image</button>            
       < button type="button" onClick={AjoutImage}
               class="btn btn-block text-center my-3" id="suivant">Ajouter un autre article</button>            
        
               </div>
        </div>
       
</div></div>);
}
export default Article;