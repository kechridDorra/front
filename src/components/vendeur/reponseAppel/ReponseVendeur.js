import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Footer from "../../Footer";
import { useParams } from "react-router-dom";
import NavbarUser from "../../user/navbarUser/NavbarUser";
import { get } from "../../../services/http";
const ReponseVendeur = () => {
  const userInfo = localStorage.getItem("user-info");
  const [appel, setAppel] = useState({});
  const { profilVendeur } = useParams();
  const navigate = useNavigate();
  async function AppelOffres() {
    try {
      const userApiUrl = `/appelOffres/${profilVendeur}`;
      const res = await get(userApiUrl);
      setAppel(res.data);
      console.log("apls", appel);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AppelOffres();
  }, [userInfo]);

  function SaisieProposition(profilVendeur, appelId) {
    navigate(`/saisieProposition/${profilVendeur}/${appelId}`, {
      state: {
        id: appelId,
        id: profilVendeur,
      },
    });
  }

  const pathImg = "http://localhost/pfe_backend/public/uploads/";
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
                  <strong> Appels d'offres </strong>
                </a>
              </li>
            </ol>
          </nav>
          <br></br>
          <div class="col-lg-6 m-auto"></div>
          {appel && appel.length > 0 ? (
            <div class={"row"}>
              {appel.map((apl) => (
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
                            <strong>Créateur: </strong>
                            {apl.user.nom}{" "}{apl.user.nom}
                          </p>  
                          <p class="mb-0">
                            <strong>Télephone: </strong>
                            {apl.user.telephone}
                          </p>                    
                          <p class="mb-0">
                            <strong>email: </strong>
                            {apl.user.email}
                          </p>
                          <p class="mb-0">
                            <strong>Titre: </strong>
                            {apl.titre}{" "}
                          </p>
                          <p class="mb-0">
                            <strong> Description: </strong>
                            {apl.description}{" "}
                          </p>
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
                            <ul>
                              {apl.propositions.map((el) => (
                                <li>
                                  <strong>Réponse: </strong>
                                  {el.reponse}
                                  <br></br>
                                  <strong>Prix: </strong>
                                  {el.prix ? `${el.prix}` : "0"} <sup>DT</sup>
                                  
                                </li>
                              ))}
                            </ul>
                            <a
                              class="btn btn-secondary"
                              onClick={() => {
                                SaisieProposition(profilVendeur, apl.id);
                              }}
                            >
                              Ajouter une proposition
                            </a>

                            <a></a>
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

export default ReponseVendeur;
