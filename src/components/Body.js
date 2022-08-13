import "./Body.css";
import Api from "../services/Api";
import React, { Component } from "react";
class Body extends Component {
  constructor() {
    super();
    this.state = { encheresT: [], loading: true };
  }
  componentDidMount() {
    this.getEncheresT();
  }
  async getEncheresT() {
    try {
      const encheresT = await Api.get(`/encheresT`);
      // const users =await   axios.get(`https://127.0.0.1:8000/users`)
      this.setState({ encheresT: encheresT.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { loading, encheresT } = this.state;
    const pathImg = "http://localhost/pfe_backend/public/uploads/";
    {
      return (
        <>
          <div
            class="modal fade bg-white"
            id="templatemo_search"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="w-100 pt-1 mb-5 text-right">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form
                action=""
                method="get"
                class="modal-content modal-body border-0 p-0"
              >
                <div class="input-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    id="inputModalSearch"
                    name="q"
                    placeholder="Search ..."
                  />
                  <button
                    type="submit"
                    class="input-group-text bg-success text-light"
                  >
                    <i class="fa fa-fw fa-search text-white"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            id="template-mo-jassa-hero-carousel"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#template-mo-jassa-hero-carousel"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li
                data-bs-target="#template-mo-jassa-hero-carousel"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#template-mo-jassa-hero-carousel"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                      <img class="img-fluid" src="/accueil/111.png" alt="" />
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                      <div class="text-align-left align-self-center">
                        <h1 class="h1 text-success">
                          <b>Tun</b>Enchere
                        </h1>
                        <h3 class="h2">Marketplace des encheres</h3>
                        <p>Le site n°1 des ventes aux enchères en Tunis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                      <img class="img-fluid" src="/accueil/222.png" alt="" />
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                      <div class="text-align-left">
                        <h1 class="h1">Lorem Ipsum</h1>
                        <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                      <img class="img-fluid" src="/accueil/333.png" alt="" />
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                      <div class="text-align-left">
                        <h1 class="h1">Lorem Ipsum</h1>
                        <h3 class="h2">Lorem Ipsum Lorem Ipsum </h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev text-decoration-none w-auto ps-3"
              href="#template-mo-jassa-hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <i class="fas fa-chevron-left"></i>
            </a>
            <a
              class="carousel-control-next text-decoration-none w-auto pe-3"
              href="#template-mo-jassa-hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>

          <section class="container py-5">
            <div class="row text-center pt-3">
              <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories de la semaine</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/accueil/deco.jpg"
                  ></img>
                </a>
                <h5 class="text-center mt-3 mb-3">Arts et decoration</h5>
                <p class="text-center">
                  <a class="btn btn-success">Go Shop</a>
                </p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/accueil/electro.jpg"
                  ></img>
                </a>
                <h2 class="h5 text-center mt-3 mb-3">Électroménager </h2>
                <p class="text-center">
                  <a class="btn btn-success">Go Shop</a>
                </p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img
                    className="rounded-circle img-fluid border"
                    src="/accueil/accessoire.jpg"
                  ></img>
                </a>
                <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
                <p class="text-center">
                  <a class="btn btn-success">Go Shop</a>
                </p>
              </div>
            </div>
          </section>
          <section class="bg-light">
            <div class="container py-5">
              <div class="col-lg-8 m-auto" href="/encheresTerminees">
                <h1 class="h1">Les dernieres enchéres terminées</h1>
              </div>
              <br></br>
              {loading ? (
                <div class="row text-center py-3"></div>
              ) : (
                <div class={"row"}>
                  {this.state.encheresT.map((enchere) => (
                    <div class="col-12 col-md-4 mb-4" key={encheresT.id}>
                      <div class="card h-100">
                        <a href="#">
                          <img
                            src={pathImg + `${enchere.image}`}
                            class="card-img-top"
                            alt="..."
                          />
                        </a>
                        <div class="card-body">
                          <ul class="list-unstyled d-flex justify-content-between">
                            <li className="prix_depart">
                              <strong>
                                {" "}
                                <del>
                                  <dl>
                                    {" "}
                                    {enchere.prix_depart} <sup> DT </sup>
                                  </dl>
                                </del>
                              </strong>{" "}
                            </li>
                            <li className="prix_vente">
                              <strong>
                                {" "}
                                <dl>
                                  {" "}
                                  {enchere.prix_vente} <sup> DT </sup>
                                </dl>
                              </strong>{" "}
                            </li>
                          </ul>
                          <p class="h3 text-decoration-none text-dark">
                            <strong>{enchere.nom_article}</strong>
                          </p>
                          <p class="card-text-description">
                            {enchere.description_ench} :
                          </p>
                          {enchere.description_article}
                          <p class="card-text-date-debut">
                            a commence le&nbsp;
                            <strong>
                              {" "}
                              {enchere.date_debut.substring(0, 10)}
                            </strong>
                            &nbsp;à&nbsp;
                            <strong>
                              {enchere.date_debut.substring(11, 19)}
                            </strong>
                          </p>
                          <p class="card-text-date-fin">
                            Termine le &nbsp;
                            <strong>{enchere.date_fin.substring(0, 10)}</strong>
                            &nbsp;à&nbsp;
                            <strong>
                              {enchere.date_fin.substring(11, 19)}{" "}
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}{" "}
              <div>
              <a href="/encheresT">
                     <strong> Afficher plus</strong>
                  </a>
              </div>
            </div>
          </section>
        </>
      );
    }
  }
}
export default Body;
