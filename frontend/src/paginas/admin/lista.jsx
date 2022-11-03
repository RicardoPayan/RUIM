import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import axios from "axios";
import Title from '../../components/title.jsx'
function Lista () {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const response = await axios.get("http://localhost:4000/api/admin/registros");
        setData(response.data);
        console.log(response.data);
        console.log(data);
        setBusy(false);
    };
    return(
        <>
            <Title title="Lista de Registros"/>
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