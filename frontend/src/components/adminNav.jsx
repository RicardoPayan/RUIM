import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
function AdminNav(){
    return(
        <>
      <Nav defaultActiveKey="/home" className="flex-column shadow-sm" style={{height: "100%", width: "100%"}}>
        <Link to="/admin" style={{ textDecoration: 'none' }}><center><h1 className='mt-3'>RUIM</h1></center></Link>
        <Link to="lista" className='ms-2' style={{ textDecoration: 'none' }}>Lista de registros</Link>
    </Nav>
      </>)
}

export default AdminNav;