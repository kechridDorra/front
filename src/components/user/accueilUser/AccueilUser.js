import React from 'react';
import BodyUser from '../bodyUser/BodyUser';
import NavbarUser from '../navbarUser/NavbarUser';
import Footer from '../../Footer';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

 function AccueilUser() {
  return (<>
<NavbarUser/>
<BodyUser/>
<Footer/>
</>  
  );}
  export default AccueilUser;