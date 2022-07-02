import '../../enchere/encheresTerminees/EncheresTerminees.css';
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
import EncheresTerminees from '../../enchere/encheresTerminees/EncheresTerminees';

class EncheresT extends Component {
    render  () {
      
    return(<>
<Navbar/>
<EncheresTerminees/>
      <Footer/>
      </>
      
      )
}}
export default EncheresT;