import { useEffect, useState } from "react";
import { get } from "../../../../services/http";
import { post } from "../../../../services/http";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavbarUser from "../../navbarUser/NavbarUser";
import Footer from "../../../Footer";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
const AjoutAppelOffre = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate = useNavigate();
  const { user} = useParams();
  const [state1, setstate1] = useState({
    titre: "",
    description: "",
    prix: "",
    image: null,
  });
  async function handleForm(e) {
    e.preventDefault();
    console.log("form", state1);
    const userApiUrl = `appelOffre/${user}`;
    const res = await post(userApiUrl, state1);

    console.log(res);
    navigate("/appelOffres");
  }
  function handleInput(e) {
    const newdata1 = { ...state1 };
    newdata1[e.target.id] = e.target.value;
    setstate1(newdata1);
    console.log(newdata1);
  }
  async function getUserDetails() {
    try {
      const parsedUser = JSON.parse(userInfo);
      const userApiUrl = `user/mail/${parsedUser.email}`;
      const res = await get(userApiUrl);
      console.log("user", res);
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

      <div className="form-container">
        <center>
          <div class="container">
            <form
              class="form-horizontal"
              method="post"
              action="#"
              onSubmit={(e) => handleForm(e)}
            >
              <div class="col-lg-6">
                <br />
                <div class="h2 text-center">Ajout Appel d'offre</div>
                <div class="h4 text-muted text-center pt-2">
                  Entrez les coordonnees de l'appel d'offre
                </div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Titre
                  </label>
                  <input
                    type="text"
                    required
                    id="titre"
                    class="form-control "
                    placeholder="Entrer un titre de l'appel d'offre"
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Description
                  </label>
                  <textarea
                    required
                    id="contexte"
                    class="form-control "
                    placeholder="Entrer une description de l'appel d'offre"
                    onChange={(e) => handleInput(e)}
                  />

                  <div class="col-md-8 mb-4">
                    <label class="form-label" for="typeText">
                      Prix en Dinars
                    </label>
                    <input
                      type="number"
                     
                      id="prix"
                      class="form-control "
                      placeholder="Entrer le prix  "
                      onChange={(e) => handleInput(e)}
                    />
                  </div>
                  <div class="row ">
                  
                    <input
                      type="file"
                      id="image"
                      onChange={(e) => handleInput(e)}
                      required
                      
                    />
                  </div>
                </div>
                <div class="row">
                  <center>
                    <div class="col-12 col-md-4 mb-3">
                      <button className="btn btn-dark btn-lg btn-block">
                        Enregistrer
                      </button>
                    </div>
                  </center>
                </div>
              </div>
            </form>
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
};
export default AjoutAppelOffre;
