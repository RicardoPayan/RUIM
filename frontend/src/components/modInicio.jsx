import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
import clienteAxios from "../../config/axios.jsx";
import Alert from "react-bootstrap/Alert"
const ModInicio = () => {
    const [nombreEvento, setNombre] = useState("");
    const [fechas, setFecha] = useState("");
    const [lugar, setLugar] = useState("");
    const [parrafo1, setParrafo] = useState("");
    const [parrafo2, setParrafo2] = useState("");
    const [saved, setSaved] = useState(false);
    useEffect(() => {
        validate();
      });
    const validate = () => {
        console.log("huevos");
        if (nombreEvento==""||fechas==""||lugar==""||parrafo1==""){
            document.getElementById("guardar2").disabled=true;
        } else {
            console.log("huevos2")
            document.getElementById("guardar2").disabled=false;
        }
    }
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
            setSaved(true);
        }catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-5 mt-5">
            <Col>
                <Form className="w-100">
                    <h3 className="text-dark">Modificar pagina de Inicio</h3>
                    <Row>
                        <Form.Group>
                            <Form.Label className="text-dark">Nombre de la reunión *</Form.Label>
                            <Form.Control onChange={(e) => setNombre(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                                <Form.Label className="text-dark">Fecha de la reunión *</Form.Label>
                                <Form.Control onChange={(e) => setFecha(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label className="text-dark">Lugar de la reunión *</Form.Label>
                            <Form.Control onChange={(e) => setLugar(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label className="text-dark">Informacion general: *</Form.Label>
                            <Form.Control as="textarea" rows={5} default = "Informacion que será mostrada como un parrafo en la pagina"
                            onChange={(e) => setParrafo(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label className="text-dark">Informacion adicional:</Form.Label>
                            <Form.Control as="textarea" rows={5} default = "Informacion que será mostrada como un parrafo adicional en la pagina"
                            onChange={(e) => setParrafo2(e.target.value)}></Form.Control>
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
                    <div className="d-flex justify-content-end mb-3 w-100">
                        <Button id="guardar2" onClick={handleSave} className="btn-secondary" disabled="">Guardar</Button>
                    </div>
                    
                </Form>
            </Col>
            <Col>
            </Col>
            </div>
        </>
    )
}

export default ModInicio;