import React from "react";
import "../Header/bootstrap.min.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Inicio from "../../paginas/publico/Inicio";
import Programa from "../../paginas/publico/Programa";
import {useState, useEffect, createContext} from "react";
import { Image } from "react-bootstrap";
import Poster from "../../paginas/publico/Poster";
import Ubicacion from "../../paginas/publico/Ubicacion";
import Registro from "../../paginas/publico/registro";
import Contacto from "../../paginas/publico/Contacto";
import Form from "react-bootstrap/Form"
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Verificar from "../../paginas/publico/verificar";
import { useParams } from "react-router-dom";
const Header = () => {
    const [year, setYear] = useState();
    const [previous, setPrevious] = useState(false);
    const [years, setYears] = useState([]);
    useEffect(() =>{
      const getYear = async ()=> {
        console.log(window.location.pathname)
        const activeyear = await axios.get("http://localhost:4000/api/years/active"); 
        if(window.location.pathname!="/"){
          var year = Number(window.location.pathname.replace(/\//g, ""));
          console.log(year);
          setYear(year);
          if(year != activeyear.data.year){
            console.log("AHJ")
            console.log(year);
            console.log(activeyear.data.year);
            setPrevious(true);
          }
        } else {
        try {
          setYear(activeyear.data.year);    
          console.log(activeyear.data.year);
          const response = await axios.get("http://localhost:4000/api/years");
          setYears(response.data);
      }catch (error){
          console.log(error);
      }}}
      getYear();
    }, [])
    const handleYear = (year) => {
          window.open("http://localhost:5173/"+year, "_self")
    }
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
                  <Link to={{pathname: `/${year}`}} class="nav-link active">
                    <span class="d-inline-block mr-3">Inicio</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={{pathname: `/programa/${year}`}} class="nav-link">
                    <span class="d-inline-block mr-3">Programa</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={{pathname: `/poster/${year}`}} class="nav-link">
                    <span class="d-inline-block mr-3">Poster</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={{pathname: `/ubicacion/${year}`}} class="nav-link">
                    <span class="d-inline-block mr-3">Ubicación</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={{pathname: `/contacto/${year}`}} class="nav-link">
                    <span class="d-inline-block mr-3">Contacto</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
              <li class="nav-item">
                  <Link to={{pathname: `/registro/${year}`}} class="nav-link">
                    <span class="d-inline-block mr-3">Registro</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/verificar" class="nav-link">
                    <span class="d-inline-block mr-3">Verificación</span>
                    <span class="d-inline-block tm-white-rect"></span>
                  </Link>
                </li>
              </ul>
              
              
              <footer class="text-center pt-5 mt-5 text-white small">
                <div className="mt-3">
                {!previous && <Form.Select className="" onChange = {(e) => handleYear(e.target.value)}>
                  <option>Visitar sitios anteriores</option>
                                    {
                                        years.map((years, index) => (
                                            <option value={years.year}>{years.year}</option>
                                        ))
                                    }
                                </Form.Select>}
                  <p class="">Universidad de Sonora</p>
                </div>
              </footer>
            </div>
          </Nav>  
        </Col>
        <Col className="col-9 mt-4 me-2">
            <Routes>
            <Route exact path ="/" element = {<Inicio/>}/>
              <Route exact path ="/:year" element = {<Inicio/>}/>
              <Route exact path ="/programa/:year" element = {<Programa/>}/>
              <Route exact path ="/poster/:year" element = {<Poster/>}/>
              <Route exact path ="/ubicacion/:year" element = {<Ubicacion/>}/>
              <Route exact path ="/registro/:year" element = {<Registro/>}/>
              <Route exact path ="/contacto/:year" element = {<Contacto/>}/>
              <Route exact path ="/verificar" element = {<Verificar/>}/>
            </Routes>
        </Col>
        </Row>
        </>
  );
}


export default Header;