import "./ModifierProfil.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import NavbarUser from "../../navbarUser/NavbarUser";
import Footer from "../../../Footer";
import { get } from "../../../../services/http";
import { patch } from "../../../../services/http";
const ModifierProfil = () => {
  const id = useParams();
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("user-info");
  const [profil, setProfil] = useState({});
  const [state1, setstate1] = useState({
    nom: "",
    prenom: "",
    email:"",
    password:"",
    telephone:"",
    adresse:"",
    ville:"",
    code_postal:"",
    numero_carte:"",
    code_securite:"",
    mois_exp:"",
    annee_exp:""
  
  })
    async function handleForm(e)
    {
      e.preventDefault();
      console.log("form", state1)
      const userApiUrl = `user/${id}`;
      const res = await patch(userApiUrl,state1);
      
          console.log(res);
          navigate('/profil')   
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
        console.log(parsedUser);
        const res = await get(userApiUrl);
        console.log("profil",res);
        setProfil(res.data[0])
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getUserDetails();
    }, [userInfo]);
  function UpdateUser() {
    navigate(`/profil`);
  }
  return (
    <>
      <NavbarUser />
      <div className="form-container">
        <center>
        <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>
          <div className="container ">
            <div className="col-lg-6">
              <br />
              <div className="h2 text-center">Profil</div>

              <div className="h4 text-muted text-center pt-2">
                Modifier vos coordonées
              </div>
              <div className="row g-3">
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control "
                    placeholder= {profil.nom}
                    onChange={(e) => handleInput(e)}
                  
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Prenom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    className="form-control"
                    placeholder={profil.prenom}
                    onChange={(e) => handleInput(e)}
                   
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control  "
                    placeholder={profil.email}
                    onChange={(e) => handleInput(e)}
                    
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Mot de passe{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control  "
                    onChange={(e) => handleInput(e)}
                   
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Télephone
                  </label>
                  <input
                    type="text"
                    id="telephone"
                    className="form-control  "
                    placeholder={profil.telephone}
                    onChange={(e) => handleInput(e)}
                  
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    className="form-control"
                    placeholder={profil.adresse}
                    onChange={(e) => handleInput(e)}
                   
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="ville"
                    className="form-control "
                    placeholder={profil.ville}
                    onChange={(e) => handleInput(e)}
                  
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label" for="typeText">
                    Code Postal
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    className="form-control  "
                    placeholder={profil.code_postal}
                    onChange={(e) => handleInput(e)}
                    
                  />
                </div>
              </div>

              <div className="row g-3 ">
                <div className="col-md-4 mb-4">
                  <label className="form-label" for="typeText">
                    N° Carte Bancaire
                  </label>
                  <input
                    type="text"
                    id="NumCarte"
                    className="form-control "
                    placeholder={profil.numero_carte}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label" for="typeText">
                    Id internet
                  </label>
                  <input
                    type="text"
                    id="codeSecurite"
                    className="form-control "
                    placeholder={profil.code_securite}
                    onChange={(e) => handleInput(e)}
                   />
                </div>
                <div className="col-md-6 mb-4">
                  <div className="row ">
                    <label className="form-label" for="typeText">
                      Expire{" "}
                    </label>
                    <div className="col-12 col-md-6 mb-4">
                      <div class="input-group mb-3">
                        <select
                          class="form-select"
                          value={profil.mois_exp}
                          onChange={(e) => handleInput(e)}
                          required
                          id="moisExp"
                        >
                          <option selected disabled></option>
                          <option value="1">1 - Janvier</option>
                          <option value="2">2 - Février</option>
                          <option value="3">3 - Mars</option>
                          <option value="4">4 - Avril</option>
                          <option value="5">5 - Mai</option>
                          <option value="6">6 - Juin</option>
                          <option value="7">7 - Juillet</option>
                          <option value="8">8 - Aout</option>
                          <option value="9">9 - Septembre</option>
                          <option value="10">10 - Octobre</option>
                          <option value="11">11 - Novembre</option>
                          <option value="12">12 - Décembre</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <div class="input-group mb-3">
                        <select
                          class="form-select"
                          id="anneeExp"
                          required
                          value={profil.annee_exp}
                          onChange={(e) => handleInput(e)}
                        >
                          <option selected disabled></option>
                          <option value="1">2022</option>
                          <option value="2">2023</option>
                          <option value="3">2024</option>
                          <option value="1">2025</option>
                          <option value="2">2026</option>
                          <option value="3">2027</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <center>
                  <div className="col-12 col-md-4 mb-3">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg btn-block"
                      
                        onClick={UpdateUser} 
                    
                    >
                      Enregistrer
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div></form>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default ModifierProfil;
