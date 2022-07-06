import axios from "axios";

const API_URL = `https://127.0.0.1:8000`;

const signup = (
  nom,
  prenom,
  email,
  password,
  telephone,
  adresse,
  ville,
  codePostal,
  numeroCarte,
  codeSecurite,
  moisExp,
  anneeExp) => {
  return axios
    .post(API_URL + "/inscription", {
      nom,
      prenom,
      email,
      password,
      telephone,
      adresse,
      ville,
      codePostal,
      numeroCarte,
      codeSecurite,
      moisExp,
      anneeExp
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/api/login_check", {
     username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;