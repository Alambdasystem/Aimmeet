const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email template routes

// ...

// Email generation route
router.post('/generate', async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to: to,
    from: 'your-email@example.com',
    subject: subject,
    text: text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});

module.exports = router;