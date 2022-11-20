import nodemailer from "nodemailer";

const emailConstancia = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {correo, representante, titulo, token} = datos;

    //Enviar email
    const info = await transport.sendMail({
        from: "RUIM 2022",
        to: correo,
        subject : "Constancia",
        text : "Constancia",
        html : `<p>Hola ${representante}, tu constancia de ${titulo} esta lista. </p>
                <p>Tu token de busqueda es: ${token}</p>`
    });

    console.log('Mensaje enviado: %s', info.messageId)

};

export default emailConstancia;