require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(toEmail) {
  const mailOptions = {
    from: 'info@hichamsahla.nl',
    to: toEmail,
    subject: 'Nodemailer works! Assignment 1',
    text: 'This is a test email sent with Nodemailer. IT WORKS!',
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info.response);
}

module.exports = {
  sendEmail,
};
