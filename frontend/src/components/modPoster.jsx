import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
const ModPoster = () => {
    const [fileState, setFileState] = useState({
        selectedFile: null
    });
    const [initFileState, setInitFileState] = useState({
        selectedFile: null
    })
    const [saved, setSaved] = useState(false);
    useEffect(() => {
        validate();
      });
      const validate = () => {
        if (fileState===initFileState){
            document.getElementById("guardar3").disabled=true;
        } else {
            document.getElementById("guardar3").disabled=false;
        }
    }
    const handleFileChange = (e) => {
        if (e.target.files[0].type == "image/png"){
            setFileState({selectedFile: e.target.files[0]});
            document.getElementById("guardar3").disabled=false;
        } else {
            document.getElementById("guardar3").disabled=true;
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
    const handleSave = async () => {
        var posterReferencia = await handleFileUpload();
        console.log(posterReferencia);
        var res = await axios.post("http://localhost:4000/api/admin/edit-pagina-poster", {
            referencia: posterReferencia
        });
        setSaved(true);
    }
    return(
        <>
        <div className= "d-flex h-100 w-100 me-5 ms-5 mt-5">
            <Col>
                <Form className="w-100">
                <h3 className="text-dark">Modificar página del Poster</h3>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">Archivo del poster *</Form.Label>
                            <Form.Control name="poster" onChange = {handleFileChange} type ="file" accept = "image/png" controlId=""/>
                        </Form.Group>
                        <Form.Text className="text-muted">
                        Los campos con * deben ser llenados para que se active el botón de guardar.
                    </Form.Text>
                    {saved &&
                        <Alert key="success" variant="success">
                                Se ha guardado exitosamente. Los cambios han sido reflejados en el sitio público.
                        </Alert> 
                        }
                <div className="d-flex justify-content-end w-100">
                    <Button id="guardar3" className="btn-secondary" onClick={handleSave}>Guardar</Button>
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