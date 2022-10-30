import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badge from "react-bootstrap/Badge"
import axios from "axios"
import Alert from "react-bootstrap/Alert"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from 'react-bootstrap/Tooltip';
const registro = () => {
    const [counter, setCounter] = useState([]);
    const [members, setMembers] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [representante, setRepresentante] = useState("");
    const [correo, setCorreo] = useState("");
    const [institucion, setInstitucion] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [grado, setGrado] = useState("");
    const [modalidad, setModalidad] = useState("");
    const [fileState, setFileState] = useState({
        selectedFile: null
    });
    const [fileTypeError, setFileTypeError] = useState(false);
    useEffect(() => {
        validate();
      });
    const validate = () => {
        if (titulo==""||representante==""||correo==""||institucion==""||departamento==""||grado==""||modalidad==""||fileState.selectedFile==null){
            document.getElementById("guardar").disabled=true;
        } else {
            document.getElementById("guardar").disabled=false;
        }
    }
    const addField = () => {
        var arr = [...(counter)]
        if (arr.length+1 < 7){
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
    }
    const handleSave = async (e) => {
        var file = await handleFileUpload();
        e.preventDefault();
        const data = {
            titulo: titulo,
            representante: representante,
            nombres: JSON.stringify(members),
            institucion: institucion,
            departamento: departamento,
            gradoAcademico: grado,
            modalidad: modalidad,
            correo: correo,
            estado: 0,
            resumenReferencia: file}
        try{
            const response = await axios.post("http://localhost:4000/api/ruimMain/registro", data);
        }catch(error){
            console.log(error);
        }
    }
    const handleFileChange = (e) => {
        if (e.target.files[0].type == "application/pdf"){
            setFileState({selectedFile: e.target.files[0]});
            document.getElementById("guardar").disabled=false;
            setFileTypeError(false);
        } else {
            document.getElementById("guardar").disabled=true;
            setFileTypeError(true);
        }
    }
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append("resumen",
            fileState.selectedFile);
        formData.append("filename", fileState.selectedFile.name)
        var res = await axios.post("http://localhost:4000/api/ruimMain/registro/upload", formData)
        return res.data;
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Solo se aceptan archivos en formato .PDF
        </Tooltip>
      );
    return (
        <div className= "d-flex h-100 w-100 justify-content-center">
            <Form className = "justify-content-center w-75">
                <center><h1 className="mb-5 mt-5">Registro de ponencia</h1></center>
                <div>
                    <h6 class=" text-uppercase">Información del proyecto</h6>
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
                            <Row>
                            
                                <Col><Form.Label>Resumen</Form.Label>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}>
                                    <Badge className="ms-2" bg="secondary">i</Badge>
                                </OverlayTrigger>
                                </Col>   
                            </Row>
                            <Form.Control name="resumen" onChange = {handleFileChange} type ="file" accept = "application/pdf" controlId=""/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col>
                            <Form.Group>
                                    <Form.Label>Modalidad</Form.Label>
                                    <Form.Control onChange = {(e) => setModalidad(e.target.value)}/>
                            </Form.Group>
                            </Col>
                            <Col/>
                    </Row>
                </div>
                <div class="mb-2">
                    <Row>
                    <div class="mb-2">
                        <h6 class=" text-uppercase">Información del representante</h6>
                        <hr class="dashed"/>
                    </div>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre completo</Form.Label>
                                    <Form.Control placeholder="Nombre completo del representante" onChange = {(e) => setRepresentante(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Correo electronico</Form.Label>
                                <Form.Control type="email" placeholder="Correo electronico del representante" onChange = {(e) => setCorreo(e.target.value)}/>
                            </Col>
                            
                    </Row>
                    <br/>
                    <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Institucion</Form.Label>
                                    <Form.Control onChange = {(e) => setInstitucion(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label>Departamento</Form.Label>
                                <Form.Control onChange = {(e) => setDepartamento(e.target.value)}/>
                            </Col>
                    </Row>
                    <br/>
                    <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Grado academico</Form.Label>
                                    <Form.Control onChange = {(e) => setGrado(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col/>
                    </Row>
                </div>
                <br></br>
                <div class="mb-2">
                    <Row>
                    <div class="mb-2">
                        <h6 class=" text-uppercase">Información del equipo</h6>
                        <hr class="dashed"/>
                    </div>
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
                        {fileTypeError &&
                        <Alert key="danger" variant="danger">
                                Solo se permiten archivos en formato PDF
                        </Alert> 
                        }
                        <Button id="guardar" onClick = {handleSave}>Guardar</Button>
                    </center>
                </div>
            </Form>
        </div>)
}

registro.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default registro;
