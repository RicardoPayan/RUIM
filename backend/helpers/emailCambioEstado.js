import nodemailer from "nodemailer";

const emailCambioEstado = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {correo, representante, titulo, nuevoEstado} = datos;


    //Enviar email
    const info = await transport.sendMail({
        from: "RUIM 2022",
        to: correo,
        subject : "Estado de registro",
        text : "Estado de registro",
        html : `<p>Hola ${representante}, tu registro de ${titulo} ha sido ${nuevoEstado === "1" ? "Aceptado" : "Rechazado" }</p>`
    });

    console.log('Mensaje enviado: %s', info.messageId)

};

export default emailCambioEstado;