import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Login from "./login/Login";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { getUserById } from "../services/Api";
import { MDBCol, MDBInput } from "mdbreact";
import { NavDropdown } from "react-bootstrap";

function Navbar(props) {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  /*const [userData,setUserData]=useState([])
 useEffect(()=>{
     
         (async()=>{

            const res = await getUserById(id)
            if (id){
                setUserData(res)
            }
         })();
    
 },[id])*/
  return (
    <>
      {props.name}
      <nav
        class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div class="container text-light">
          <div class="w-100 d-flex justify-content-between">
            <div>
              <i class="fa fa-envelope mx-2"></i>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              ></a>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              >
                enchere4@gmail.com
              </a>

              <i class="fa fa-phone mx-2"></i>
              <a
                class="navbar-sm-brand text-light text-decoration-none"
                href="#"
              >
                010-000-0000
              </a>
            </div>
            <div>
              <a class="text-light" href="#" target="_blank" rel="sponsored">
                <i class="fab fa-facebook-f fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-instagram fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-twitter fa-sm fa-fw me-2"></i>
              </a>
              <a class="text-light" href="#" target="_blank">
                <i class="fab fa-linkedin fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
          <a
            class="navbar-brand text-success logo h1 align-self-center"
            href="/"
          >
            TunEnchère
          </a>

          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div class="flex-fill">
              <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Accueil
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/encheres">
                    Enchères
                  </a>
                </li>
                <li class="nav-item">
                  <NavDropdown title="Catégories">
                    <NavDropdown.Item href="/categorie1">
                      {" "}
                      Arts et Décoration
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie2">
                      Mode et Bijoux
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie3">
                      Informatique et Téléphones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie4">
                      Véhicules
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cat5">
                      Horlogerie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie6">
                      Eléctromenager
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie7">
                      Ameublement
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie8">
                      Immeubles et Maisons
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categorie9">
                      {" "}
                      Autres
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/appels">
                    Appel d'offres
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Comment ça marche ?
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/inscription">
                    Inscription
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    Connexion
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar align-self-center d-flex">
              <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div class="input-group-text">
                    <i class="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              {/* <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                          <i class="fa fa-fw fa-search text-dark mr-2"></i>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="/login">
                          <i class="fa fa-fw fa-user text-dark mr-3"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
    </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
