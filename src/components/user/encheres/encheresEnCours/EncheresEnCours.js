import "./EncheresEnCours.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { get } from "../../../../services/http";
import { post } from "../../../../services/http";
import NavbarUser from "../../navbarUser/NavbarUser";
import {toast} from 'react-toastify';
const EncheresEnCours = () => {
  const { enchere } = useParams();
  const { user } = useParams();
  const userInfo = localStorage.getItem("user-info");
  const [encheres, setEncheres] = useState({});
  const [proposition, setProposition] = useState({});
  const navigate = useNavigate();
  //list d'enchere         
  async function EncheresEnCours() {
    try {
      const userApiUrl = `/encheresEnCours/${user}`;
      const res = await get(userApiUrl);
      console.log("ec", encheres);
      setEncheres(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    EncheresEnCours();
  }, [userInfo]);
  //boutton participations
  function ListeParticipants(userId,enchereId) {
    navigate(`/listeParticipants/${userId}/${enchereId}`, {
      state: {
        id: enchereId,
        id: userId,
      },
    });
  }
  /*boutton rejoindre 
  async function rejoindre() {
    const userApiUrl = `/rejoindre/${user}/${enchere}`;
    const res = await post(userApiUrl, rejoindre);
    console.log("ggg", res);
    navigate(`/participationsEncCours/${enchere}`);
  }*/



  const pathImg = "http://localhost/pfe_backend/public/uploads/";

  return (
    <>
      <NavbarUser />
      <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
         
          <div class="col-lg-6 m-auto"></div>
          {encheres && encheres.length > 0 ? (
            <div class={"row"}>
              {encheres.map((enchere) => (
                <div class="col-10 col-md-4 mb-4" key={enchere.id}>
                  <div class="card h-100">
                    <a href="/login">
                      {/*{"/detailEnch/" + `${enchere.id}`}*/}
                      <center></center>
                      <img
                        src={pathImg + `${enchere.image}`}
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
                                {enchere.prix_depart} <sup> DT </sup>
                              </dl>
                            </del>
                          </strong>{" "}
                        </li>
                        <li className="prix_vente">
                          <strong>
                            {" "}
                            <dl>
                              {" "}
                              {enchere.prix_vente} <sup> DT </sup>
                            </dl>
                          </strong>{" "}
                        </li>
                      </ul>

                      <p class="h3 text-decoration-none text-dark">
                        <strong>{enchere.nom_article}</strong>
                      </p>
                      <p class="card-text-description">
                        {enchere.description_ench} :
                      </p>
                      {enchere.description_article}
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
                      <p class="text-center">
                        <form
                          class="form-horizontal"
                          method="post"
                          action="#"
                         
                        >
                           <button className="btn btn-dark btn-lg btn-block">Rejoindre </button>{" "}
                        </form>
                        <a
                          class="btn btn-secondary"
                          onClick={() => {
                            ListeParticipants(user,enchere.id);
                          }}
                        >
                          Liste des Participants
                        </a>
                      </p>
                    </div>
                  </div>
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
export default EncheresEnCours;
