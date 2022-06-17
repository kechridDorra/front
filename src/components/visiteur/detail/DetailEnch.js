
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Api from '../../../services/Api';

class DetailEnch extends Component {
  /*  constructor() {
        super();
        this.state = {enchere: ' ', loading: true};
    }
    componentDidMount() {
        this.getEnchere();
    }
    async  getEnchere(id) {
        try {
            
        const  enchere =await Api.get(`/enchere/${this.state.enchere.id}`)
    
        this.setState({ encheres: enchere.data, loading: false})
            console.log(
                'detail', enchere
            )
        } catch (error) {
            // alert("test")
        }
    */
        state = {
            id: '',
          }
          handleChange = event => {
            this.setState({ id: event.target.value });
          }
          handleSubmit = event => {
            event.preventDefault();
        
            axios.get(`https://127.0.0.1:8000/enchere/${this.state.id}`)
              .then(res => {
                console.log(res);
                console.log(res.data);
              })
          }
      
          render() {
            return (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Person ID:
                    <input type="text" name="id" onChange={this.handleChange} />
                  </label>
                  <button type="submit">Detail</button>
                </form>
              </div>
            )
          
}}
export default DetailEnch;
