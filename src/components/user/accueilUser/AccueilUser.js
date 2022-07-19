import React from "react";
import BodyUser from "../bodyUser/BodyUser";
import NavbarUser from "../navbarUser/NavbarUser";
import Footer from "../../Footer";
import { useEffect } from "react";
import Api from "../../../services/Api";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { get } from "../../../services/http";

function AccueilUser() {
 /* const userInfo = localStorage.getItem("user-info");

  async function getUserDetails() {
    try {
      const parsedUser = JSON.parse(userInfo);
      const userApiUrl = `user/mail/${parsedUser.email}`;
      console.log(parsedUser);
      const res = await get(userApiUrl);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [userInfo]);*/

  return (
    <>
      <NavbarUser />
      <BodyUser />
      <Footer />
    </>
  );
}
export default AccueilUser;
