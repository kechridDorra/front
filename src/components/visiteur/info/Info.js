import React from "react";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Info() {
  return (
    <>
      <Navbar />

      <div className="form-container">
        <center>
          <div class="container">
            <div class="col-lg-10">
              <br />
              <div class="col-lg-10 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success">
                    <b>Tun</b>Enchere
                  </h1>
                  <h3 class="h2">Marketplace de vente des encheres</h3>
                  <h3 class="h2">Marketplace de création des appels d'offres</h3>
                <div> Chaque utilisateur peut creer une compte pour devenir un acheteur.<br></br>
                 <strong> L'acheteur </strong>peut creer des  appels d'offres (encheres inversées).<br></br>
                 <strong> L'acheteur </strong> peut consulter les enchéres,les listes des participants de cette enchère.<br></br>
                 <strong> L'acheteur </strong> peut rejoindre des enchères et il peut augmenter gratuitement le prix d'un article dans l'enchères plusieurs fois.
                </div><br></br>
                <div> Chaque utilisateur peut devenir un vendeur par la création du profil vendeur.<br></br>
                  Suite a la création du profil vendeur, <strong>le vendeur </strong>peut creer des enchères.<br></br>
                 <strong> L'acheteur </strong> peut consulter les enchéres,les listes des participants de cette enchère.<br></br>
                  <strong>Le vendeur</strong> peut consulter la liste des appels d'offres et répondre par une ou plusieurs propositions. <br></br>
                </div>
                  
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>

      <Footer />
    </>
  );
}
export default Info;
