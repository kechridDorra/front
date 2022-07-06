import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Api from '../../../services/Api';
import React, {Component} from 'react';
class AppelOffres extends Component {
  constructor() {
      super();
      this.state = {appelOffres: [], loading: true};
  }
  componentDidMount() {
      this.getAppelsOffres();
  }
  async  getAppelsOffres() {
      try {    
      const  appelOffres =await Api.get(`/appelOffres`)
  
      this.setState({ appelOffres: appelOffres.data, loading: false})
      
      } catch (error) {
         console.log(error)
      }
 
        }
      render  () {
        const {loading,appelOffres}= this.state  
        const pathImg = "http://localhost/pfe_backend/public/uploads/"
    return(<>
        <Navbar/>
        <section class="bg-light">
    <div class="container py-5" >
    <nav aria-label="breadcrumb">
               <ol class="breadcrumb bg-transparent pl-0 mb-0">
                 <li class="breadcrumb-item"><a href="/"> <strong>TunEnchere </strong></a></li>
                 <li class="breadcrumb-item"><a href="/appelOffres"><strong>Appel d'offres </strong></a></li>
              </ol>
             </nav> 
             <br></br>    
    <div class="col-lg-6 m-auto">
                 
             </div>
    {loading ? (
        <div class="row text-center py-3">
           
        </div>
         ) : (

<div class={'row'}>
{ this.state.appelOffres.map(appelOffre =>
            <div class="row" key={appelOffres.id}>
     <ul class="list-unstyled">
          <li >
    <div class="card">
      <div class="card-header d-flex justify-content-between P-1">
       <p class="fw-bold mb-0">{appelOffre.user.nom} {appelOffre.user.prenom}</p>
       <p><i class="fa fa-phone"></i> {}{appelOffre.user.telephone} {}
       <i class="fa fa-envelope"> </i>  {}{}{appelOffre.user.email}</p>
      </div>
      <div class="card-body">
        <p class="mb-0"><strong> Constexte: </strong >{appelOffre.contexte} </p>
      </div> 
      <div class="card-body">
        <p class="mb-0"><strong> date d'expiration </strong >{appelOffre.date_exp.substring(0,10)} </p>
      </div> 
    </div>
    </li>
    <li class="d-flex justify-content-between mb-4">
            <div class="card w-100">
              <div class="card-body">
                <p class="mb-0">
                <strong>Réponse: </strong>{appelOffre.propositions.map(el=>el.reponse)}
                </p>
              </div>
            </div>
          
          </li>
    </ul>
</div>
        
 
    
)}
</div>

  
  )}</div></section>
  <Footer/>
  </>
  
  )
}}
export default AppelOffres;