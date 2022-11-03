import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
const ModUbicacion = () => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [colonia, setColonia] = useState("");
    const [ciudad, setCiudad] = useState("");

    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-5 mt-5">
                <Col>
                    <Form className="w-100">
                    <h3 className="text-dark">Modificar página de Ubicación</h3>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Nombre de la Ubicacion</Form.Label>
                                <Form.Control onChange={(e) => setNombre(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                    <Form.Label className="text-dark">Direccion</Form.Label>
                                    <Form.Control onChange={(e) => setDireccion(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Colonia</Form.Label>
                                <Form.Control onChange={(e) => setColonia(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Ciudad</Form.Label>
                                <Form.Control onChange={(e) => setCiudad(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <div className="d-flex justify-content-end w-100">
                            <Button className="mt-2 btn-secondary">Guardar</Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                </Col>
            </div>
        </>
    )
}

export default ModUbicacion;