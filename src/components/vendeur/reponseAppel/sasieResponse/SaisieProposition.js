import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import NavbarUser from "../../../user/navbarUser/NavbarUser";
import Footer from "../../../Footer";
import { useParams } from "react-router-dom";
import { get } from "../../../../services/http";
import { post } from "../../../../services/http";
import { toast } from "react-toastify";
const SaisieProposition = () => {
  const userInfo = localStorage.getItem("user-info");
  const navigate = useNavigate();
  const { appelOffre } = useParams();
  const { profilVendeur } = useParams();
  const [appel, setAppel] = useState({});
  const pathImg = "http://localhost/pfe_backend/public/uploads/";
  const [proposition, setProposition] = useState({
    reponse: "",
    prix: "",
  });
  async function getAppelOffre() {
    try {
      const userApiUrl = `/appelOffre/${appelOffre}`;
      const res = await get(userApiUrl);
      console.log("list", res);
      setAppel(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
 
  async function handleForm(e) {
    e.preventDefault();
    console.log("form", proposition);
    const userApiUrl = `/proposition/${profilVendeur}/${appelOffre}`;
    const res = await post(userApiUrl, proposition);
    console.log("ggg", res);
    navigate(`/reponseVendeur/${profilVendeur}`);
    toast.success("proposition bien saisie ");
  }
  function handleInput(e) {
    const newdata1 = { ...proposition };
    newdata1[e.target.id] = e.target.value;
    setProposition(newdata1);
    console.log(newdata1);
  }

  useEffect(() => {
    handleForm();
  }, [userInfo]);


  return (
    <>
      <NavbarUser />
      <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
          <div class="row">
            <div class="col-md-6 position-relative mb-3 mb-md-0">
              <a
               
                data-effect="mfp-zoom-in"
                title=""
              >
               
              </a>
            </div>

            
              <div class="d-flex justify-content-between">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-transparent pl-0 mb-0">
                    <li class="breadcrumb-item">
                      <a href="/">
                        {" "}
                        <strong>TunEnchere </strong>
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/">
                        {" "}
                        <strong> Les Appels Offres</strong>
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/">
                        <strong> Répondre à une appel d'offre</strong>
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

             <h1> Repondre a l'appel d'offre</h1>
              <form class="form-horizontal" method="post" action="#"   onSubmit={(e) => handleForm(e)}>
                <div class="col-md-6 mb-1">
                  <label class="form-label" for="typeText">
                    <strong> Réponse :</strong> 
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="reponse"
                   
                    onChange={(e) => handleInput(e)}
                    required
                    placeholder="Rédiger une réponse pour cette appel d'offre "
                  ></input>
                </div>
                <div class="col-md-6 mb-1">
                  <label class="form-label" for="typeText">
                    <strong>Prix proposé :</strong>
                  </label>
                  <input
                    type="number"
                    id="prix"
                    required
                    class="form-control"
                    placeholder="en dinars"
                    onChange={(e) => handleInput(e)}
                  />
                </div><br></br>
            
                <button className="btn btn-dark btn-lg btn-block">
                Enregistrer
              </button>
            <center>
              {" "}
            
            </center>
       
              </form>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default SaisieProposition;
