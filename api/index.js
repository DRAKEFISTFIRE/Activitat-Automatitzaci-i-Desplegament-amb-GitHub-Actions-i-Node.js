const express = require('express');
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
  res.send('OK');
});

module.exports = app;