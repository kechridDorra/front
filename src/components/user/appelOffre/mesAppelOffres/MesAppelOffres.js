import bootstrap from "bootstrap";
import "./MesAppelOffres.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React from "react";
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import NavbarUser from "../../navbarUser/NavbarUser";
import Footer from "../../../Footer";
import { get } from "../../../../services/http";
const MesAppelOffres = () => {
  const userInfo = localStorage.getItem("user-info");
  const [appels, setAppels] = useState({});
  async function getUserDetails() {
    try {
      const parsedUser = JSON.parse(userInfo);
      const userApiUrl = `user/mail/${parsedUser.email}`;
      console.log(parsedUser);
      const res = await get(userApiUrl);
      console.log("mesAppels", res.data[0].appel_offres);
      setAppels(res.data[0].appel_offres);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [userInfo]);

  return (
    <>
      <NavbarUser />
  
        {/* {appels && appels.length > 0 ? (
          <div class={"row"}>
            {appels.map((mesAppels) => (
              <div class="row" key={mesAppels.id}>
                <h1>{mesAppels.id}</h1>
              </div>
            ))}
          </div>
        ) : (
          <></>
		)}*/}

<section class="bg-light">
        <div class="container py-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent pl-0 mb-0">
              <li class="breadcrumb-item">
                <a href="/">
                  <strong>TunEnchere </strong>
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="/appelOffresDispo">
                  <strong>Mes Appels d'offres </strong>
                </a>
              </li>
              
            </ol>
          </nav><br></br>
        
       
          {appels && appels.length > 0 ? (
            <div class={"row"}>
              {appels.map((mesAppels) => (
              <div class="row" key={mesAppels.id}>
                 <ul class="list-unstyled">
                      <li>
                        <div class="card">
                          <div class="card-header d-flex justify-content-between P-1">
                            <p> 
                            <button type="button" class="btn btn-warning">Modifier</button>
                            </p>
                            <p>
                            <button type="button" class="btn btn-danger">Supprimer</button>
                             </p>
                          </div>
                          <div class="card-body">
                            <p class="mb-0">
                              <strong> Constexte: </strong>
                              {mesAppels.contexte}{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <p class="mb-0">
                              <strong> date d'expiration: </strong>
                            {mesAppels.date_exp.substring(0, 10)}{" "}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="d-flex justify-content-between mb-4">
                        <div class="card w-100">
                          <div class="card-body">
                            <p class="mb-0">
                              <strong>Réponse: </strong>
                              {mesAppels.propositions.map((el) => el.reponse)}{" "}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
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
};
export default MesAppelOffres;
