import "./ListCategories.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "../../../../services/Api";
import { useState, useEffect } from "react";

function ListCategories() {
  const [categories, setCategories] = useState();
  const pathImg = "http://localhost/pfe_backend/public/uploads/";
  const navigate = useNavigate();
  async function getCategories() {
    try {
      const cat = await Api.get(`/categories`);
      // const users =await   axios.get(`https://127.0.0.1:8000/users`)
      setCategories(categories);
      console.log("cat", cat);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);

  function consulter(categorieId) {
    navigate(`/cat/${categorieId}`, {
      state: {
        id: categorieId,
      },
    });
  }
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
            </ol>
          </nav>
          <section class="container py-1">
            <div class={"row"}>
              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/deco.jpg"
                  ></img>   
                <h5 class="text-center mt-3 mb-3">Arts et decoration</h5>
                <p class="text-center">
                  <a href="/categorie1">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/bijoux.jpg"
                  ></img>
                <h2 class="h5 text-center mt-3 mb-3">Modes et Bijoux</h2>
                <p class="text-center">
                <a href="/categorie2">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/infotel.jpg"
                  ></img>
                <h2 class="h5 text-center mt-3 mb-3">
                  Informatiques et Téléphones
                </h2>
                <p class="text-center">
                <a href="/categorie3">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/vehicule.jpg"
                  ></img>
                <h5 class="text-center mt-3 mb-3">Véhicules</h5>
                <p class="text-center">
                <a href="/categorie4">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/horlogerie.jpg"
                  ></img>
                <h5 class="text-center mt-3 mb-3">Horlogerie</h5>
                <p class="text-center">
                <a href="/categorie5">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/electro.jpg"
                  ></img>
                <h5 class="text-center mt-3 mb-3">Electomenager</h5>
                <p class="text-center">
                <a href="/categorie6">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/ameublement.jpg"
                  ></img>
                <h5 class="text-center mt-3 mb-3">Ameublement</h5>
                <p class="text-center">
                <a href="/categorie7">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/immeubles.jpg"
                  ></img>
                <h5 class="text-center mt-3 mb-3">Immeubles et Maisons</h5>
                <p class="text-center">
                <a href="/categorie8">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>

              <div class="col-12 col-md-4 p-5 mt-1">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/categories/autres.jpg"
                  ></img>
                <h5 class="text-center mt-3 mb-3">Autres</h5>
                <p class="text-center">
                <a href="/categorie9">
                    <button class="btn btn-success">Consulter</button>
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default ListCategories;
