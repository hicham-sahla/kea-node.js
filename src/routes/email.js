// routes/email.js

const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/send-email', async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your email
    to: email,
    subject: 'Test Email',
    text: 'This is a test email sent with Nodemailer.',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
