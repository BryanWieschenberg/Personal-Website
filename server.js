// server.js (Node.js + Express + Nodemailer Backend)
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3001; // or any preferred port

app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { email, message } = req.body;

  // Setup your transport options with valid credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service
    auth: {
      user: 'bryan.wieschenberg@gmail.com',
      pass: 'TheGuy12!',
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'bryan.wieschenberg@gmail.com',
      subject: 'Personal Website Message',
      text: message,
    });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  