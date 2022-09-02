import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Api from "../../../services/Api";
import React, { Component } from "react";

class Appels extends Component {
  constructor() {
    super();
    this.state = { appels: [], loading: true };
  }
  componentDidMount() {
    this.getAppels();
  }
  async getAppels() {
    try {
      const appels = await Api.get(`/appelsOffres`);

      this.setState({ appels: appels.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { loading, appels } = this.state;
    const pathImg = "http://localhost/pfe_backend/public/uploads/";
    return (
      <>
        <Navbar />
        <section class="bg-light">
          <div class="container py-5">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent pl-0 mb-0">
                <li class="breadcrumb-item">
                  <a href="/">
                    {" "}
                    <strong>TunEnchere </strong>
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/appelOffres">
                    <strong>Appel d'offres </strong>
                  </a>
                </li>
              </ol>
            </nav>
            <br></br>
            <div class="col-lg-6 m-auto"></div>
            {loading ? (
              <div class="row text-center py-3"></div>
            ) : (
              <div class={"row"}>
                {this.state.appels.map((appel) => (
                  <div class="col-10 col-md-4 mb-4" key={appels.id}>
                    <ul class="list-unstyled">
                      <li>
                        <div class="card h-100">
                          <center></center>
                          <img
                            src={pathImg + `${appel.image}`}
                            class="card-img-top"
                            alt="..."
                          />

                          <div class="card-header d-flex justify-content-between P-1">
                            <p class="fw-bold mb-0"> </p>
                            <p>
                              <i class="fa fa-phone"></i>
                              {""} {appel.user.telephone}{" "}
                              <i class="fa fa-envelope"> </i>
                              {""} {appel.user.email}{" "}
                            </p>
                          </div>

                          <div class="card-body">
                            <p class="mb-0">
                              <strong> Nom Demandeur: </strong>
                              {appel.user.nom}{" "}
                            </p>
                            <p class="mb-0">
                              <strong> Prénom Demandeur: </strong>
                              {appel.user.prenom}{" "}
                            </p>
                            <p class="mb-0">
                              <strong> Titre: </strong>
                              {appel.titre}{" "}
                            </p>

                            <p class="mb-0">
                              <strong> Descirption: </strong>
                              {appel.description}{" "}
                            </p>
                            <p class="mb-0">                    
                                  <strong>Prix: </strong>
                                  {appel.prix ? `${appel.prix}` : "0"} <sup>DT</sup>
                                  
                                
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="d-flex justify-content-between mb-4">
                        <div class="card w-100">
                          <div class="card-body">
                            <p class="mb-0">
                              <strong>Réponse: </strong>
                              {appel.propositions.map((el) => el.reponse)}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default Appels;
