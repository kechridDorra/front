import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../../services/http";
import { post } from "../../../../services/http";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavbarUser from "../../navbarUser/NavbarUser";
const Participation = () => {
  const userInfo = localStorage.getItem("user-info");
  const [part, setPart] = useState({});
  const { enchere } = useParams();
  const { profilVendeur } = useParams();
  const { user } = useParams();
  const navigate = useNavigate();
  const [augmentation, setaugmentation] = useState({
    augmentation: "",
  });
  const[participation ,setParticipation]=useState({}) ;
  async function handleForm(e) {
    e.preventDefault();
    console.log("form", augmentation);
    const userApiUrl = `augmenter/${participation}`;
    const res = await post(userApiUrl, augmentation);
    console.log("ggg", userApiUrl);
    navigate(`/encheresEncours/${user}`);
  }
  function handleInput(e) {
    const newdata1 = { ...augmentation };
    newdata1[e.target.id] = e.target.value;
    setaugmentation(newdata1);
    console.log(newdata1);
  }
  async function GetParticipation() {
    try {
      const userApiUrl = `/getparticipation/${user}/${enchere}`;
      const res = await get(userApiUrl);
      console.log("hhh", part);
      setPart(res.data[0]);
      setParticipation(res.data[0].id);
      console.log("pppp", participation);
  
    } catch (error) {
      console.log(error);
    }
  }  useEffect(() => {
    GetParticipation();
  }, [participation]);

  /* function AugmenterEnchere(participationId) {
    navigate(`/augmenterEnchere/${participationId}`, {
      state: {
        id: participationId,
      },
    });
  }*/

  return (
    <>
      <NavbarUser />
      <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
           <div class="col-lg-6 m-auto">
      
            <form class="form-horizontal" method="post" action="#" onSubmit={(e) => handleForm(e)}>
            <div class="col-md-8 mb-4">
              <label class="form-label" for="typeText">
                Entrer un Prix d'augmentation en Dinars
              
              </label>
              <input
                type="number"
                id="augmentation"
                class="form-control "
                onChange={(e) => handleInput(e)}
                placeholder="Entrer votre prix  "
              />
            </div>
            <button className="btn btn-dark btn-lg btn-block">Confirmer</button>
            </form>
          </div> 
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Participation;
