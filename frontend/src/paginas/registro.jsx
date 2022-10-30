import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"

const registro = () => {
    const [counter, setCounter] = useState([]);
    const [members, setMembers] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [representante, setRepresentante] = useState("");
    const [correo, setCorreo] = useState("");
    const addField = () => {
        var arr = [...(counter)]
        console.log(arr.length+1);
        if (arr.length+1 < 8){
            arr.push("")
            setCounter(arr);
        } else {
            document.getElementById("add").disabled=false;
        }
    }
    const handleMembers = (id, val) => {
        var arr = [...(members)]
        arr[id] = val
        setMembers(arr)
        console.log(members);
    }
    const handleSave = async (e) => {
        const data = {
            miembros: members,
            titulo: titulo,
            representante: representante,
            correo: correo}
        console.log(data);
    }
    return (
        <div className= "d-flex h-100 w-100 justify-content-center">
            <Form className = "justify-content-center w-75">
                <center><h1 className="mb-5 mt-5">Registro de ponencia</h1></center>
                <div>
                    <h6 class=" text-uppercase">Informacion del proyecto</h6>
                    <hr class="dashed"/>
                </div>
                <div class="mb-5">
                    <Row >
                        <Col>
                            <Form.Group>
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control onChange = {(e) => setTitulo(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Resumen</Form.Label>
                            <Form.Control type ="file" controlId="chichotas"/>
                        </Col>
                    </Row>
                </div>
                <div class="mb-2">
                    <Row>
                    <div class="mb-4">
                        <h6 class=" text-uppercase">Informacion del equipo</h6>
                        <hr class="dashed"/>
                    </div>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Representante del equipo</Form.Label>
                                    <Form.Control onChange = {(e) => setRepresentante(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control type="email" placeholder="Correo electronico del representante" onChange = {(e) => setCorreo(e.target.value)}/>
                            </Col>
                            
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Form.Label>Miembros del equipo</Form.Label>
                        <Form.Control onChange = {(e) => handleMembers(0, e.target.value)}/>
                    </Col>
                    
                        <Col>
                            <div className="pt-2">
                                <Button as="input" id="add" onClick ={addField} type="button" value="+" className="rounded-circle btn-primary mt-4 "/>
                            </div>
                        </Col>
                </Row>
                <div className="mt-2">
                    {Object.keys(counter).map(function (d, idx){
                                return(
                                    <div className="mt-4">
                                        <Row>
                                            <Col>
                                                <Form.Control onChange = {(e) => handleMembers(idx+1, e.target.value)}/>
                                            </Col>
                                            <Col/>    
                                        </Row>
                                    </div>
                                )
                            })
                            }
                </div>
                <div className="mt-5 mb-5">
                    <center>
                        <Button onClick = {handleSave}>Guardar</Button>
                    </center>
                </div>
            </Form>
        </div>)
}

registro.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default registro;
