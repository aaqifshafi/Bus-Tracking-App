import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
    service:'gmail',
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "aaqifshafi4@gmail.com",
      pass: "hoxs jfzs azuk bdcb",
    },
  });

  const mailOptions = {
    from: "Bus App <aaqifshafi4@gmail.com>", // Sender address
    to: "huzaifh02@gmail.com", // List of recipients
    subject: "Bus Update", // Subject line
    html:  `
    <h1>Bus Arrival Notification</h1>
    <p>Dear Passenger,</p>
    <p>We are pleased to inform you that your bus <strong>B21-s</strong> has arrived at <strong>Bemina</strong>.</p>
    <p>Arrival Time: <strong>10 A.M</strong></p>
    <p>Thank you for using our bus service. We hope you have a pleasant journey!</p>
    <p>Best Regards,</p>
    <p>Your Bus Service Team</p>
  `, // Plain text body
  };

  

  async function sendEmail() {
    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);