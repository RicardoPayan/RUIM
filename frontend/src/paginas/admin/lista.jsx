import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import axios from "axios";
import Title from '../../components/title.jsx'
import Form from "react-bootstrap/Form";
function Lista () {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const handleFilter = (filter) =>{
        if (filter == 3){
            getData();
        } else if (filter == 0){
            getPendientes();
        } else if (filter == 1){
            getAceptados();
        } else if (filter == 2 ){
            getRechazados();
        }
    }
    const getData = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/registros");
        setData(response.data);
        console.log(response.data);
        console.log(data);
    };
    const getPendientes = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/registros-pendientes");
        setData(response.data);
        console.log(response.data);
        console.log(data);
    };
    const getAceptados = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/registros-aceptados");
        setData(response.data);
        console.log(response.data);
        console.log(data);
    };
    const getRechazados = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/registros-rechazados");
        setData(response.data);
        console.log(response.data);
        console.log(data);
    };
    return(
        <>
            <Title title="Lista de Registros"/>
            <div className="d-flex justify-content-end me-4">
            <Form className="w-25">
                    <Row>
                        <Form.Label className="text-dark">Filtrar por:</Form.Label>
                    </Row>
                    <Form.Select onChange={(e) => handleFilter(e.target.value)}className="w-75">
                        <option val="3">Todos</option>
                        <option value="0">Pendiente</option>
                        <option value="1">Aceptado</option>
                        <option value="2">Rechazado</option>
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
                                        data.map((data, index) => (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.institucion}</td>
                                                <td>{data.departamento}</td>
                                                <td>{data.gradoAcademico}</td>
                                                <td>{data.modalidad}</td>
                                                <td>{data.correo}</td>
                                                <td>{data.estado == 0
                                                    ? "Pendiente"
                                                    : data.estado == 1
                                                    ? "Aceptado"
                                                    : "Rechazado"}</td>
                                                <td>{data.titulo}</td>
                                                <td>{data.representante}</td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Lista;