const request = require('supertest');
const app = require('../index.js');

describe('Test API Viatges', () => {

  test('GET / ha de respondre correctament', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /test ha de retornar OK', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });

  test('GET /trips retorna llista', async () => {
    const res = await request(app).get('/trips');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});