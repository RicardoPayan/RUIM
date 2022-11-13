import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import RCard from "../../components/card.jsx";
import Title from '../../components/title.jsx'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
function AdminDashboard(){
    const [data, setData] = useState("");
    const [registros, setRegistros] = useState([]);
    useEffect(() => {
        getData();
        console.log(registros);
    }, []);
    const getData = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/");
        console.log(response.data);
        setData(response.data);
        setRegistros(response.data.ultimosRegistros);
        console.log(response.data.ultimosRegistros)
        console.log(registros);
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
        </div>
        </>
    )
}
export default AdminDashboard;