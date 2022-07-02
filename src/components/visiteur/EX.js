import React from 'react';
import './EX.css';  
function EX()
{ 
    return (
    <>     
    
     <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel" >
        <ol class="carousel-indicators">
            <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <section class="container py-5">
            
        <div class="carousel-inner">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories de la semaine</h1>             
            </div>
        </div>
            <div class="carousel-item active">
                <div class="container">
                    <div class="row p-5">
                        <div class="row">
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/deco.jpg"></img></a>
                            <h5 class="text-center mt-3 mb-3">Arts et decoration</h5>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/electro.jpg">
                            </img></a>
                            <h2 class="h5 text-center mt-3 mb-3">Électroménager </h2>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/accessoire.jpg">
                            </img></a>
                            <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row p-5">
                        <div class="row">
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/informatique.png"></img></a>
                            <h5 class="text-center mt-3 mb-3">Informatique et télèphone</h5>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/electro.jpg">
                            </img></a>
                            <h2 class="h5 text-center mt-3 mb-3">Véhicules </h2>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/accessoire.jpg">
                            </img></a>
                            <h2 class="h5 text-center mt-3 mb-3">Horlogerie</h2>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row p-5">
                    <div class="row">
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/deco.jpg"></img></a>
                            <h5 class="text-center mt-3 mb-3">Ameublement</h5>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/electro.jpg">
                            </img></a>
                            <h2 class="h5 text-center mt-3 mb-3">Immeubles t Maisons </h2>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                            <div class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img className="rounded-circle img-fluid border" 
                            src="/accueil/accessoire.jpg">
                            </img></a>
                            <h2 class="h5 text-center mt-3 mb-3">Autres</h2>
                            <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </a>
        <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </a>
        </section>
      </div>
      
     
    
</>
);}
export default EX;