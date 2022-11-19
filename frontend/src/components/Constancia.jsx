import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { jsPDF } from "jspdf";
import domtoimage from 'dom-to-image';

function Constancia(){
    useEffect(() => {
        createPDF();
      }, []);
    const createPDF = () => {
        const input = document.getElementById('print');
        const pdf = new jsPDF('l');
        if (pdf) {
            domtoimage.toPng(input)
            .then(
                imgData=>{
                    pdf.addImage(imgData, 'PNG', 0, -30);
                    pdf.save("download.pdf");
                }
            )
        }
    }
    return(
        <div className="w-100 h-100" style={{opacity: 100}}>
        <div id="print" className="h-100 d-flex flex-column align-items-center justify-content-center" style={{width: 1123, height: 794, backgroundImage: "url(https://theme.zdassets.com/theme_assets/261010/0d0f04d045b80bfc06b82fd855d0e61fac6470d4.png)"}}>
            <div className="w-100 p-5">
            <div className="mb-5"><center><h4>Enrique A. Giottonini Herrera, Miguel Sebastian Navarro Islas, Gabriel Alberto Garcia Mireles</h4></center></div>
            <div className="mt-3"><center><h5>Por su cartel EFECTIVIDAD DE LA GAMIFICACIÓN EN LA INGENIERÍA DE SOFTWARE: FASE DE PRUEBAS presentada en el marco del IX Congreso Estatal de Ciencias Exactas y Naturales realizado del 26 al 28 de mayo del 2022.</h5></center>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Constancia;