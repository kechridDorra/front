      
     import React from 'react';
     import './Footer.css'; 
         
function Footer()
{return (

<>   
      <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo">TunEnchere</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            Tunis
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="#">000-000-0000</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="#">enchere4@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Categories</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none"href='/categorie1'> Arts et Décoration</a></li>
                        <li><a class="text-decoration-none" href='/categorie2'>Mode et Bijoux</a></li>
                        <li><a class="text-decoration-none" href='/categorie3'>Informatique et Téléphones</a></li>
                        <li><a class="text-decoration-none" href='/categorie4'>Véhicules</a></li>
                        <li><a class="text-decoration-none" href='/categorie5'>Horlogerie</a></li>
                        <li><a class="text-decoration-none" href='/categorie6'>Eléctromenager</a></li>
                        <li><a class="text-decoration-none" href='/categorie7'>Ameublement</a></li>
                        <li><a class="text-decoration-none" href='categorie8'>Immeubles et Maisons</a></li>
                        <li><a class="text-decoration-none" href='/categorie9'> Autres</a></li>
                    </ul>
                   
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Info</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="/">Accueil</a></li>
                        <li><a class="text-decoration-none" href="#">Comment ça marche ?</a></li>
                        <li><a class="text-decoration-none" href="/encheres">Les enchères</a></li>
                        <li><a class="text-decoration-none" href="appelOffres">Les appels d'offres</a></li>
                        <li><a class="text-decoration-none" href="#">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2021 Company Name 
                            | Designed by <a rel="sponsored" href="#" target="_blank">Jassa</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </footer>
      </>
      );}
      export default Footer;