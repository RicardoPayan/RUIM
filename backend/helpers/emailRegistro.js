import nodemailer from "nodemailer";

const emailRegistro = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {correo, representante, titulo} = datos;

    //Enviar email
    const info = await transport.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria ",
        to: correo,
        subject : "Comprueba tu cuenta en APV",
        text : "Comprueba tue cuenta en APV",
        html : `<p>Hola ${representante}, tu registro de ${titulo}</p>`
    });

    console.log('Mensaje enviado: %s', info.messageId)

};

export default emailRegistro;