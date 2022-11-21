import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
import clienteAxios from "../../config/axios.jsx";
import Alert from "react-bootstrap/Alert"
const ModInicio = () => {
    const [fileState, setFileState] = useState({
        selectedFile: null
    });
    const [nombreEvento, setNombre] = useState("");
    const [fechas, setFecha] = useState("");
    const [lugar, setLugar] = useState("");
    const [parrafo1, setParrafo] = useState("");
    const [parrafo2, setParrafo2] = useState("");
    const [saved, setSaved] = useState(false);
    const [activeYear, setYear] = useState("");
    const [years, setYears] = useState([]);
    useEffect(() => {
        validate();
      });
    useEffect(() => {
        getYears();
    }, []);
    const getYears = async () => {
        const response = await axios.get("http://localhost:4000/api/years");
        setYear(response.data[0].year)
        setYears(response.data);
        console.log(response.data);
    }
    const validate = () => {
        if (nombreEvento==""||fechas==""||lugar==""||parrafo1==""){
            document.getElementById("guardar2").disabled=true;
        } else {
            document.getElementById("guardar2").disabled=false;
        }
    }
    const handleFileChange = (e) => {
        if (e.target.files[0].type == "image/png"){
            setFileState({selectedFile: e.target.files[0]});
            document.getElementById("guardar3").disabled=false;
        } else {
            document.getElementById("guardar3").disabled=true;
        }
    }
    const handleSave = async (e) =>{
        var bannerReferencia = await handleFileUpload();
        e.preventDefault();
        const data = {
            nombreEvento,
            fechas,
            lugar,
            parrafo1,
            parrafo2,
            banner: bannerReferencia,
            year: activeYear
        }

        try {
            await clienteAxios.post('/admin/edit-pagina-inicio', data);
            setSaved(true);
        }catch (error) {
            console.log(error)
        }
    }
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append("programa",
            fileState.selectedFile);
        formData.append("filename", fileState.selectedFile.name)
        var res = await axios.post("http://localhost:4000/api/admin/save-programa", formData)
        return res.data;
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
                    <Row>
                    <   Form.Group className="mb-3">
                            <Form.Label className="text-dark">Archivo del banner * (.png)</Form.Label>
                            <Form.Control name="poster" onChange = {handleFileChange} type ="file" accept = "image/png" controlId=""/>
                        </Form.Group>
                    </Row>
                    <Row>
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