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
import swal from "sweetalert";
const AjoutAppelOffre = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate = useNavigate();
  const { user} = useParams();
  const [offre, setOffre] = useState({
    titre: "",
    description: "",
    prix: "",
  });
  const [picture, setPicture] = useState([]);
  const [errorlist, setError] = useState([]);
  function handleInput(e) {
    e.persist();
    setOffre({...offre,[e.target.id]:e.target.value});
   }
   function handleImage(e) {
    e.persist();
    setPicture({ image :e.target.files[0]});
   }
 async function handleForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image',picture.image);
    formData.append('titre',offre.titre);
    formData.append('description',offre.description);
    formData.append('prix',offre.prix);
    const userApiUrl = `appelOffre/${user}`;
    const res = await post(userApiUrl, formData);
    if (res.data.status === 200) {
      swal("offre bien crée", res.data.message, "succées");
      setError([]);
    } else if (res.data.status === 422) {
      swal("erreur");
      setError(res.data.errors);
    }
    console.log(res);
    navigate("/mesAppelOffres");
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
                      onChange={handleImage}  
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
