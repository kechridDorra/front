import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Api from "../../../services/Api";
import Encheres from "../encheres/Encheres";
import e from "cors";
import { get } from "../../../services/http";
const DetailEnch = () => {
  const { enchere } = useParams();
  const [detail, SetDetail] = useState({});

  //const [image, setImage] = useState();

  const pathImg = "http://localhost/pfe_backend/public/uploads/";

  async function getDetailEnchere() {
    try {
      const res = await Api.get(`/enchere/${enchere}`);

      SetDetail(res.data);
      console.log("hh", detail);

  
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(detail.id);
    getDetailEnchere();
  }, [enchere]);

  return (
    <>
      <Navbar />
      <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
          <div class="row">
            <div class="col-md-6 position-relative mb-3 mb-md-0">
            

              <a
                href={pathImg +`${detail.image}`}
                data-effect="mfp-zoom-in"
                title=""
              >
                <img src={pathImg + `${detail.image}`} class="img-fluid" />
              </a>
            </div>

            <div class="col-md-6">
              <div class="d-flex justify-content-between">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-transparent pl-0 mb-0">
                    <li class="breadcrumb-item">
                      <a href="/">
                        {" "}
                        <strong>TunEnchere </strong>
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/categorie1">
                        {" "}
                        <strong> Nos enchéres</strong>
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/categorie1">
                        <strong> Détail Enchere</strong>
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
              <h1> {detail.nom_article} </h1>
              <span class="ml-2 text-danger font-weight-bold h4 mt-2">
                {" "}
                <del> {detail.prix_depart} TND</del>
              </span>
              <p>
                {" "}
                <strong>{detail.description_ench} : </strong>
                <br></br>
                {detail.description_article}
              </p>
              <div class="alert alert-warning mb-2 text-center h5 font-weight-bold">
                {" "}
                <i
                  class="fa fa-clock-o fa-2x align-middle mr-1"
                  aria-hidden="true"
                ></i>
                Enchère debut le {detail.date_debut.substring(0, 10)}{""}
                à {""}{detail.date_debut.substring(11, 19)}
              </div>
              <div class="alert alert-danger font-weight-bold rounded text-center mb-2">
                <i
                  class="fa fa-clock-o fa-2x align-middle mr-1"
                  aria-hidden="true"
                ></i>
                Enchère termine le {detail.date_fin.substring(0, 10)}{" "}
                à {""}
                {detail.date_debut.substring(11, 19)}
              </div>
              <div class="alert alert-success font-weight-bold rounded text-center mb-2">
                <i
                  class="fa fa-trophy fa-2x align-middle mr-1"
                  aria-hidden="true"
                ></i>
                &nbsp; Prix de vente
                <span>&nbsp;{detail.prix_vente} <sup> DT{" "}</sup></span>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <Footer />
    </>
  );
};
export default DetailEnch;
