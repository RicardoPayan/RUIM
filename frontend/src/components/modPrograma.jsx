import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
const ModPrograma = () => {
    const [file, setFileState] = useState("");
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
    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-2 mt-5">
                <Form className="w-100 pe-5 ps-5">
                    <center><h1>Modificar página para el Prorama</h1></center>
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Archivo del programa</Form.Label>
                            <Form.Control name="poster" onChange = {handleFileChange} type ="file" accept = "application/pdf" controlId=""/>
                        </Form.Group>
                    </Row>
                    
                    <center><Button>Guardar</Button></center>
                </Form>
            </div>
        </>
    )
}

export default ModPrograma;