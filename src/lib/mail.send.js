import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "will.breitenberg@ethereal.email",
      pass: "gxW4Vr4Gba4YsPHbQ5",
    },
  });

  export async function sendEmail() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Bus App" <will.breitenberg@ethereal.email>', // sender address
      to: "zargarfaarid@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);