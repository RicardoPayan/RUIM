import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
import clienteAxios from "../../config/axios.jsx";
const ModInicio = () => {
    const [nombreEvento, setNombre] = useState("");
    const [fechas, setFecha] = useState("");
    const [lugar, setLugar] = useState("");
    const [parrafo1, setParrafo] = useState("");
    const [parrafo2, setParrafo2] = useState("");

    const handleSave = async (e) =>{
        e.preventDefault();
        const data = {
            nombreEvento,
            fechas,
            lugar,
            parrafo1,
            parrafo2
        }

        try {
            await clienteAxios.post('/admin/edit-pagina-inicio', data);
        }catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-2 mt-5">
                <Form className="w-100">
                    <center><h1>Modificar pagina de Inicio</h1></center>
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
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Informacion adicional:</Form.Label>
                            <Form.Control as="textarea" rows={5} default = "Informacion que será mostrada como un parrafo adicional en la pagina"
                            onChange={(e) => setParrafo2(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    
                    <center><Button onClick={handleSave}>Guardar</Button></center>
                </Form>
            </div>
        </>
    )
}

export default ModInicio;