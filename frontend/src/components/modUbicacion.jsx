import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import clienteAxios from "../../config/axios.jsx";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
const ModUbicacion = () => {
    const [nombreLugar, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [colonia, setColonia] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [link, setLink] = useState("");
    const [saved, setSaved] = useState("");
    const [activeYear, setYear] = useState("");
    const [years, setYears] = useState([]);
    const handleSave = async (e) =>{
        e.preventDefault();
        const data = {
            nombreLugar,
            direccion,
            colonia,
            ciudad,
            link,
            year: activeYear
        }

        try {
            await clienteAxios.post('/admin/edit-pagina-ubicacion', data);
            setSaved(true);
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        validate();
      });
      const validate = () => {
        if (nombreLugar==""||direccion==""||colonia==""||ciudad==""){
            document.getElementById("guardar5").disabled=true;
        } else {
            document.getElementById("guardar5").disabled=false;
        }
    }
    useEffect(() => {
        getYears();
    }, []);
    const getYears = async () => {
        const response = await axios.get("http://localhost:4000/api/years");
        setYear(response.data[0].year)
        setYears(response.data);
        console.log(response.data);
    }
    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-5 mt-5">
                <Col>
                    <Form className="w-75">
                    <h3 className="text-dark">Modificar página de Ubicación</h3>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Nombre de la Ubicacion *</Form.Label>
                                <Form.Control onChange={(e) => setNombre(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                    <Form.Label className="text-dark">Direccion *</Form.Label>
                                    <Form.Control onChange={(e) => setDireccion(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Colonia *</Form.Label>
                                <Form.Control onChange={(e) => setColonia(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Ciudad *</Form.Label>
                                <Form.Control onChange={(e) => setCiudad(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Link a Google Maps *</Form.Label>
                                <Form.Control onChange={(e) => setLink(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">Año de la publicación</Form.Label>
                            <Form.Select className="" onChange = {(e) => setYear(e.target.value)}>
                                    {
                                        years.map((years, index) => (
                                            <option value={years.year}>{years.year}</option>
                                        ))
                                    }
                                </Form.Select>
                        </Form.Group>
                        <Form.Text className="text-muted">
                        Los campos con * deben ser llenados para que se active el botón de guardar.
                    </Form.Text>
                        {saved &&
                        <Alert key="success" variant="success">
                                Se ha guardado exitosamente. Los cambios han sido reflejados en el sitio público.
                        </Alert> 
                        }
                        <div className="d-flex justify-content-end w-100">
                            <Button className="mt-2 btn-secondary" onClick={handleSave} id="guardar5" disabled="">Guardar</Button>
                        </div>
                    </Form>
                </Col>
            </div>
        </>
    )
}

export default ModUbicacion;