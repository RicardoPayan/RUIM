import {Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from '../paginas/admin/login.jsx'
import React, { useState } from 'react';
import AdminNav from "../components/adminNav.jsx"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Lista from "../paginas/admin/lista.jsx"
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import AdminDashboard from '../paginas/admin/dashboard.jsx';
const RuimAdminLayout = () =>{
    const [token, setToken] = useState("n");
    if(token=="n"){
        return <AdminLogin setToken={setToken}/>
    }

    return(
        <div className="App w-100 h-100">
            <Container fluid className="ms-0 h-100 ps-0">
                <Row className="h-100">
                    <Col xs={2}>
                        <AdminNav/>  
                    </Col>
                    <Col>
                        <Routes>
                            <Route exact path ="/" element = {<AdminDashboard/>}/>
                            <Route exact path ="/lista" element = {<Lista/>}/>
                        </Routes>
                    </Col>
                    <Outlet />
                </Row>
            </Container>
        </div>
    ) 
}

export default RuimAdminLayout;