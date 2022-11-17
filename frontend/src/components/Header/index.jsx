import React from "react";
import "../Header/bootstrap.min.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Inicio from "../../paginas/publico/Inicio";
import Programa from "../../paginas/publico/Programa";
import { Image } from "react-bootstrap";
import Poster from "../../paginas/publico/Poster";
import Ubicacion from "../../paginas/publico/Ubicacion";
import Registro from "../../paginas/publico/registro";
import Contacto from "../../paginas/publico/Contacto";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Header = () => {

    return (
      <>
      <Row className="h-100">
      <Col xs={2}>     
          <Nav id="tmSidebar" class="tm-bg-black-transparent tm-sidebar h-100">
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="tm-sidebar-sticky h-100">
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
                    <span class="d-inline-block mr-3">Inicio</span>
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
              
              <footer class="text-center pt-5 mt-5 text-white small">
                <div className="mt-5 pt-5">
                  <p class="">Universidad de Sonora</p>
                </div>
              </footer>
            </div>
          </Nav>  
        </Col>
        <Col className="col-9 mt-4 me-2">
            <Routes>
              <Route exact path ="/" element = {<Inicio/>}/>
              <Route exact path ="/programa" element = {<Programa/>}/>
              <Route exact path ="/poster" element = {<Poster/>}/>
              <Route exact path ="/ubicacion" element = {<Ubicacion/>}/>
              <Route exact path ="/registro" element = {<Registro/>}/>
              <Route exact path ="/contacto" element = {<Contacto/>}/>
            </Routes>
        </Col>
        </Row>
        </>
  );
}


export default Header;