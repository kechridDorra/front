
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import axios from "axios";
import {useParams } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Api from '../../../services/Api';
import Encheres from '../encheres/Encheres';
import e from "cors";
const pathImg = "http://localhost/pfe_backend/public/uploads/"
const DetailEnch = () => {
  const { id } = useParams();
  const [enchere, SetEnchere] = useState({});
  const [articles, setArticles] = useState([]);
  const [images, setImages] = useState({});
 
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await Api.get(`/enchere/${id}`);
        SetEnchere(data);
         setArticles(data?.articles)
         setImages(articles.images)
         console.log("c",images)
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
 
    return (
     
  

   <>
 <Navbar/>
 <section class="bg-light">

  <div class="container py-5" enctype="multipart/form-data">
   <div class="row">
    <div class="col-md-6 position-relative mb-3 mb-md-0">

     <div class="border p-2 gallery-item"></div>

          <a href="http://localhost/pfe_backend/public/uploads/22f497e4784e8c9ada53bdeaa060a395.jpeg" 
               data-effect="mfp-zoom-in" title="">
           <img src= ""
               class="img-fluid" />
         </a>
         </div>
        
         <div class="col-md-6">
       <div class="d-flex justify-content-between">
        <nav aria-label="breadcrumb">
         <ol class="breadcrumb bg-transparent pl-0 mb-0">
         <li class="breadcrumb-item"><a href="/"> <strong>TunEnchere </strong></a></li>
          <li class="breadcrumb-item"><a href="/categorie1">  <strong> Nos enchéres</strong></a></li>
          <li class="breadcrumb-item"><a href="/categorie1"><strong> Détail Enchere</strong></a></li>
         </ol>
       </nav>
     </div>
     <h1>  { articles.map(el=>el.titre) } </h1>
     <span class="ml-2 text-danger font-weight-bold h4 mt-2">  <del> { articles.map(el=>el.prix_initial) } TND</del></span>
  <p> <strong>{enchere.description_ench} : </strong>
   <br></br>
   { articles.map(el=>el.description) }
        </p>
        <div class="alert alert-warning mb-2 text-center h5 font-weight-bold">        <i class="fa fa-clock-o fa-2x align-middle mr-1" aria-hidden="true"></i>
             Enchère debut le {enchere.date_debut}
        </div>
        <div class="alert alert-danger font-weight-bold rounded text-center mb-2">
          <i class="fa fa-clock-o fa-2x align-middle mr-1" aria-hidden="true"></i>
             Enchère termine le {enchere.date_fin}
        </div>
       <div class="alert alert-success font-weight-bold rounded text-center mb-2">
        <i class="fa fa-trophy fa-2x align-middle mr-1" aria-hidden="true"></i>
         &nbsp; Prix de vente<span>&nbsp;{ articles.map(el=>el.prix_vente)} TND</span>
        </div>
   </div>

   </div>
  </div>
 </section>            
 <Footer/>
 </>
      
      
    )    
 }
export default DetailEnch;