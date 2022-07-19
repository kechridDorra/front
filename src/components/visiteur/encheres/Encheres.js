import "./Encheres.css";
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
function Encheres() {
  const [encheres, setEncheres] = useState();

  const navigate = useNavigate();

  function showDetails(encherId) {
    navigate(`/detailEnch/${encherId}`, {
      state: {
        id: encherId,
      },
    });
  }

  const pathImg = "http://localhost/pfe_backend/public/uploads/";

  async function getEncheres() {
    try {
      const encheres = await Api.get(`/encheres`);
      // const users =await   axios.get(`https://127.0.0.1:8000/users`)
      setEncheres(encheres.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEncheres();
  }, []);

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
                <a href="/encheres">
                  <strong>Nos encheres </strong>
                </a>
              </li>
            </ol>
          </nav>
          <br></br>
          <div class="col-lg-6 m-auto"></div>
          {encheres && encheres.length > 0 ?  (
            <div class={"row"}>
              {encheres.map((enchere) => (
                <div class="col-10 col-md-4 mb-4" key={enchere.id}>
                  <div
                    class="card h-100"
                    onClick={() => {
                      showDetails(enchere.id);
                    }}
                  >
                    <center></center>
                    <img
                      src={
                        pathImg +
                        `${enchere.articles.map((el) => el.images[0].url)}`
                      }
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-muted fa fa-star"></i>
                          <i class="text-muted fa fa-star"></i>
                        </li>
                        <li class="card-text-prix">
                          {" "}
                          <strong>
                            {" "}
                            <del>{enchere.articles.map((el) => el.prix_initial)}</del>
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
                        Commence le&nbsp;
                        <strong> {enchere.date_debut.substring(0, 10)}</strong>
                        &nbsp;à&nbsp;
                        <strong>{enchere.date_debut.substring(11, 19)}</strong>
                      </p>
                      <p class="card-text-date-fin">
                        Termine le &nbsp;
                        <strong>{enchere.date_fin.substring(0, 10)}</strong>
                        &nbsp;à&nbsp;
                        <strong>{enchere.date_fin.substring(11, 19)} </strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          ):<></>}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Encheres;
