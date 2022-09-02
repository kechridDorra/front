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
  const pathImg = "http://localhost/pfe_backend/public/uploads/";
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
                  <strong> Mes appels d'offres </strong>
                </a>
              </li>
            </ol>
          </nav>
          <br></br>
          <div class="col-lg-6 m-auto"></div>
          {appels && appels.length > 0 ? (
            <div class={"row"}>
              {appels.map((apl) => (
                <div class="col-10 col-md-4 mb-4" key={apl.id}>
                  <ul class="list-unstyled">
                    <li>
                      <div class="card h-100">
                        <center></center>
                        <img
                          src={pathImg + `${apl.image}`}
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <p class="mb-0">
                            <strong>Titre: </strong>
                            {apl.titre}{" "}
                          </p>
                        </div>
                        <div class="card-body">
                          <p class="mb-0">
                            <strong> Description: </strong>
                            {apl.description}{" "}
                          </p>
                        </div>
                        <div class="card-body">
                          <p class="mb-0">
                            <strong> Prix: </strong>
                            {apl.prix ? `${apl.prix}` : "0"} <sup>DT</sup>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="d-flex justify-content-between mb-4">
                        <div class="card w-100">
                          <div class="card-body">
                            <p class="mb-0">
                              <strong>Réponse: </strong>
                              {apl.propositions.map((el) => el.reponse)}
                            </p>
                          </div>
                        </div>
                      </li>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default MesAppelOffres;
