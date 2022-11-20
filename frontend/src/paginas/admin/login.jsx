import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"

const AdminLogin = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [badLogin, setBadLogin] = useState("");
    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            console.log(username);
            const response = await axios.post("http://localhost:4000/api/adminlogin", {
                username: username,
                password: password
            });
            setToken(response.data);
            if(response.data=="n"){
                setBadLogin(true);
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className= "d-flex h-100 w-100 justify-content-center">
            
            <Form className= "w-20 center mx-auto my-auto" onSubmit={handleLogin}>
            <h1 className="mb-3 text-dark">RUIM</h1>
            <Container className="p-0">
                <Col>
                    <Row>
                        <Form.Group>
                            <Form.Label className="text-dark">Usuario</Form.Label>
                            <Form.Control className="mb-3" placeholder = "" onChange = {(e) => setUsername(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label className="text-dark">Contraseña</Form.Label>
                            <Form.Control className="mb-3" type = "password" placeholder = "" onChange = {(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                    </Row>
                </Col>
                <Row>
                    <div className = "mt-2">
                        <center><Button className="bg-dark" variant = "primary" type = "submit">
                            Iniciar sesion
                        </Button></center>
                    </div>
                </Row>
            </Container>
            {badLogin &&
                        <Alert className="mt-3" key="danger" variant="danger">
                               Usuario o contraseña incorrectos.
                        </Alert> 
                        }
            </Form>
        </div>)
}

AdminLogin.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default AdminLogin;
