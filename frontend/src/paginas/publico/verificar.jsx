import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import clienteAxios from "../../../config/axios.jsx";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { saveAs } from 'file-saver';
const Verificar = () => {
    const [token, setToken] = useState("");
    const [failed, setFailed] = useState(false);
    const [found, setFound] = useState(false);
    function convertToByteArray(input) {
        var sliceSize = 512;
        var bytes = [];
      
        for (var offset = 0; offset < input.length; offset += sliceSize) {
          var slice = input.slice(offset, offset + sliceSize);
      
          var byteNumbers = new Array(slice.length);
      
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
      
          bytes.push(byteArray);
        }
      
        return bytes;
      }
    const handleSave = async (e) =>{
        e.preventDefault();
        try {
            var result = await clienteAxios.post('/ruimMain/buscar-constancia', {
                token: token,
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/pdf'
                }
            });
            console.log(result);
            if(result.data.msg == "No se encontro constancia con ese token"){
                setFailed(true);
            }else{
                setFound(true);
            }
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        validate();
      });
    const validate = () => {
        if (token==""){
            document.getElementById("guardar").disabled=true;
        } else {
            document.getElementById("guardar").disabled=false;
        }
    }
    const handleChange = (e) => {
        setToken(e.target.value)
        setFailed(false);
        setFound(false);
    }
    return(
        <>
            <div className="w-100 d-flex justify-content-start">
                <div class="">
                    <div className="p-5 w-100">
                        <h1 class="w-100 tm-section-title mb-5 text-uppercase tm-color-primary">Verificación de constancias</h1>
                        <h4>Cada constancia incluye un token para ayudar con su verificación. Este token se encuentra en una página extra así como en el correo electrónico enviado al representante. </h4>
                        <Form className="w-75">
                        <Row>
                            <Form.Group>
                                <Form.Label className="text-dark">Token de constancia *</Form.Label>
                                <Form.Control onChange={(e) => handleChange(e)}></Form.Control>
                            </Form.Group>
                        </Row>
                        <Form.Text className="text-muted">
                        Los campos con * deben ser llenados para que se active el botón de enviar.
                    </Form.Text>
                        {failed &&
                        <Alert key="danger" variant="danger">
                                No se ha encontrado la constancia.
                        </Alert> 
                        }
                        {found &&
                        <Alert key="success" variant="success">
                                La constancia se encuentra en el sistema.
                        </Alert> 
                        }
                        <div className="d-flex justify-content-end w-100">
                            <Button className="mt-2 btn-secondary"  onClick={handleSave} id="guardar" disabled="">Enviar</Button>
                        </div>
                    </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verificar;