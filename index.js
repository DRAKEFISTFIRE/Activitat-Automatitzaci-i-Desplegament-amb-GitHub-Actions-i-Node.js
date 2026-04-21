const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('API de viatges funcionant 🚀');
});

// Endpoint d'exemple (viatges)
app.get('/trips', (req, res) => {
  res.json([
    { id: 1, destination: 'Barcelona', days: 3 },
    { id: 2, destination: 'Paris', days: 5 }
  ]);
});

// Endpoint per testing
app.get('/test', (req, res) => {
  res.status(200).send('OK');
});

// Endpoint POST exemple
app.post('/trips', (req, res) => {
  const trip = req.body;
  res.status(201).json({
    message: 'Viatge creat',
    trip
  });
});

// Maneig d'errors simple
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no trobada' });
});

// Només escolta si no està en mode test
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor escoltant a http://localhost:${PORT}`);
  });
}

// Export per testing
module.exports = app;