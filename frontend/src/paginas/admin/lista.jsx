import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import axios from "axios";
import Title from '../../components/title.jsx'
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form";
import { saveAs } from 'file-saver';
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
function Lista () {
    const [data, setData] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [autores, setAutores] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        getData();
    }, []);
    const handleFilter = (filter) =>{
        if (filter == 3){
            getData();
        } else {
            getFiltered(filter);
        }
    }
    const getData = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/registros-todos");
        setData(response.data);
        console.log(response.data);
        console.log(data);
    };
    const getPDF = async () => {
        const response = await axios.post("http://localhost:4000/api/admin/send-pdf", {
            routePdf: modalData.resumenReferencia
        });
        var file = new Blob([response.data], {type: 'application/pdf'});
        return saveAs(file, "resumen.pdf")

    }
    const getFiltered = async (filter) => {
        const response = await axios.post("http://localhost:4000/api/admin/registros-filtrados", {
            estado: filter
        });
        if(response.data.hasOwnProperty('msg')){
            setEmpty(true);
        } else {
            setEmpty(false);
        }

        setData(response.data);
        console.log(response.data);
    }
    const changeStatus = async (id, estado) => {
        const response = await axios.post("http://localhost:4000/api/admin/editar-estado", {
            id: id,
            nuevoEstado: estado
        });
        handleFilter(document.getElementById("select").value);
        alert("Se ha guardado el cambio. Se le notificará al representante por correo electronico.");
        handleClose();
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
            <Title title="Lista de Registros"/>
            <div className="d-flex justify-content-end me-4">
            <Form className="w-25">
                    <Row>
                        <Form.Label className="text-dark">Filtrar por:</Form.Label>
                    </Row>
                    <Form.Select id="select" onChange={(e) => handleFilter(e.target.value)}className="w-75">
                        <option value="3">Todos</option>
                        <option value="0">Pendiente</option>
                        <option value="1">Aceptado</option>
                        <option value="-1">Rechazado</option>
                    </Form.Select>
                </Form>
            </div>
            <div className="mt-2">
                
                <Container>
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
                <Button variant="secondary" onClick={getPDF}>
                    Revisar resumen
                </Button>
                <Button variant="danger" onClick={() => changeStatus(modalData.id, -1)}>
                    Rechazar
                </Button>
                <Button variant="success" onClick={() => changeStatus(modalData.id, 1)}>
                    Aceptar
                </Button>
                </Modal.Footer>
      </Modal>
        </>
    )
}
export default Lista;