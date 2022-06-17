import './EnchereP.css';
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

class EnchereP extends Component {/*
constructor() {
    super();
    this.state = { articles: [], loading: true};
}
componentDidMount() {
    this.getArticles();
}
async  getArticles() {
    try {
        
    const  encheres =await Api.get(`/articles`)
    // const users =await   axios.get(`https://127.0.0.1:8000/users`)
    this.setState({ encheres: encheres.data, loading: false})
        console.log(
            'encheress', encheres
        )
    } catch (error) {
        // alert("test")
    }

      }
    render  () {
        const {loading,encheres}= this.state  
    
    return(<>
        <Navbar/>                                           
    <section class="bg-light">
        <div class="container py-5">
        <div class="col-lg-6 m-auto">
                     
                     <h1 class="h1"> Encheres Planifiées    </h1>
                 </div>
        {loading ? (
            <div class="row text-center py-3">
               
            </div>
             ) : (
    
            <div class={'row'}>
                
                 { this.state.encheres.map(enchere =>
                <div class="col-12 col-md-4 mb-4" key={encheres.id}>
                    
                    <div class="card h-100"   >
                        <a href="#">
                            <img src={enchere.articles.images[0].nom} class="card-img-top" alt="..." />
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li class="text-muted text-right">{enchere.articles.map(el=>el.prix_initial)} DT</li>                   
                            </ul>
                            <a href="#" class="h2 text-decoration-none text-dark"> {enchere.description_ench}</a>
                           <p class="card-text">
                             date debut :
                            </p> <div className="text-muted text-right">{enchere.date_debut}</div>
                            <p class="card-text">
                             date fin :
                            </p> <div className="text-muted text-right"> date Fin :{enchere.date_fin}</div>
                           
                        </div>
                    </div>
                </div>
                                    )}
               
               
                                   
            </div>
       )}  </div>
             
      </section>               
        <Footer/>
 
        </> )
}
*/}
export default EnchereP;