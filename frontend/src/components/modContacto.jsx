import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import clienteAxios from "../../config/axios.jsx";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
const ModContacto = () => {
    const [instrucciones, setNombre] = useState("");
    const [contacto, setDireccion] = useState("");
    const [saved, setSaved] = useState("");
    const handleSave = async (e) =>{
        e.preventDefault();
        const data = {
            instrucciones,
            contacto,
        }

        try {
            await clienteAxios.post('/admin/edit-pagina-contacto', data);
            setSaved(true);
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        validate();
      });
      const validate = () => {
        if (instrucciones==""||contacto==""){
            document.getElementById("guardar6").disabled=true;
        } else {
            document.getElementById("guardar6").disabled=false;
        }
    }
    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-5 mt-5">
                <Col>
                    <Form className="w-75">
                    <h3 className="text-dark">Modificar página de Ubicación</h3>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Instrucciones de contacto *</Form.Label>
                                <Form.Control as="textarea" onChange={(e) => setNombre(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                    <Form.Label className="text-dark">Direccion de contacto *</Form.Label>
                                    <Form.Control onChange={(e) => setDireccion(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Form.Text className="text-muted">
                        Los campos con * deben ser llenados para que se active el botón de guardar.
                    </Form.Text>
                        {saved &&
                        <Alert key="success" variant="success">
                                Se ha guardado exitosamente. Los cambios han sido reflejados en el sitio público.
                        </Alert> 
                        }
                        <div className="d-flex justify-content-end w-100">
                            <Button className="mt-2 btn-secondary" onClick={handleSave} id="guardar6" disabled="">Guardar</Button>
                        </div>
                    </Form>
                </Col>
            </div>
        </>
    )
}

export default ModContacto;