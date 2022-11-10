import nodemailer from "nodemailer";

const emailRegistro = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "a9c0aaf1c3a8fa",
          pass: "ce5ea634d2401d"
        }
      });

      const {correo, representante, titulo} = datos;

      //Enviar email
      const info = await transport.sendMail({
          from : "RUIM 2022",
          to : correo,
          subject : "Estado del registro",
          text : "Estado del regitro",
          html : `<p>${representante}, tu registro de "${titulo}" fue exitoso. Espera más informacion</p>`
      })

      console.log('Mensaje enviado: %s', info.messageId)

};

export default emailRegistro;