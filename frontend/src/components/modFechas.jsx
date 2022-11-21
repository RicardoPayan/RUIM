import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import clienteAxios from "../../config/axios.jsx";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
const ModFechas = () => {
    const [startDate, setSDate] = useState("");
    const [closeDate, setFDate] = useState("");
    const [saved, setSaved] = useState("");
    const [BDate, setBDate] = useState(false);
    const [activeYear, setYear] = useState("");
    const [years, setYears] = useState([]);
    const handleSave = async (e) =>{
        e.preventDefault();
        try {
            await clienteAxios.post('/admin/edit-fechas', {
                fechaInicio: startDate,
                fechaFinal: closeDate,
                year: activeYear
            });
            setSaved(true);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        validate();
      });
      const validate = () => {
        const x = new Date(startDate);
        const y = new Date(closeDate);
        if (x>y||x==y){
            document.getElementById("guardar7").disabled=true;
            setBDate(true);
        } else {
            document.getElementById("guardar7").disabled=false;
            setBDate(false);
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
                    <h3 className="text-dark">Modificar fechas de Registro</h3>
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Fecha de inicio *</Form.Label>
                                <input type="date" className="form-control" onChange={(e)=> setSDate(e.target.value)}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                            <Form.Label className="text-dark">Fecha de cierre *</Form.Label>
                                <input type="date" className="form-control" onChange={(e)=> setFDate(e.target.value)}/>
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
                        {BDate &&
                            <Alert key="danger" variant="danger">
                                Las fechas seleccionadas son inválidas.
                            </Alert>}
                        <div className="d-flex justify-content-end w-100">
                            <Button className="mt-2 btn-secondary" onClick={handleSave} id="guardar7" disabled="">Guardar</Button>
                        </div>
                    </Form>
                </Col>
            </div>
        </>
    )
}

export default ModFechas;