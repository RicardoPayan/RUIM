import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
const ModPrograma = () => {
    const [fileState, setFileState] = useState({
        selectedFile: null
    });
    const handleFileChange = (e) => {
        if (e.target.files[0].type == "image/png"){
            setFileState({selectedFile: e.target.files[0]});
            document.getElementById("guardar").disabled=false;
        } else {
            document.getElementById("guardar").disabled=true;
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
                <h3 className="text-dark">Modificar página del Programa</h3>
                    
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">Archivo del programa</Form.Label>
                            <Form.Control name="poster" onChange = {handleFileChange} type ="file" accept = "image/png" controlId=""/>
                        </Form.Group>
                        <div className="d-flex justify-content-end w-100">
                          <Button id="guardar" className="btn-secondary" onClick={handleFileUpload}>Guardar</Button>
                        </div>
                    
                </Form>
                </Col>
                <Col></Col>
            </div>
        </>
    )
}

export default ModPrograma;