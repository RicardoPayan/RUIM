import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function AdminNav(){
    return(
        <>
      
      <Nav defaultActiveKey="/home" className=" text-white bg-dark flex-column shadow-sm ps-3" style={{height: "100%", width: "100%"}}>
        <Link to="/admin" style={{ textDecoration: 'none', color:'white' }}><center><h1 className='mt-4'>RUIM</h1></center></Link>
        <hr></hr>
        <Link to="lista" className='ms-2 mt-2 mb-3' style={{ textDecoration: 'none', color:'white'}}><h5>Lista de registros</h5></Link>
        <Link to="mod" className='ms-2' style={{ textDecoration: 'none' , color:'white'}}><h5>Modificar contenido de la pagina</h5></Link>
    </Nav>
      </>)
}

export default AdminNav;