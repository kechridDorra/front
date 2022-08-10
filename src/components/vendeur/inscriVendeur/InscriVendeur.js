import { useEffect, useState } from 'react';
import { get } from "../../../services/http";
import { post } from "../../../services/http";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InscriVendeur.css"
import React from "react";
import NavbarUser from '../../user/navbarUser/NavbarUser';
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";
const InscriVendeur = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate=useNavigate();
  const [state1, setstate1] = useState({
    activite: "",
    nomEntreprise: ""})
    async function handleForm(e)
    {
      e.preventDefault();
      console.log("form", state1)
      const userApiUrl = `/profilVendeur`;
      const res = await post(userApiUrl,state1);
          console.log(res);
          navigate('/accueil')
       
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
      console.log("user",res);
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
          <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>
              <div class="col-lg-6">
                <br />
                <div class="h2 text-center">Inscription Vendeur</div>
                <div class="h4 text-muted text-center pt-2">
                  Entrez vos coordonnées
                </div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Activité
                  </label>
                  <input type="text"
                    required
                    id="activite"
                    class="form-control "
                    placeholder="Entrez votre activité"
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Entreprise
                  </label>
                  <input type="text"
                  
                    id="nomEntreprise"
                    class="form-control "
                    placeholder="Entrez votre entreprise"
                    onChange={(e) => handleInput(e)}
                  />
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
export default InscriVendeur;
