import "./Login.css";
import axios from "axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import jwtDecode from "jwt-decode";
import Navbar from "../Navbar";
import Footer from "../Footer";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const Login = () => {
  const [state1, setstate1] = useState({
    username: null,
    password: null,
    login: false,
    store: null,
  });

  

  const navigate = useNavigate();


  function handleForm(e) {
    e.preventDefault();
    console.log("form", state1);
    Api.post(`/api/login_check`, state1)
      .then((res) => {
        const tkn = res.data.token;
        const email = state1.username;
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            login: true,
            token: tkn,
            email,
          })
        );
        navigate("/accueil");
      })
      .catch(console.log("ERREUR"));
  }
  
  function handleInput(e) {
    const newdata1 = { ...state1 };
    newdata1[e.target.id] = e.target.value;
    setstate1(newdata1);
  }

 
  return (
    <>
      <Navbar />

      <div class="wrapper bg-white">
        <div class="h2 text-center">Connexion</div>
        <div class="h4 text-muted text-center pt-2">
          Entrez vos informations de connexion
        </div>
        <form
          class="pt-3"
          method="post"
          action="#"
          onSubmit={(e) => handleForm(e)}
        >
          <div class="form-group py-2">
            <div class="input-field">
              {" "}
              <span class="far fa-user p-2"></span>
              <input
                type="email"
                placeholder="Adresse mail"
                id="username"
                onChange={(e) => handleInput(e)}
                required
                class=""
              />
            </div>
          </div>
          <div class="form-group py-1 pb-2">
            <div class="input-field">
              {" "}
              <span class="fas fa-lock p-2"></span>
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => handleInput(e)}
                autocomplete="current-password"
                required=""
                id="password"
                class=""
              />
              <button class="btn bg-white text-muted">
                {" "}
                <span class="far fa-eye-slash"></span>
              </button>{" "}
            </div>
          </div>
          <div class="d-flex align-items-start">
            <div class="ml-auto">
              {" "}
              <a href="#" id="forgot">
                Mot de passe oublié
              </a>{" "}
            </div>
          </div>{" "}
          <center>
            <button class="btn btn-block text-center my-3">Connexion</button>
          </center>
          <div class="text-center pt-3 text-muted">
            {" "}
            <a href="/inscription">Créer Compte</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Login;
