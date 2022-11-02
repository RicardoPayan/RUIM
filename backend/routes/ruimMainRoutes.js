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
    guardarResumen}
    from "../controllers/ruimMainControllers.js";
const router = express.Router();
//Multer config 
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads/resumenes/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
});

router.get('/', obtenerPaginaInicio);
router.get('/programa', obtenerPaginaPrograma );
router.get('/poster', obtenerPaginaPoster );
router.get('/contacto', obtenerPaginaContacto);
router.get('/ubicacion', obtenerPaginaUbicacion);
router.post('/registro', registrarParticipacion);
router.post('/registro/upload', upload.single('resumen'), guardarResumen);

export default router;