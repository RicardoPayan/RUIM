import express from "express";
import path from "path";
import {
    resumenDashboard,
    obtenerRegistros,
    obtenerRegistrosFiltrados,
    obtenerAutores,
    obtenerFechasValidas,
    editarEstadoRegistro,
    editarPaginaInicio,
    editarPaginaContacto,
    editarPaginaUbicacion,
    editarPaginaPoster,
    editarPaginaPrograma,
    editarFechas,
    guardarPrograma,
    descargarPdf,
    sendPdf,
    guardarConstancia
} from "../controllers/ruimAdminControllers.js";
import multer from "multer";
const router = express.Router();


 router.get('/', resumenDashboard);

//Filtros para registros
router.get('/registros-todos', obtenerRegistros);
router.post('/registros-filtrados', obtenerRegistrosFiltrados);
router.post('/obtener-autores',obtenerAutores);
router.get('/obtener-fechas-validas',obtenerFechasValidas);


var storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './uploads/programas/')    
        },
        filename: (req, file, callBack) => {
            callBack(null, file.fieldname + Date.now() + path.extname(file.originalname))
        }
    })
    var upload = multer({
        storage: storage
    });

//Cambiar estado de registro
router.post('/editar-estado', editarEstadoRegistro);



//Edicion de paginas
router.post('/edit-pagina-inicio',editarPaginaInicio);
router.post('/edit-pagina-poster',editarPaginaPoster);
router.post('/edit-pagina-programa',editarPaginaPrograma);
router.post('/edit-pagina-contacto',editarPaginaContacto);
router.post('/edit-pagina-ubicacion',editarPaginaUbicacion);
router.post('/edit-fechas',editarFechas);
router.post('/save-programa', upload.single('programa'), guardarPrograma);

//Descargar pdf con ruta
router.post('/descargar-pdf',descargarPdf);
router.post('/send-pdf',sendPdf);

//Registro de constancias
router.post("/save-constancia", guardarConstancia)
export default router;