const request = require('supertest');
const express = require('express');
const setRoutes = require('../routes');

const app = express();
app.use(express.json());
setRoutes(app);

describe('POST /api/data', () => {
    it('should return posted data successfully', async () => {
        const sampleData = { name: 'Test', value: 123 };
        const response = await request(app)
            .post('/api/data')
            .send(sampleData)
            .expect(200);

        expect(response.text).toBe('Data posted successfully');
    });
});