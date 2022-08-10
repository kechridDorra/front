import "./MesEncheres.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { get } from "../../../services/http";
import {remove} from "../../../services/http";
import NavbarUser from "../../user/navbarUser/NavbarUser";
const MesEncheres= () => {
  const userInfo = localStorage.getItem("user-info");
  const [enchere, setEnchere] = useState({});
  const navigate = useNavigate();
  async function MesEncheres() {
    try {
      const userApiUrl = `/mesEncheres`;
      const res = await get(userApiUrl);
      console.log("mesEncheres", res);
      setEnchere(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const removeEnchere = async (enchere) => {
    try {
        const encheredelete =(`/enchere/${enchere}`)
      const res = await remove (encheredelete);
      console.log('Item successfully deleted.')
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    MesEncheres();
  }, [userInfo]);

  function MesParticipants(enchereId) {
    navigate(`/mesParticipants/${enchereId}`, {
      state: {
        id: enchereId,
      },
    });
  }

  
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
                  <strong>Mes enchéres</strong>
                </a>
              </li>
            </ol>
          </nav>
          <br></br>
          <div class="col-lg-6 m-auto"></div>
          {enchere && enchere.length > 0 ?  (
            <div class={"row"}>
              {enchere.map((ench) => (
                <div class="col-10 col-md-4 mb-4" key={ench.id}>
                  <div class="card h-100">
                    <center></center>
                    <img
                      src={
                        pathImg +
                        `${ench.articles.map((el) => el.images[0].url)}`
                      }
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                          <li className="prixDepart">
                         
                            <strong>
                              {" "}
                              <dl>
                                {" "}
                                {ench.prix_depart
                                }{" "}
                               <sup> DT{" "}</sup>
                               </dl>
                            </strong>{" "}
                          </li>
                         
                        </ul>
                        <p class="h3 text-decoration-none text-dark">
                          <strong>
                            {ench.articles.map((el) => el.titre)}
                          </strong>
                        </p>
                        <p class="card-text-description">
                          {ench.description_ench} :
                        </p>
                        {ench.articles.map((el) => el.description)}
                        <p class="card-text-date-debut">
                          Commence le&nbsp;
                          <strong>
                            {" "}
                            {ench.date_debut.substring(0, 10)}
                          </strong>
                          &nbsp;à&nbsp;
                          <strong>
                            {ench.date_debut.substring(11, 19)}
                          </strong>
                        </p>
                        <p class="card-text-date-fin">
                          a termine le &nbsp;
                          <strong>{ench.date_fin.substring(0, 10)}</strong>
                          &nbsp;à&nbsp;
                          <strong>{ench.date_fin.substring(11, 19)} </strong>
                        </p>
                        <p class="text-center">
                        <p className="gagnant ">
                          
                           Le gagnant est: 

                          <strong> dorra </strong>
                        </p>
                          <div class="text-center pt-3 text-muted">
                          <a
                          class="btn btn-secondary"
                          onClick={() => {
                            MesParticipants(ench.id);
                          }}
                        >
                          Liste des Participants
                        </a>
                          </div>
                        </p>
                       <center>
                            <p> 
                            <button type="button" class="btn btn-warning">Modifier</button>
                            {" "}
                            <button type="button" class="btn btn-danger"
                            onClick={() => removeEnchere(ench.id)}>
                            Supprimer</button>
                             </p>
                      </center>
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
export default MesEncheres;
