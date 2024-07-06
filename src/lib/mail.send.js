"use server"
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "aaqifshafi4@gmail.com",
    pass: "hoxs jfzs azuk bdcb",
  },
});



const mailOptions = (mail, location) => ({
  from: "Bus App <aaqifshafi4@gmail.com>", // Sender address
  to: mail, // List of recipients
  subject: "Bus Update", // Subject line
  html: `
    <h1>Bus Arrival Notification</h1>
    <p>Dear Passenger,</p>
    <p>We are pleased to inform you that your bus <strong>B21-s</strong> has left towards <strong>${location}</strong>.</p>
    <p>Arriving in approximately:<strong>45 Minutes</strong></p>
    <p>Thank you for using our bus service. We hope you have a pleasant journey!</p>
    <p>Best Regards,</p>
    <p>Your Bus Service Team</p>
  `, // HTML body
});

export async function sendEmail(mail, location) {
  const info = await transporter.sendMail(mailOptions(mail, location));
  console.log("Message sent: %s", info.messageId);
}

