import React from "react";
import '../Header/bootstrap.min.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Header = () => {

    return (
      <main class="container-fluid m-0" >
      <div class="row">        
          <Nav id="tmSidebar" class="tm-bg-black-transparent tm-sidebar">
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="tm-sidebar-sticky">
              <div class="tm-brand-box">
                <div class="tm-double-border-1">
                  <div class="tm-double-border-2">
                    <h1 class="tm-brand text-uppercase">RUIM</h1>
                  </div>
                </div>
              </div>

              <ul id="tmMainNav" class="nav flex-column text-uppercase text-right tm-main-nav">
                <li class="nav-item">
                  <Link to="/" class="nav-link active">
                    <span class="d-inline-block mr-3">Intro</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/programa" class="nav-link">
                    <span class="d-inline-block mr-3">Programa</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/poster" class="nav-link">
                    <span class="d-inline-block mr-3">Poster</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/ubicacion" class="nav-link">
                    <span class="d-inline-block mr-3">Ubicación</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contacto" class="nav-link">
                    <span class="d-inline-block mr-3">Contacto</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
              <li class="nav-item">
                  <Link to="/registro" class="nav-link">
                    <span class="d-inline-block mr-3">Registro</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
              </ul>
              
              <footer class="text-center text-white small">
                <p class="mb--0 mb-2">Universidad de Sonora</p>
                <p class="mb-0">2022
                </p>
              </footer>
            </div>
          </Nav>
          
        </div>
        </main> 
  );
}


export default Header;