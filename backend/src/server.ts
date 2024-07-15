import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { addSubscriber } from './mailService';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  console.log(`Received subscription request for email: ${email}`);

  try {
    const response = await addSubscriber(email);
    console.log(`Mailchimp response: ${JSON.stringify(response)}`);
    res.status(200).send({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).send({ message: 'Failed to subscribe.' });
  }
});

// Test endpoint
app.post('/api/test', (req, res) => {
  res.status(200).send({ message: 'Test endpoint works!' });
});

app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'Test endpoint works!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
