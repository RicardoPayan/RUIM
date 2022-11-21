import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import RCard from "../../components/card.jsx";
import Title from '../../components/title.jsx'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { jsPDF } from "jspdf";
import domtoimage from 'dom-to-image';
import Form from "react-bootstrap/Form"
function AdminDashboard(){
    const [data, setData] = useState("");
    const [registros, setRegistros] = useState([]);
    const [newYear, setNYear] = useState("");
    const [years, setYears] = useState([]);
    const [active, setActive] = useState("");
    const [nactive, setNActive] = useState("");
    useEffect(() => {
        getYears();
        getData();
        console.log(registros);
    }, []);
    const getData = async () => {
        const activeyear = await axios.get("http://localhost:4000/api/years/active");
        setActive(activeyear.data.year);
        console.log(activeyear.data);
        const response = await axios.post("http://localhost:4000/api/admin/",{
            year: activeyear.data.year
        });
        console.log(response.data);
        setData(response.data);
        setRegistros(response.data.ultimosRegistros);
        console.log(response.data.ultimosRegistros)
        console.log(registros);
    }
    const createPDF = async () => {
        const input = document.getElementById('informe-parcial');
        const pdf = new jsPDF();
        if (pdf) {
            domtoimage.toPng(input)
            .then(
                imgData=>{
                    pdf.addImage(imgData, 'PNG', 5, 20, pdf.internal.pageSize.getWidth()-10, 59);
                    pdf.save("informe.pdf");
                }
            )
        }
    }
    const AddYear = async () => {
        const response = await axios.post("http://localhost:4000/api/years", {
            year: newYear,
            active: false
        });
        console.log(response);
        getYears();
    }
    const getYears = async () => {
        const response = await axios.get("http://localhost:4000/api/years");
        setYears(response.data);
        console.log(response.data);
    }
    const changeActive = async () => {
        const response = await axios.post("http://localhost:4000/api/years/change-active",{
            oldyear: active,
            newyear: nactive
        })
        getData();
    }
    return(

        <>
        <Title title="Pagina de Administrador"/>
        <div className="ms-5 w-100">
            <h2>Dashboard</h2>
            <div className="w-100 mt-4 mb-5">
                <Row>
                    <Col>
                        <RCard title="Registros totales:" text={data.registrosTotales}></RCard>
                    </Col>
                    <Col>
                        <RCard title="Registros pendientes:" text={data.registrosPendientes}></RCard>
                    </Col>
                    <Col>
                        <RCard title="Registros aceptados:" text={data.registrosAceptados}></RCard>
                    </Col>
                    <Col>
                        <RCard title="Registros rechazados:" text={data.registrosRechazados}></RCard>
                    </Col>
                </Row>
            </div>
            <div className="w-100 mt-4 mb-5">
                <Col className="ps-0">
                <h2>Años</h2>
                    <Row className="ps-2">
                            <Row>
                                Año activo: {active}
                            </Row>
                    </Row>
                    <Row className="ps-2">
                            <Row>
                                Cambiar de año activo:
                            </Row>
                            <Row>
                                <Form.Select className="w-25" onChange = {(e) => setNActive(e.target.value)}>
                                    {
                                        years.map((years, index) => (
                                            <option value={years.year}>{years.year}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Row>
                            <Row>
                            <div className="w-25 p-0">
                                <Button className="mb-3 mt-3 w-25" onClick={changeActive}>Cambiar</Button>
                            </div>
                            </Row>
                    </Row>
                    <Row className="ps-2">
                            <Row>
                                Agregar nuevo año: 
                            </Row>
                            <Row>
                                <Form.Control className="mb-3 mt-2 w-25" placeholder = "" onChange = {(e) => setNYear(e.target.value)}/>
                            </Row>
                            <Row>
                                <div className="w-25 p-0">
                                <Button className="mb-3 w-25" onClick={AddYear}>Guardar</Button>
                                </div>
                            </Row>
                    </Row>
                </Col>
            </div>
            <h2> Últimos registros:</h2>
            <div className="me-5 pe-4">
                <Table className="me-5" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Institucion
                                        </th>
                                        <th>
                                            Departamento
                                        </th>
                                        <th>
                                            Grado Academico
                                        </th>
                                        <th>
                                            Modalidad
                                        </th>
                                        <th>
                                            Correo del representante
                                        </th>
                                        <th>
                                            Estado
                                        </th>
                                        <th>
                                            Titulo
                                        </th>
                                        <th>
                                            Representante
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                            registros.map((registros, index) => (
                                                <tr key={registros.id}>
                                                    <td>{registros.id}</td>
                                                    <td>{registros.institucion}</td>
                                                    <td>{registros.departamento}</td>
                                                    <td>{registros.gradoAcademico}</td>
                                                    <td>{registros.modalidad}</td>
                                                    <td>{registros.correo}</td>
                                                    <td>{registros.estado == 0
                                                        ? "Pendiente"
                                                        : registros.estado == 1
                                                        ? "Aceptado"
                                                        : "Rechazado"}</td>
                                                    <td>{registros.titulo}</td>
                                                    <td>{registros.representante}</td>
                                                </tr>
                                            ))
                                        }
                                </tbody>
                </Table>
            </div>
            <div id="informe-parcial" className="me-5 pe-4">
            <h2> Informe parcial:</h2>
                <Table className="me-5" striped bordered hover>
                                <thead>
                                    <th variant="dark">Información de posters</th>
                                    <tr>
                                        <th>
                                            Numero de registros
                                        </th>
                                        <th>
                                            Registros pendientes
                                        </th>
                                        <th>
                                            Registros aceptados
                                        </th>
                                        <th>
                                            Registros rechazados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{data.cartelesAceptados + data.cartelesPendientes+ data.cartelesRechazados}</td>
                                        <td>{data.cartelesPendientes}</td>
                                        <td>{data.cartelesAceptados}</td>
                                        <td>{data.cartelesRechazados}</td>
                                    </tr>
                                </tbody>
                </Table>
                <Table className="me-5" striped bordered hover>
                                <thead>
                                    <th variant="dark">Información de ponencias</th>
                                    <tr>
                                        <th>
                                            Numero de registros
                                        </th>
                                        <th>
                                            Registros pendientes
                                        </th>
                                        <th>
                                            Registros aceptados
                                        </th>
                                        <th>
                                            Registros rechazados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{data.ponenciasAceptadas + data.ponenciasPendientes+ data.ponenciasRechazadas}</td>
                                        <td>{data.ponenciasPendientes}</td>
                                        <td>{data.ponenciasAceptadas}</td>
                                        <td>{data.ponenciasRechazadas}</td>
                                    </tr>
                                </tbody>
                </Table>
                <Table className="me-5" striped bordered hover>
                                <thead>
                                    <th variant="dark">Información de platicas</th>
                                    <tr>
                                        <th>
                                            Numero de registros
                                        </th>
                                        <th>
                                            Registros pendientes
                                        </th>
                                        <th>
                                            Registros aceptados
                                        </th>
                                        <th>
                                            Registros rechazados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{data.platicasAceptadas + data.platicasPendientes+ data.platicasRechazadas}</td>
                                        <td>{data.platicasPendientes}</td>
                                        <td>{data.platicasAceptadas}</td>
                                        <td>{data.platicasRechazadas}</td>
                                    </tr>
                                </tbody>
                </Table>
            </div>
            <Button className="mb-5 bg-dark" variant = "primary" onClick={createPDF}>Descargar informe parcial</Button>
        </div>
        </>
    )
}
export default AdminDashboard;