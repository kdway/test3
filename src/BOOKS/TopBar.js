import React, { Fragment }  from 'react';

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './styles/TopBar.css'
const TopBar = ({ match }) => {
  return (
    <>

<nav class="navbar navbar-expand-lg bg-light p-4 shadow-lg">
  <div class="container-fluid">
    <a class="navbar-brand  rounded"href="/">CollectioToBe<strong style={{color:'red'}}>Sucess</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active ms-5" style={{color:'black', fontSize:'25px'}} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:'black', fontSize:'25px'}}href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"style={{color:'black', fontSize:'25px'}} href="/Pricing">Pricing</a>
        </li>
        <li class="nav-item">
        <a className=" facebook h-50 w-50" style={{marginLeft:'10em',color:'black'}} href="https://www.facebook.com/"><FaFacebook size="1.2em"  /></a>
        </li>
        <li class="nav-item">
        <a className="twitter" style={{marginLeft:'5em',color:'black'}} href="https://github.com/"><FaTwitter size="1.2em" /></a>
        </li>
        <li class="nav-item">
        <a className="intagram" style={{marginLeft:'5em', color:'black'}} href="#"><FaInstagram size="1.2em" /></a>
        </li>
      


        
      </ul>
    </div>
  </div>
</nav>


    
    </>


  )
};

export default TopBar;