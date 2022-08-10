import "./EncheresEnCours.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { useNavigate , useParams} from "react-router-dom";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { get } from "../../../../services/http";
import NavbarUser from "../../navbarUser/NavbarUser";
import ParticipantsEnCours from "./participantsEnCours/ParticipantsEnCours";

const EncheresEnCours= () => {
  const { enchere } = useParams();
  const userInfo = localStorage.getItem("user-info");
  const [encheres, setEncheres] = useState({});
  const navigate = useNavigate();
  async function EncheresEnCours() {
    try {
      const userApiUrl = `/encheresEnCours`;
      const res = await get(userApiUrl);
      console.log("enCours", res);
      setEncheres(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    EncheresEnCours();
  }, [userInfo]);

  function ParticipantsEnCours(enchereId) {
    navigate(`/participantsEnCours/${enchereId}`, {
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
                  <strong>Les encheres En Cours </strong>
                </a>
              </li>
            </ol>
          </nav>
          <br></br>
          <div class="col-lg-6 m-auto"></div>
          {encheres && encheres.length > 0 ?  (
            <div class={"row"}>
              {encheres.map((ench) => (
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
                          <li className="prix_depart">
                            <strong>
                              {" "}
                              <del>
                              <dl>
                               
                                {" "}
                                {ench.prix_depart
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
                                {ench.prix_vente
                                }{" "}
                               <sup> DT{" "}</sup>
                               </dl>
                            </strong>{" "}</li>
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
                        <a class="btn btn-success"
                        
                        >Rejoindre </a>{" "}
                       
                       <a
                          class="btn btn-secondary"
                          onClick={() => {
                            ParticipantsEnCours(ench.id);
                          }}
                        >
                          Liste des Participants
                        </a>
                        
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
export default EncheresEnCours;