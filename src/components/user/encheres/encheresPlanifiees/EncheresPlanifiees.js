import "./EncheresPlanifiees.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { get } from "../../../../services/http";
import { post } from "../../../../services/http";
import NavbarUser from "../../navbarUser/NavbarUser";
const EncheresPlanifiees= () => {
  const { enchere } = useParams();
  const { user } = useParams();
  const userInfo = localStorage.getItem("user-info");
  const [encheres, setEncheres] = useState({});
  const [rej, setRej] = useState({});
  const navigate = useNavigate();
  //list d'enchere         
  async function EncheresPlanifiees() {
    try {
      const userApiUrl = `/encheresPlanifiees/${user}`;
      const res = await get(userApiUrl);
      console.log("ec", encheres);
      setEncheres(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    EncheresPlanifiees();
  }, [userInfo]);

  function ListeParticipants(userId,enchereId) {
    navigate(`/listeParticipants/${userId}/${enchereId}`, {
      state: {
        id: enchereId,
        id: userId,
      },
    });
  }
  async function handleForm(e) {
    e.preventDefault();
    console.log("form", rej);
    const userApiUrl = `/rejoindre/${user}/${enchere}`;
    const res = await post(userApiUrl, rej);
    console.log("ggg", res);
    navigate(`/rejoindreP/${user}/${enchere}`);
  }
 function RejoindreP(userId,enchereId) {
    navigate(`/rejoindreP/${userId}/${enchereId}`, {
      state: {
        id: enchereId,
        id: userId,
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
                  <strong>Les encheres Planifiees </strong>
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
                 <div class="card h-100">
        <a href="/login">
       { /*{"/detailEnch/" + `${enchere.id}`}*/}
                    <center></center>
                    <img
                      src={
                        pathImg +
                        `${enchere.image}`
                      }
                      class="card-img-top"
                      alt="..."
                    /></a>
                    <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                          <li className="prix_depart">
                            <strong>
                              {" "}
                              <del>
                              <dl>
                               
                                {" "}
                                {enchere.prix_depart
                                }{" "}
                               <sup> DT{" "}</sup>
                               </dl></del>
                               
                            </strong>{" "}
                      
                          </li>
                          <li className="prix_vente">
                            <strong>
                              {" "}
                              <dl>
                                {" "}
                                {enchere.prix_vente
                                }{" "}
                               <sup> DT{" "}</sup>
                               </dl>
                            </strong>{" "}</li>
                        </ul>
                        <p class="h3 text-decoration-none text-dark">
                          <strong>
                            {enchere.nom_article}
                        
                          </strong>
                        </p>
                       
                        <p class="card-text-description">
                        {enchere.description_ench} :
                        </p>
                        {enchere.description_article}
                        <p class="card-text-date-debut">
                          Commence le&nbsp;
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
                          a termine le &nbsp;
                          <strong>{enchere.date_fin.substring(0, 10)}</strong>
                          &nbsp;à&nbsp;
                          <strong>{enchere.date_fin.substring(11, 19)} </strong>
                        </p>
                        <p class="text-center">
                        <form
                          class="form-horizontal"
                          method="post"
                          action="#"
                          onSubmit={() => handleForm()}
                        >
                          <a class="btn btn-success" onClick={() => {
                            RejoindreP(user, enchere.id);
                          }}>
                            Rejoindre
                          </a>
                        
                          <a
                          class="btn btn-secondary"
                          onClick={() => {
                            ListeParticipants(user,enchere.id);
                          }}>
                          Liste Participants
                        </a>
                        </form>
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
export default EncheresPlanifiees;
