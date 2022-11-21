import express from "express";
import multer from "multer";
import path from "path";
import {
    obtenerPaginaInicio,
    obtenerPaginaUbicacion,
    obtenerPaginaPrograma,
    obtenerPaginaContacto,
    obtenerPaginaPoster,
    registrarParticipacion,
    buscarConstancia,
    guardarResumen}
    from "../controllers/ruimMainControllers.js";
const router = express.Router();
//Multer config 
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads/resumenes/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname +Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
});

router.post('/', obtenerPaginaInicio);
router.post('/programa', obtenerPaginaPrograma );
router.post('/poster', obtenerPaginaPoster );
router.post('/contacto', obtenerPaginaContacto);
router.post('/ubicacion', obtenerPaginaUbicacion);
router.post('/registro', registrarParticipacion);
router.post('/buscar-constancia', buscarConstancia);
router.post('/registro/upload', upload.single('resumen'), guardarResumen);

export default router;