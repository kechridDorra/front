import "./ParticipantsEnCours.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../../../services/http";
import { post } from "../../../../../services/http";
import Footer from "../../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavbarUser from "../../../navbarUser/NavbarUser";
const ParticipantsEnCours= () => {
  const userInfo = localStorage.getItem("user-info");
  const [list, setList] = useState({});
  const { enchere } = useParams();
  const navigate = useNavigate();
  async function ParticipantsEnCours() {
    try {
      const userApiUrl = `/listeParticipants/${enchere}`;
      const res = await get(userApiUrl);
      console.log("participants", res);
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ParticipantsEnCours();
  }, [userInfo]);

  function AugmenterEnchere(participationId) {
    navigate(`/augmenterEnchere/${participationId}`, {
      state: {
        id: participationId,
      },
    });
  }
  
  return (
    <>
      <NavbarUser />
      <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
       
          <div class="col-lg-6 m-auto">
        
          </div> 
        
          {list && list.length > 0 ? (
            <div class={"row"}>
              
              <center>
                <h2 className="title">La liste des participants </h2> 
                
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th className="th">Nom </th>
                      <th className="th">Prenom</th>
                      <th className="th">Telephne</th>
                      <th className="th">Email</th>
                      <th className="th">Derniére Augmentation</th>
                  
                     
        
                    </tr>
                  </thead>
                  {list.map((li) => (
                  <tbody  key={li.user.id}>
                    
                      <tr>
                        <td>{li.user.nom}</td>
                        <td>{li.user.prenom}</td>
                        <td>{li.user.telephone}</td>
                        <td>{li.user.email}</td>
                        <td>{li.augmentation}</td>
                        <td> <tr><button className="btn btn-dark btn-lg btn-block" 
                             onClick={() => {
                              AugmenterEnchere(li.id);
                            }}>
                        Augmenter Prix Enchere
                      </button><br></br></tr></td>
                      <td></td></tr>
                   
                 
                   
                  </tbody>
                     ))}{" "}
                </table>
              
              </center>
            </div>
          ) : (
            <></>
          )}
     
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ParticipantsEnCours;
