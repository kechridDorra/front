import "./CreerEnchere.css";
import Api from "../../../services/Api";
import { toast } from "react-toastify";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { post } from "../../../services/http";
import { get } from "../../../services/http";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarUser from "../../user/navbarUser/NavbarUser";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const CreerEnchere = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate = useNavigate();
  const { profilVendeur } = useParams();
  const [enchere, setEnchere] = useState({
    description_ench: "",
    date_debut: "",
    date_fin: "",
    nom_article: "",
    prix_depart: "",
    description_article: "",
    categorie: "",
  });
  const [categories, setCategories] = useState([]);

  const [test, setTest] = useState();

  async function getCategories() {
    try {
      await Api.get("/categories").then(
        (response) => {
          setCategories([...response.data]);
          console.log("reeeesponse", response);
          console.log("caaaat", categories);
        },
        (error) => {
          console.log("errrrrorr", error);
        }
      );

      // const users =await   axios.get(`https://127.0.0.1:8000/users`)
      //setCategories(cat.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategories();
  }, [categories]);
  const [vendeur,setVendeur] = useState();
  const [userId,setUserId] = useState();
  const [picture, setPicture] = useState([]);
  const [errorlist, setError] = useState([]);
  const notify = () => toast("Loading!");
  function handleInput(e) {
    e.persist();
    setEnchere({ ...enchere, [e.target.id]: e.target.value });
  }
  function handleImage(e) {
    e.persist();
    setPicture({ image: e.target.files[0] });
  }

  async function handleForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", picture.image);
    formData.append("description_ench", enchere.description_ench);
    formData.append("date_debut", enchere.date_debut);
    formData.append("date_fin", enchere.date_fin);
    formData.append("nom_article", enchere.nom_article);
    formData.append("prix_depart", enchere.prix_depart);
    formData.append("description_article", enchere.description_article);
    formData.append("categorie", categories.categorie);
    const userApiUrl = `enchere/${vendeur.id}`;
    const res = await post(userApiUrl, formData);
    console.log("gg",userApiUrl);
    if (res.data.status === 201) {
      Swal("enchere bien crée", res.data.message, "succées");
      setError([]);
    } else if (res.data.status === 422) {
      Swal("erreur");
      setError(res.data.errors);
    }
    console.log(res);
    navigate("/accueil");
    toast.success("Enchère bien crée ");
  }

  async function getUserDetails() {
    try {
      const parsedUser = JSON.parse(userInfo);
      const userApiUrl = `user/mail/${parsedUser.email}`;
      const res = await get(userApiUrl);
      console.log("user",res);
        setVendeur(res.data[0].profil_vendeur);
        console.log("vv",res.data[0].profil_vendeur);
        setUserId(res.data[0]);
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
      <form
        class="form-horizontal"
        method="post"
        action="#"
        onSubmit={(e) => handleForm(e)}
      >
        <div class="wrapper bg-white">
          <div class="h2 text-center">Création Enchère</div>
          <div class="col-md-12 mb-2">
            <div class="row ">
              <div class="col-md-12 mb-1">
                <label class="form-label" for="typeText">
                  Description l'enchère
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="description_ench"
                  rows="4"
                  onChange={(e) => handleInput(e)}
                  required
                  placeholder="Entrer une description de l'enchère "
                ></input>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-6 mb-1">
                <label class="form-label" for="typeText">
                  Date debut enchère{" "}
                </label>
                <input
                  type="datetime-local"
                  id="date_debut"
                  class="form-control"
                  onChange={(e) => handleInput(e)}
                  required
                />
              </div>
              <div class="col-md-6 mb-1">
                <label class="form-label" for="typeText">
                  Date fin enchère{" "}
                </label>
                <input
                  type="datetime-local"
                  id="date_fin"
                  class="form-control"
                  onChange={(e) => handleInput(e)}
                  required
                />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 mb-1">
              <label class="form-label" for="typeText">
                Nom Article{" "}
              </label>
              <input
                type="text"
                id="nom_article"
                class="form-control"
                onChange={(e) => handleInput(e)}
                required
                placeholder="Entrer le nom de l'article"
              />
            </div>
            <div class="col-md-6 mb-1">
              <label class="form-label" for="typeText">
                Prix Depart{" "}
              </label>
              <input
                type="number"
                id="prix_depart"
                class="form-control"
                placeholder="Entrer le prix de l'article en dinars"
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
          </div>
          <div class="row ">
            <div class="col-md-12 mb-1">
              <label class="form-label" for="typeText">
                Description article
              </label>
              <input
                class="form-control"
                id="description_article"
                rows="4"
                onChange={(e) => handleInput(e)}
                required
                placeholder="Entrer une description de l'article "
              ></input>
            </div>
          </div>
          <div class="row ">
            <label class="form-label" for="typeText">
              Catégorie
            </label>
            <div class="form-group mb3">
              <select
                className="form-select"
                required
                id="categorie"
                onChange={(e) => handleInput(e)}
              >
                <option selected disabled>
                  Choisir la catégorie de l'article{" "}
                </option>
                {categories.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.nom}
                  </option>
                ))}
              </select>
            </div>
            <br></br>
            <div class="row ">
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={handleImage}
                required
              />
            </div>
          </div>
          <br></br>
          <div class="row">
            <center>
              {" "}
              <button className="btn btn-dark btn-lg btn-block">
                Enregistrer
              </button>
            </center>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};
export default CreerEnchere;
