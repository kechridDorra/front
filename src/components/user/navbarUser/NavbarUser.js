import React, { useEffect, useState } from 'react';
import './NavbarUser.css';
import { Link } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from 'axios'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { get } from "../../../services/http";
import EncheresPlanifiees from '../encheres/encheresPlanifiees/EncheresPlanifiees';
function NavbarUser(props)
{
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'))
    function logOut() {
        localStorage.clear();
        navigate('/login');
 
    }
    const [vendeur,setVendeur] = useState();
    const [userId,setUserId] = useState();
    const userInfo = localStorage.getItem("user-info");

    async function getUserDetails() {
      try {
        const parsedUser = JSON.parse(userInfo);
        const userApiUrl = `user/mail/${parsedUser.email}`;
        const res = await get(userApiUrl);
        console.log("user",res);
        setVendeur(res.data[0].profil_vendeur);
       // console.log("vv",res.data[0].profil_vendeur);
        setUserId(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    function creerEnchere(profil_vendeur) {
      navigate(`/creerEnchere/${profil_vendeur}`, {
        state: {
          id: vendeur.id,
        },
      });
    }
    useEffect(() => {
      getUserDetails();
    }, [userInfo]);
    function ajoutAppelOffre(user) {
      navigate(`/ajoutAppelOffre/${user}`, {
        state: {
          id: user,
        },
      });
    }
    function encheresEnCours(user) {
      navigate(`/encheresEncours/${user}`, {
        state: {
          id: user,
        },
      });
    }
    function encheresTerminees(user) {
      navigate(`/encheresTerminees/${user}`, {
        state: {
          id: user,
        },
      });
    }
    function encheresPlanifiees(user) {
      navigate(`/encheresPlanifiees/${user}`, {
        state: {
          id: user,
        },
      });
    }
    function creerEnchere(profil_vendeur) {
        navigate(`/creerEnchere/${profil_vendeur}`, {
          state: {
            id: profil_vendeur,
          },
        });
      }
      function reponseVendeur(profil_vendeur) {
        navigate(`/reponseVendeur/${profil_vendeur}`, {
          state: {
            id: profil_vendeur,
          },
        });
      }
      function getProfil(user) {
        navigate(`/profilVendeur/${user}`, {
          state: {
            id: user,
          },
        });
      }
    return( 
        <>
      
         <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div class="container text-light">
              <div class="w-100 d-flex justify-content-between">
                  <div>
                      <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="#">enchere4@gmail.com</a>
                  
                      <i class="fa fa-phone mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">010-000-0000</a> 
                  </div>
                  <div>
                      <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                  </div>
              </div>
          </div>
        </nav>
       
        <nav class="navbar navbar-expand-lg navbar-light shadow">
          <div class="container d-flex justify-content-between align-items-center">

              <a class="navbar-brand text-success logo h1 align-self-center" href="/">
                  TunEnchère
              </a>

              <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                  <div class="flex-fill">
                      <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                         <li class="nav-item">
                          <a class="nav-link" href="/accueil">Accueil</a>
                          </li>
                          <li class="nav-item">
                          <NavDropdown title="Enchères" >
                                    <NavDropdown.Item onClick={() => {
                      encheresEnCours(userId.id);
                    }}> Enchère en cours </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => {
                      encheresPlanifiees(userId.id);
                    }}>Enchère planifiées</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => {
                      encheresTerminees(userId.id);
                    }}>Enchère terminées</NavDropdown.Item>  
                                    
                                </NavDropdown>
                           </li>
                           <li class="nav-item">
                              
                              <NavDropdown title="Espace Vendeur" >
                            <NavDropdown.Item  onClick={() => {
                      getProfil(vendeur.id);
                    }}>Profil Vendeur</NavDropdown.Item>
                                    <NavDropdown.Item href='/InscriVendeur'>Inscription vendeur</NavDropdown.Item>
                                    <NavDropdown.Item  onClick={() => {
                      creerEnchere(vendeur.id);
                    }}>Creation Enchére</NavDropdown.Item>
                                    <NavDropdown.Item href='/mesEncheres'>Mes Enchères</NavDropdown.Item>  
                                    <NavDropdown.Item   onClick={() => {
                      reponseVendeur(vendeur.id);
                    }}>Répondre aux appels Offres</NavDropdown.Item>  
                                    
                                </NavDropdown>
                          </li>
                          <li class="nav-item">
                          <NavDropdown title="Appel Offre" >
                                  
                                 
                                    <NavDropdown.Item onClick={() => {
                      ajoutAppelOffre(userId.id);
                    }}>Ajout Appel offre</NavDropdown.Item>
                                    <NavDropdown.Item href='/mesAppelOffres'>Mes Appels d'offre</NavDropdown.Item>
                                    
                                    
                                </NavDropdown>
                        
                            
                          </li>
                          <li class="nav-item">
                        
                              {localStorage.getItem('user-info')?
                                 <NavDropdown title={user.email}>
    <NavDropdown.Item href="/profil">Profil</NavDropdown.Item>
    <NavDropdown.Item onClick={logOut}>Déconnexion</NavDropdown.Item>

                                </NavDropdown>

                              : null}
                              
                          </li>
                    

                      </ul>
                  </div>
                  <div class="navbar align-self-center d-flex">
                      <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                          <div class="input-group">
                              <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                              <div class="input-group-text">
                                  <i class="fa fa-fw fa-search"></i>
                              </div>
                          </div>
                      </div>
                     {/* <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                          <i class="fa fa-fw fa-search text-dark mr-2"></i>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="/login">
                          <i class="fa fa-fw fa-user text-dark mr-3"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
    </a> */}
                  </div>
              </div>

          </div>
        </nav>
       </>
    )
}
export default NavbarUser;