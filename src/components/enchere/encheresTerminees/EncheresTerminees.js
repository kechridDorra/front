import './EncheresTerminees.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Api from '../../../services/Api';
import NavbarUser from '../../user/navbarUser/NavbarUser';
class EncheresTerminees extends Component {
    constructor() {
        super();
        this.state = {encheres: [], loading: true};
    }
    
    componentDidMount() {
        this.getEncheres();
    }
    async  getEncheres() {
        try {    
        const  encheres =await Api.get(`/encheresTerminees`)
        // const users =await   axios.get(`https://127.0.0.1:8000/users`)
        this.setState({ encheres: encheres.data, loading: false})
        
        } catch (error) {
           console.log(error)
        }
   
          }
        render  () {
            const {loading,encheres}= this.state  
            const pathImg = "http://localhost/pfe_backend/public/uploads/"
        return(<>
            <NavbarUser/>
            <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
        <nav aria-label="breadcrumb">
                   <ol class="breadcrumb bg-transparent pl-0 mb-0">
                     <li class="breadcrumb-item"><a href="/"> <strong>TunEnchere </strong></a></li>
                     <li class="breadcrumb-item"><a href="/encheres"><strong>Les enchéres terminees</strong></a></li>
                  </ol>
                 </nav> 
                 <br></br>    
        <div class="col-lg-6 m-auto">
                     
                 </div>
        {loading ? (
            <div class="row text-center py-3">
               
            </div>
             ) : (
  
    <div class={'row'}>
        
   { this.state.encheres.map(enchere =>
                <div class="col-10 col-md-4 mb-4" key={encheres.id}>
        <div class="card h-100">
            <a href={"/detailEnch/"+`${enchere.id}`}>
             <center></center><img src= { pathImg + `${enchere.articles.map(el=>el.images[0].url)}`  }
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
                    <li class="card-text-prix"> <strong> {enchere.articles.map(el=>el.prix_depart)}</strong> TND  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{enchere.articles.map(el=>el.titre)}</a>
                <p class="card-text-description">
               <strong> {enchere.description_ench}</strong>
                </p>
                <p class="card-text-date-debut">Commence le&nbsp;  
                <strong> {enchere.date_debut.substring(0, 10)}</strong> 
                &nbsp;à&nbsp;<strong>{enchere.date_debut.substring(11, 19)}</strong>
                </p>
                <p class="card-text-date-fin">Termine le &nbsp;
                <strong>{enchere.date_fin.substring(0, 10)}</strong>
                &nbsp;à&nbsp;<strong>{enchere.date_fin.substring(11, 19)} </strong>
                </p>
                
            </div>
        </div>
        </div>
   )}
   </div>
      
      
      )}</div></section>
      <Footer/>
      </>
      
      )
}}
export default EncheresTerminees;