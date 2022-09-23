import { useEffect, useState } from "react";
import { get } from "../../../services/http";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import React from "react";
import NavbarUser from "../../user/navbarUser/NavbarUser";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
const ProfilVendeur = () => {
 
  const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'))
    function logOut() {
        localStorage.clear();
        navigate('/login');
 
    }
    const [vendeur,setVendeur] = useState();
    const [userId,setUserId] = useState();
    const userInfo = localStorage.getItem("user-info");

    async function getUserDetails() {
      try {
        const parsedUser = JSON.parse(userInfo);
        const userApiUrl = `user/mail/${parsedUser.email}`;
        const res = await get(userApiUrl);
        console.log("user",res);
        setVendeur(res.data[0].profil_vendeur);
       // console.log("vv",res.data[0].profil_vendeur);
        setUserId(res.data[0]);
        console.log("hhggh",vendeur)
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
            <form class="form-horizontal" method="post" action="#">
              <div class="col-lg-6">
                <br />
                <div class="h2 text-center">Profil Vendeur</div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Activité
                  </label>
                  <input
                    type="text"
                    required
                    id="activite"
                    class="form-control "
                    placeholder= {vendeur.activite}
                  />
                </div>

                <div class="col-md-8 mb-4">
                  <label class="form-label" for="typeText">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="nomEntreprise"
                    class="form-control "
                    placeholder={vendeur.nom_entreprise}
                  />
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
