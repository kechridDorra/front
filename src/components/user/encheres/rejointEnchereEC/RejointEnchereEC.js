
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
const RejointEnchere= () => {
    const userInfo = localStorage.getItem("user-info");
    const enchere = useParams();
    const navigate=useNavigate();
    const [state1, setstate1] = useState({
    })
      async function handleForm(e)
      {
        e.preventDefault();
        console.log("form", state1)
        const rejointUrl = `/rejoindreEnchere/${enchere}`;
        const res = await post(rejointUrl,enchere);
            console.log("hhh",res);
        
         
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
       
        <Footer />
      </>
    );
  };

export default RejointEnchere;
