import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
const ModPoster = () => {
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
        <div className= "d-flex h-100 w-100 me-5 ms-5 mt-5">
            <Col>
                <Form className="w-100">
                <h3 className="text-dark">Modificar página del Poster</h3>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">Archivo del poster</Form.Label>
                            <Form.Control name="poster" onChange = {handleFileChange} type ="file" accept = "application/pdf" controlId=""/>
                        </Form.Group>
                <div className="d-flex justify-content-end w-100">
                    <Button className="btn-secondary">Guardar</Button>
                </div>
                </Form>
                
            </Col>
            <Col>
            </Col>
            </div>
        </>
    )
}

export default ModPoster;