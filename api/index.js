const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de viatges funcionant 🚀');
});

app.get('/trips', (req, res) => {
  res.json([
    { id: 1, destination: 'Barcelona', days: 3 },
    { id: 2, destination: 'Paris', days: 5 }
  ]);
});

app.get('/test', (req, res) => {
  res.status(200).send('OK');
});

app.post('/trips', (req, res) => {
  res.status(201).json({
    message: 'Viatge creat',
    trip: req.body
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no trobada' });
});

// 🔥 AIXÒ ÉS LA CLAU
module.exports = serverless(app);