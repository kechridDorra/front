import './Cat8.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Api from '../../../../services/Api';

class Cat8 extends Component {
    constructor() {
        super();
        this.state = {categorie8: [], loading: true};
    }
    componentDidMount() {
        this.getCategorie8();
    }
    async  getCategorie8() {
        try {
            
        const categorie8 =await Api.get(`/categorie8`)
        this.setState({ categorie8: categorie8.data, loading: false})
            console.log(
                'categorie', categorie8
            )
        } catch (error) {
            // alert("test")
        }

        
    
          }
          render  () {
            const {loading,categorie8}= this.state  
            const pathImg = "http://localhost/pfe_backend/public/uploads/"
        return(<>
            <Navbar/>
            <section class="bg-light">
             <div class="container py-5" enctype="multipart/form-data">
            
                 <nav aria-label="breadcrumb">
                   <ol class="breadcrumb bg-transparent pl-0 mb-0">
                     <li class="breadcrumb-item"><a href="/"> <strong>TunEnchere </strong></a></li>
                     <li class="breadcrumb-item"><a href="/categorie1">Catégorie :  <strong> {categorie8.nom}</strong></a></li>
                  </ol>
                 </nav> 
                 <br></br>    
        {loading ? (
            <div class="row text-center py-3">
             
            </div>
             ) : (
  
    <div class={'row'}>
       
       { this.state.categorie8.articles.map(articles =>
                <div class="col-12 col-md-4 mb-4" key={articles.id}>
    
        <div class="card h-100">
        <a href="/detailEnch">
             <center></center><img src= { pathImg + `${articles.images.map(el=>el.url)}`  }
             class="card-img-top" alt="..." />
            </a>
            <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="card-text-prix"> <strong> {articles.prix_initial} </strong> TND  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{articles.titre}</a>
                <p class="card-text-description">
               <strong>{articles.description} </strong>
                </p>
            </div>
        </div>
   
   </div>
      
      
      )}</div>)}
      </div>
      </section>
      <Footer/>
      </>
      
      )
}}
export default Cat8;