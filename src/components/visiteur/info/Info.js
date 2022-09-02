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
              <div class="col-lg-8 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success">
                    <b>Tun</b>Enchere
                  </h1>
                  <h3 class="h2">Marketplace de vente des encheres</h3>
                  <h3 class="h2">Marketplace de création des appels d'offres</h3>
                
                  
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
