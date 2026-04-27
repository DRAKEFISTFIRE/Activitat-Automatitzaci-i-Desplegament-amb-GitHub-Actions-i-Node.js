const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

// Ruta principal API
app.get('/', (req, res) => {
  res.send('API de viatges funcionant 🚀');
});

// Rutes
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

module.exports = serverless(app);