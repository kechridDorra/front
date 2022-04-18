

import React, { Component } from "react";
import './ListUser.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class ListUser extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
       axios.get(`http://localhost:8000/api/users`).then(users => {
           this.setState({ users: users.data, loading: false})
       })
    }

    render() {
        const loading = this.state.loading;
        return (
            <div class="container mt-4">               
                        
            <div class="card">
                <div class="card-body">
                  
                    <div class="row">
                      
                        <div class="col-md-12">
                            <h2 class="py-3 text-center font-bold font-up blue-text">Liste des utilisateurs</h2>
                        </div>
                      
                    </div>
                 
                    
                    <table class="table table-hover table-responsive mb-0">
                    {loading ? (
                        <thead>
                            <tr>
                                <th scope="row">#</th>
                                <th>Nom </th>
                                <th>Prenom</th>
                                <th>Télèphone</th>
                                <th>Email</th>
                                <th>Genre</th>
                                <th>Détails</th>
                                <th class="text-center">Action</th>
						
                            </tr>
                        </thead>
                       ) : (
                        <tbody> 
                             {this.state.users.map(user =>
                            <tr key={user.id}>
                                <th scope="row" src = {user.id}> </th>
                                
                                <td> src = {user.nom} </td>
                                <td>Dorra</td>
                                <td>54627363</td>
                                <td>Kechrid.dorra13@gmail.com</td>
                                <td>femme</td>
                                <td><p className="lien"><a href="#">Voir</a></p></td>
                                <td class="text-center">
                                 <a class='btn btn-info btn-xl' href="#">
                                     <span class="glyphicon glyphicon-edit"></span> Modifier </a>
                                 <a href="#" class="btn btn-danger btn-xl">
                                     <span class="glyphicon glyphicon-remove"></span> Supprimer</a>
                                        </td>
                                        
                            </tr>
                            
                             )}
                         </tbody>
                       )}
                    </table> 
                          
                    <div class="d-flex justify-content-center">
                      
                        <nav class="my-4 pt-2">
                            <ul class="pagination pagination-circle pg-blue mb-0">
                               
                                <li class="page-item disabled clearfix d-none d-md-block"><a class="page-link">Premier</a></li>
                                
                                <li class="page-item disabled">
                                    <a class="page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Précedent</span>
                                        </a>
                                </li>
                               
                                <li class="page-item active"><a class="page-link">1</a></li>
                                <li class="page-item"><a class="page-link">2</a></li>
                                <li class="page-item"><a class="page-link">3</a></li>
                                <li class="page-item"><a class="page-link">4</a></li>
                                <li class="page-item"><a class="page-link">5</a></li>
                               
                                <li class="page-item">
                                    <a class="page-link" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Suivant</span>
                                        </a>
                                </li>
                            
                                <li class="page-item clearfix d-none d-md-block"><a class="page-link">Dernier</a></li>
                            </ul>
                        </nav>
                        
                    </div>
               
                </div>
            </div>

        </div>


        )}}
    export default ListUser;