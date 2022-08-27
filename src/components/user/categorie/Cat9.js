import "./Cat.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Api from "../../../services/Api";
import NavbarUser from "../navbarUser/NavbarUser";
class Cat9 extends Component {
  constructor() {
    super();
    this.state = { categorie9: [], loading: true };
  }
  componentDidMount() {
    this.getCategorie9();
  }
  async getCategorie9() {
    try {
      const categorie9 = await Api.get(`/categorie9`);
      this.setState({ categorie9: categorie9.data, loading: false });
      console.log("categorie", categorie9);
    } catch (error) {
      // alert("test")
    }
  }
  render() {
    const { loading, categorie9 } = this.state;
    const pathImg = "http://localhost/pfe_backend/public/uploads/";
    return (
      <>
        <NavbarUser />
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
                <a href="/categories">
                  <strong>List des Categories </strong>
                </a>
              </li>
                <li class="breadcrumb-item">
                  <a href="/cat9">
                    Catégorie : <strong> {categorie9.nom}</strong>
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
                {this.state.categorie9.encheres.map(encheres =>
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
export default Cat9;
