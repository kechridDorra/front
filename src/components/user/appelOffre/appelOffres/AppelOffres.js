import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React from "react";

import NavbarUser from "../../navbarUser/NavbarUser";
import Footer from "../../../Footer";
import { get } from "../../../../services/http";

const AppelOffres = () => {
  const userInfo = localStorage.getItem("user-info");
  const [appel, setAppel] = useState({});
  async function AppelOffres() {
    try {
      const userApiUrl = `/appelOffres`;
      const res = await get(userApiUrl);
      setAppel(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AppelOffres();
  }, [userInfo]);
 
  return (
    <>
      <NavbarUser />
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
                <a href="/appelOffres">
                  <strong>Appels d'offres </strong>
                </a>
              </li>
            </ol>
          </nav><br></br>
          <div class="col-lg-6 m-auto"></div>
          {appel && appel.length > 0 ?  (
            <div class={"row"}>
              {appel.map((dispo) => (
                <div class="row" key={dispo.id}>
                 <ul class="list-unstyled">
                      <li>
                        <div class="card">
                          <div class="card-header d-flex justify-content-between P-1">
                            <p class="fw-bold mb-0">
                            {dispo.user.nom}{" "}  {dispo.user.prenom}{" "}
                            </p>
                            <p>
                              <i class="fa fa-phone"></i> 
                              {""} {dispo.user.telephone}{" "}
                              <i class="fa fa-envelope"> </i> 
                              {""} {dispo.user.email} {" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <p class="mb-0">
                              <strong>Titre: </strong>
                              {dispo.titre}{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <p class="mb-0">
                              <strong> Description: </strong>
                            {dispo.description}{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <p class="mb-0">
                              <strong> Prix: </strong>
                              {dispo.prix ? `${dispo.prix}`:"0"} <sup>DT</sup>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="d-flex justify-content-between mb-4">
                        <div class="card w-100">
                          <div class="card-body">
                            <p class="mb-0">
                              <strong>Réponse: </strong>
                              <p>{dispo.propositions.map( (el) => el.reponse)}{" "}</p>
                            </p>
                            <p class="mb-0">
                              <strong>Prix proposé: </strong>
                              <p> 
                               {dispo.propositions.map( (el) => el.prix)} <sup>DT</sup></p>
                          
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
  )
};

export default AppelOffres;
