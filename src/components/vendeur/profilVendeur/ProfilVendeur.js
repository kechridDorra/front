import { useEffect, useState } from 'react';
import { get } from "../../../services/http";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import React from "react";
import NavbarUser from '../../user/navbarUser/NavbarUser';
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";
const ProfilVendeur = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate = useNavigate();
  const { user } = useParams();
  const [profil, setProfil] = useState({})
  async function getVendeur(e)
  {
    e.preventDefault();
    console.log("form", profil)
    const userApiUrl = `/profilVendeur/${user}`;
    const res = await get(userApiUrl);
    setProfil(res.data[0].profil_vendeur);

        navigate('/accueil')
     
  }
  useEffect(() => {
    getVendeur();
  }, [profil]);
  async function getUserDetails() {
    try {
      const parsedUser = JSON.parse(userInfo);
      const userApiUrl = `user/mail/${parsedUser.email}`;
      const res = await get(userApiUrl);
    
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <NavbarUser />
     
        
      <div className="form-container">
        <center>
          <div class="container">
          <form class="form-horizontal" method="post" action="#" >
              <div class="col-lg-6">
                <br />
                <div class="h2 text-center">Profil Vendeur</div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Activité
                  </label>
                  <input type="text"
                    required
                    id="activite"
                    class="form-control "
                    
                    placeholder={profil.id}
             
                  />
                </div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Entreprise
                  </label>
                  <input type="text"
                  
                    id="nomEntreprise"
                    class="form-control "
                    placeholder=""
                 
                  />
                </div>
                <div class="row">
                  <center>
                    <div class="col-12 col-md-4 mb-3">
                      <button className="btn btn-warning ">
                       Modifier
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
export default ProfilVendeur;
