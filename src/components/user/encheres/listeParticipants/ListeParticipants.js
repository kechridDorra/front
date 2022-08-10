import "./ListeParticipants.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../../services/http";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavbarUser from "../../navbarUser/NavbarUser";
const ListeParticipants = () => {
  const userInfo = localStorage.getItem("user-info");
  const [list, setList] = useState({});
  const { enchere } = useParams();
  const navigate = useNavigate();
  async function ListeParticipants() {
    try {
      const userApiUrl = `/listeParticipants/${enchere}`;
      const res = await get(userApiUrl);
      console.log("list", res);
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ListeParticipants();
  }, [userInfo]);
  return (
    <>
      <NavbarUser />
      <section class="bg-light">
        <div class="container py-5" enctype="multipart/form-data">
          <div class="col-lg-6 m-auto"></div>
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
                      <th className="th">Derniére prix d'augmentation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((li) => (
                      <tr key={li.user.id}>
                        <td>{li.user.nom}</td>
                        <td>{li.user.prenom}</td>
                        <td>{li.user.telephone}</td>
                        <td>{li.user.email}</td>
                      </tr>
                    ))}{" "}
                  </tbody>
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
export default ListeParticipants;
