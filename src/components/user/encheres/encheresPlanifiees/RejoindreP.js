import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { post } from "../../../../services/http";
import Footer from "../../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavbarUser from "../../navbarUser/NavbarUser";
const RejoindreP = () => {
  const userInfo = localStorage.getItem("user-info");
  const [list, setList] = useState({});
  const { enchere } = useParams();
  const { user } = useParams();
  const navigate = useNavigate();
  async function Rejoindre() {
    try {
      const userApiUrl = `/rejoindre/${user}/${enchere}`;
      const res = await post(userApiUrl);
      console.log("part", list);
      setList(res.data.participations);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Rejoindre();
  }, [userInfo]);

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
                   <th className="th">Adresse</th>                
                   <th className="th">Ville</th>   
                   <th className="th">Code Postal</th>   
     
                 </tr>
               </thead>
               {list.map((li) => (
               <tbody  key={li.id}>
               
                   <tr>
                     <td>{li.user.nom}</td>
                     <td>{li.user.prenom}</td>
                     <td>{li.user.email}</td>
                     <td>{li.user.telephone}</td>
                     <td>{li.user.adresse}</td>
                     <td>{li.user.ville}</td>
                     <td>{li.user.code_postal}</td>

                  
              
                    
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
export default RejoindreP;
