import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function ModHeader () {
    return(
        <>
            <Navbar bg="light" variant="light">
            <div className="ps-3 p-2">
                <Nav className="me-auto">
                    <div className="me-2">
                        <Link to="/admin/mod/inicio" style={{ textDecoration: 'none' }}><Navbar.Text>Inicio</Navbar.Text></Link>
                    </div>
                    <div className="me-2">
                        <Link to="/admin/mod/poster" style={{ textDecoration: 'none' }}><Navbar.Text>Poster</Navbar.Text></Link>
                    </div>
                    <div className="me-2">
                        <Link to="/admin/mod/programa" style={{ textDecoration: 'none' }}><Navbar.Text>Programa</Navbar.Text></Link>
                    </div>
                    <div className="me-2">
                        <Link to="/admin/mod/registro" style={{ textDecoration: 'none' }}> <Navbar.Text>Registro</Navbar.Text></Link>
                    </div>
                    <div className="me-2">
                        <Link to="/admin/mod/ubicacion" style={{ textDecoration: 'none' }}><Navbar.Text>Ubicacion</Navbar.Text></Link>
                    </div>
                </Nav>
            </div>
        </Navbar>
        </>)
}

export default ModHeader;