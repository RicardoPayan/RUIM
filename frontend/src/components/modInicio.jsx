import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
const ModInicio = () => {
    const [nombre, setNombre] = useState("");
    const [fechas, setFecha] = useState("");
    const [lugar, setLugar] = useState("");
    const [parrafo1, setParrafo] = useState("");
    const [parrafo2, setParrafo2] = useState("");

    return(
        <>
        <div className= "d-flex h-100 w-100">
            <div>webos</div>
            <div>
                <Form className="w-100">
                    <Row>
                        <Form.Group>
                            <Form.Label>Nombre de la reunión</Form.Label>
                            <Form.Control onChange={(e) => setNombre(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                                <Form.Label>Fecha de la reunión</Form.Label>
                                <Form.Control onChange={(e) => setFecha(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Lugar de la reunión</Form.Label>
                            <Form.Control onChange={(e) => setLugar(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Informacion general:</Form.Label>
                            <Form.Control as="textarea" rows={5} default = "Informacion que será mostrada como un parrafo en la pagina"
                            onChange={(e) => setParrafo(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Informacion adicional:</Form.Label>
                            <Form.Control as="textarea" rows={5} default = "Informacion que será mostrada como un parrafo adicional en la pagina"
                            onChange={(e) => setParrafo2(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </div>
        </>
    )
}

export default ModInicio;