import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import axios from "axios";
import Title from '../../components/title.jsx'
import Constancia from "../../components/Constancia.jsx";
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { jsPDF } from "jspdf";
import domtoimage from 'dom-to-image';

function GenerarConstancias () {
    const [data, setData] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [autores, setAutores] = useState("");
    const handleClose = () => setShow(false);
    const [token, setToken] = useState("");
    const handleShow = () => setShow(true);
    useEffect(() => {
        getData();
    }, []);
    const [fileState, setFileState] = useState({
        selectedFile: null
    });
    const [fileState2, setFileState2] = useState({
        selectedFile: null
    });
    const [initFileState, setInitFileState] = useState({
        selectedFile: null
    })
    const handleFileChange = (e) => {
        if (e.target.files[0].type == "image/png"){
            setFileState2({selectedFile: e.target.files[0]});
            document.getElementById("guardar4").disabled=false;
        } else {
            document.getElementById("guardar4").disabled=true;
        }
    }
    const [saved, setSaved] = useState(false);
    const [imgReferencia, setReferencia] = useState("");
    const handleIMG = async () => {
        handleFileChange();
        handleFileUpload();
    }
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append("programa",
            fileState2.selectedFile);
            console.log(fileState2.selectedFile);
        formData.append("filename", fileState2.selectedFile.name)
        var res = await axios.post("http://localhost:4000/api/admin/save-programa", formData)
        setReferencia(res.data);
        console.log(res.data);
    }
    const handleSave = async () => {
        var posterReferencia = await handleFileUpload();
        console.log(posterReferencia);
        var res = await axios.post("http://localhost:4000/api/admin/edit-pagina-programa", {
            posterReferencia: posterReferencia
        });
    }
    const makeToken = () => {
        return Math.random().toString(36).substr(2); // remove `0.`
    };
    const getData = async () => {
        const response = await axios.post("http://localhost:4000/api/admin/registros-filtrados", {
            estado: 1
        });
        if(response.data.hasOwnProperty('msg')){
            setEmpty(true);
        } else {
            setEmpty(false);
        }

        setData(response.data);
        console.log(response.data);
    };

    const createPDF = async () => {
        console.log(imgReferencia);
        const input = document.getElementById('print');
        const pdf = new jsPDF('l');
        var token = makeToken();
        setToken(token); 
        if (pdf) {
            domtoimage.toPng(input)
            .then(
                imgData=>{
                    pdf.addImage(imgData, 'PNG', 0, 0);
                    pdf.addPage();
                    pdf.text(10,20,"token: "+token)
                    var file = new File([pdf.output('blob')], "cosa.pdf",{name: "cosa.pdf", type:"application/pdf", lastModified:new Date().getTime()})
                    setFileState(file);
                }
            )
        }
    }
    const handlePDFUpload = async () => {
        const formData = new FormData();
        console.log(fileState);
        formData.append("resumen",
            fileState);
        formData.append("filename", fileState.name)
        console.log(formData);
        var res = await axios.post("http://localhost:4000/api/ruimMain/registro/upload", formData)
        return res.data;
    }

    const createsendPDF = async () =>{
        await createPDF();
        var referencia = await handlePDFUpload();
        saveConstancia(referencia);
        alert("Se ha generado la constancia. Se le notificará al representante por correo electrónico")
    }
    const saveConstancia = async (referencia)=> {
        const response = await axios.post("http://localhost:4000/api/admin/save-constancia", {
            token: token,
            referencia: referencia,
            correo: modalData.correo,
            representante: modalData.representante,
            titulo: modalData.titulo
        });
    }
    const getAutores = async (id) => {
        const response = await axios.post("http://localhost:4000/api/admin/obtener-autores", {
            idRegistro: id
        });
        console.log(response.data);
        var nombres = response.data.map(a=> a.nombre)
        setAutores(nombres.join(", "))
    }
    return(
        <>             
        <Title title="Generación de constancias"/>
        <div id="" className="mt-2">
        
            <Container>
            <h5 className="text-dark">Fondo para la constancia: </h5>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-dark">Archivo del fondo * (.png)</Form.Label>
                        <Form.Control name="poster" onChange = {handleFileChange} type ="file" accept = "image/png" controlId=""/>
                    </Form.Group>
                    <Button variant="secondary" onClick={handleFileUpload}>Guardar</Button>
        <hr></hr>
        <h3>Registros aceptados</h3>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Titulo
                                </th>
                                <th>
                                    Representante
                                </th>
                                <th>
                                    Modalidad
                                </th>
                                <th>
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            !empty &&
                                    data.map((data, index) => (
                                        <tr onClick={()=> {
                                            setModalData(data);
                                            getAutores(data.id);
                                            setShow(true);
                                        }} key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.titulo}</td>
                                            <td>{data.representante}</td>
                                            <td>{data.modalidad}</td>
                                            <td>{data.estado == 0
                                                ? "Pendiente"
                                                : data.estado == 1
                                                ? "Aceptado"
                                                : "Rechazado"}</td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </Table>
                    {
                                empty &&
                                    <Alert key="info" variant="info">
                                        No se han encontrado registros
                                    </Alert> 
                            }
                </Row>
            </Container>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Revisar registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Titulo: {modalData.titulo}</p>
                <p>Representante: {modalData.representante}</p>
                <p>Modalidad: {modalData.modalidad}</p>
                <p>Estado: {modalData.estado == 0
                                                ? "Pendiente"
                                                : modalData.estado == 1
                                                ? "Aceptado"
                                                  : "Rechazado"}</p>
                <p>Correo del representante: {modalData.correo}</p>
                <p>Institucion: {modalData.institucion}</p>
                <p>Departamento: {modalData.departamento}</p>
                <p>Grado academico: {modalData.gradoAcademico}</p>
                <p>Autores adicionales: {autores}</p></Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={createsendPDF}>
                Generar constancia
            </Button>
            </Modal.Footer>
  </Modal>
  <div className="w-100 h-100" style={{opacity: 0}}>
        <div id="print" className="h-100 d-flex flex-column align-items-center" style={{width: 1123, height: 794, backgroundImage: `url(${imgReferencia})`, backgroundSize: 'contain'}}>
            <div className="w-100 p-5 pt-5 h-100 mt-5">
            <div className="p-5 mt-5">
            <div className="mb-5 mt-5 pt-5"><center><h4>{modalData.representante}, {autores}</h4></center></div>
            <div className="mt-3"><center><h5>Por su {modalData.modalidad} {modalData.titulo} presentada en la XXV Reunión Universitaria de Investigación en Materiales realizado del 26 al 28 de mayo del 2022.</h5></center>
            </div>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default GenerarConstancias;