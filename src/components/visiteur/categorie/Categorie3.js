import "./Categorie.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Api from "../../../services/Api";

class Categorie3 extends Component {
  constructor() {
    super();
    this.state = { categorie3: [], loading: true };
  }
  componentDidMount() {
    this.getCategorie3();
  }
  async getCategorie3() {
    try {
      const categorie3 = await Api.get(`/categorie3`);
      this.setState({ categorie3: categorie3.data, loading: false });
      console.log("categorie", categorie3);
    } catch (error) {
      // alert("test")
    }
  }
  render() {
    const { loading, categorie3 } = this.state;
    const pathImg = "http://localhost/pfe_backend/public/uploads/";
    return (
      <>
        <Navbar />
        <section class="bg-light">
          <div class="container py-5" enctype="multipart/form-data">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent pl-0 mb-0">
                <li class="breadcrumb-item">
                  <a href="/">
                    {" "}
                    <strong>TunEnchere </strong>
                  </a>
                </li>
                <li class="breadcrumb-item">
                <a href="/ListCategories">
                  <strong>List des Categories </strong>
                </a>
              </li>
                <li class="breadcrumb-item">
                  <a href="/categorie3">
                    Catégorie : <strong> {categorie3.nom}</strong>
                  </a>
                </li>
              </ol>
            </nav>
            <br></br>
            <div class="col-lg-6 m-auto"></div>
            {loading ? (
              <div class="row text-center py-3"></div>
            ) : (
              <div class={"row"}>
                {this.state.categorie3.encheres.map(encheres =>
                <div class="col-12 col-md-4 mb-4" key={encheres.id}>
                    <div class="card h-100">
                     <a href={
                            pathImg +
                            `${encheres.image}`
                          }>
          
                        <center></center>
                        <img
                          src={
                            pathImg +
                            `${encheres.image}`
                          }
                          class="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between">
                          <li className="prix_depart">
                            <strong>
                              {" "}
                              <del>
                                <dl>
                                  {" "}
                                  {encheres.prix_depart} <sup> DT </sup>
                                </dl>
                              </del>
                            </strong>{" "}
                          </li>
                          <li className="prix_vente">
                            <strong>
                              {" "}
                              <dl>
                                {" "}
                                {encheres.prix_vente} <sup> DT </sup>
                              </dl>
                            </strong>{" "}
                          </li>
                        </ul>
                            
                      <p class="h3 text-decoration-none text-dark">
                     
                     <strong>{encheres.nom_article}</strong>
                   </p>
                   <p class="card-text-description">
                      {encheres.description_ench} :
                     </p>
                   {encheres.description_article}
                        <p class="card-text-date-debut">
                          a commencé le&nbsp;
                          <strong>
                            {" "}
                            {encheres.date_debut.substring(0, 10)}
                          </strong>
                          &nbsp;à&nbsp;
                          <strong>
                            {encheres.date_debut.substring(11, 19)}
                          </strong>
                        </p>
                        <p class="card-text-date-fin">
                          est terminée le &nbsp;
                          <strong>{encheres.date_fin.substring(0, 10)}</strong>
                          &nbsp;à&nbsp;
                          <strong>{encheres.date_fin.substring(11, 19)} </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default Categorie3;