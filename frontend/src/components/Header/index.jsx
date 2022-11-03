import React from "react";
import '../Header/bootstrap.min.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Inicio from "../../paginas/publico/Inicio";
import Programa from "../../paginas/publico/Programa";
import { Image } from "react-bootstrap";
import Poster from "../../paginas/publico/Poster";
import Ubicacion from "../../paginas/publico/Ubicacion";
import Registro from "../../paginas/publico/registro";
import Contacto from "../../paginas/publico/Contacto";
import { BsGeoAltFill } from 'react-icons/bs';

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

          <main role="main" class="ml-sm-auto col-12">
            <div
              class="parallax-window"
              data-parallax="scroll"
              >
              <div class="tm-section-wrap">
                <section id="intro" class="tm-section">
                   <Inicio/>     
                </section>
            </div>            
          </div>

          <div class="tm-section-wrap bg-white">
            <section id="/programa" class="row tm-section">
              <Programa/>
              <div class="w-100 tm-double-border-1 tm-border-gray">
                    <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                      <div class="tm-gallery-wrap">
              <img src="../archivos/posterPrograma/banner.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
              </div>
              </div>
              </div>
            </section>
          </div>

          <div class="tm-section-wrap bg-white">
            <section id="/poster" class="row tm-section">
              <Poster/>
              <div class="w-100 tm-double-border-1 tm-border-gray">
                    <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                      <div class="tm-gallery-wrap">
              <img src="../archivos/poster/poster.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
              </div>
              </div>
              </div>
            </section>
          </div>

      
          <div class="tm-section-wrap bg-white">
            <section id="/ubicacion" class="row tm-section">
                <Ubicacion/>
                <Contacto/>
            </section>
          </div>

          <div class="tm-section-wrap bg-white">
            <section id="/ubicacion" class="row tm-section">
              <div class="col-12">
                <div class="w-100 tm-double-border-1 tm-border-gray">
                    <div class="tm-double-border-2 tm-border-gray tm-box-pad">
                      <div class="tm-gallery-wrap">
                        <Registro/>
                    </div>                  
                  </div>     
              </div>  
              </div>      
            </section>
          </div>     
        </main>        
          
        </div>
        </main> 

        
  );
}


export default Header;