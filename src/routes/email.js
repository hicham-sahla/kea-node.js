// routes/email.js
require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/send-email', async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'info@hichamsahla.nl',
    to: email,
    subject: 'Nodemailer works! Assignment 1',
    text: 'This is a test email sent with Nodemailer. IT WORKS!',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.redirect('/');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
