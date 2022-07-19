import "./EncheresEnCours.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Api from "../../../../services/Api";
import NavbarUser from "../../navbarUser/NavbarUser";
class EncheresEnCours extends Component {
  constructor() {
    super();
    this.state = { encheres: [], loading: true };
  }

  componentDidMount() {
    this.getEncheres();
  }
  async getEncheres() {
    try {
      const encheres = await Api.get(`/encheresEnCours`);
      // const users =await   axios.get(`https://127.0.0.1:8000/users`)
      this.setState({ encheres: encheres.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { loading, encheres } = this.state;
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
                  <a href="/encheres">
                    <strong>Les enchéres en cours</strong>
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
                {this.state.encheres.map((enchere) => (
                  <div class="col-10 col-md-4 mb-4" key={encheres.id}>
                    <div class="card h-100">
                      <a href={"/detailEnch/" + `${enchere.id}`}>
                        <center></center>
                        <img
                          src={
                            pathImg +
                            `${enchere.articles.map((el) => el.images[0].url)}`
                          }
                          class="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between">
                          <li className="prixInitial">
                            <strong>
                              {" "}
                              <del>
                                {" "}
                                {enchere.articles.map(
                                  (el) => el.prix_initial
                                )}{" "}
                                TND{" "}
                              </del>
                            </strong>{" "}
                          </li>
                          <li class="card-text-prix">
                            {" "}
                            <strong>
                              {" "}
                              {enchere.articles.map((el) => el.prix_vente)}
                            </strong>{" "}
                            TND{" "}
                          </li>
                        </ul>  
                        <p class="h3 text-decoration-none text-dark">
                        <strong>{enchere.articles.map((el) => el.titre)}</strong>
                      </p>
                      <p class="card-text-description">
                         {enchere.description_ench} :
                        </p>
                      {enchere.articles.map((el) => el.description)}
                        <p class="card-text-date-debut">
                          a commencée le&nbsp;
                          <strong>
                            {" "}
                            {enchere.date_debut.substring(0, 10)}
                          </strong>
                          &nbsp;à&nbsp;
                          <strong>
                            {enchere.date_debut.substring(11, 19)}
                          </strong>
                        </p>
                        <p class="card-text-date-fin">
                          termine le &nbsp;
                          <strong>{enchere.date_fin.substring(0, 10)}</strong>
                          &nbsp;à&nbsp;
                          <strong>{enchere.date_fin.substring(11, 19)} </strong>
                        </p>
                        <p class="text-center">
                          <a class="btn btn-success">Rejoindre</a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default EncheresEnCours;