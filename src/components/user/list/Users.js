
//import React, { Component, useEffect, useState,state } from "react";
import './Users.css';
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import Api from '../../../services/Api';
class Users extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }
    componentDidMount() {
        this.getUsers();
    }
  async  getUsers() {
        try {
            
        const users =await   Api.get(`/users`)
        // const users =await   axios.get(`https://127.0.0.1:8000/users`)
        this.setState({ users: users.data, loading: false})
            console.log(
                'userss',users
            )
        } catch (error) {
            // alert("test")
        }

     }
    render() {
            const loading = this.state.loading;
            return(
                <div class="container mt-4">
                   <div class="card">
                      <div class="card-body">
                         <div class="row">
                            <div class="col-md-12">
                                <h2 class="py-3 text-center font-bold font-up blue-text">Liste des utilisateurs</h2>
                            </div>
                         </div>


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
                                     <th class="text-center">Actions</th>

                                 </tr>
                             </thead>
                            ) : (


                                <div className={'row'}>
                                    { this.state.users.map(user =>
                                        <div className="col-md-10 offset-md-1 row-block" key={user.id}>
                                                        <table>
                                                   <tbody>
                                                       <tr>
                                                            <th scope="row"> {user.id}</th>
                                                            <td>{user.nom}</td>
                                                            <td>{user.prenom}</td>
                                                            <td>{user.telephone}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.genre}</td>
                                                            <td><p className="lien"><a href="#">Voir</a></p></td>
                                <td class="text-center">
                                 <a class='btn btn-info btn-xl' href="#">
                                     <span class="glyphicon glyphicon-edit"></span> Modifier </a>
                                 <a href="#" class="btn btn-danger btn-xl">
                                     <span class="glyphicon glyphicon-remove"></span> Supprimer</a>
                                        </td>

                            </tr></tbody>  </table>



                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
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
                        </div></div>

            )
        }
    }


export default Users;