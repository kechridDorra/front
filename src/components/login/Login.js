import './Login.css';
import React, { useState } from "react";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AuthUser from '../../services/AuthUser';
export default function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    }
    return (
  
<div class="wrapper bg-white">
    <div class="h2 text-center">Connexion</div>
    <div class="h4 text-muted text-center pt-2">Entrez vos informations de connexion</div>
    <form class="pt-3">
        <div class="form-group py-2">
            <div class="input-field"> <span class="far fa-user p-2"></span>
             <input type="email" placeholder="Adresse mail" 
              onChange={e=>setEmail(e.target.value)}
               required class=""/></div>
        </div>
        <div class="form-group py-1 pb-2">
            <div class="input-field"> <span class="fas fa-lock p-2"></span>
             <input type="password" placeholder="Mot de passe"
             onChange={e => setPassword(e.target.value)}
              required class=""/> 
             <button class="btn bg-white text-muted" onClick={submitForm}> <span class="far fa-eye-slash"></span> </button> </div>
        </div>
        <div class="d-flex align-items-start">
            <div class="ml-auto"> <a href="#" id="forgot">Mot de passe oublié</a> </div>
        </div> <center><button class="btn btn-block text-center my-3">Connexion</button></center>
        <div class="text-center pt-3 text-muted"> <a href="#">Créer Compte</a></div>
        </form>

   </div> 
     );}
