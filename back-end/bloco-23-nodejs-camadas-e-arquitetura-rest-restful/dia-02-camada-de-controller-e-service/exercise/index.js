require('dotenv').config();
const express = require('express');
const validateCep = require('./middlewares/validateCep');
const httpStatus = require('./helpers/httpStatus');
const cepController = require('./controllers/cep');
const validateInfo = require('./middlewares/validateInfo');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
    res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', validateCep, cepController.getCepInfo);

app.post('/cep', validateInfo, cepController.addCep);

app.use((err, _req, res, _next) => {
    res.status(httpStatus[err.code]).json({ error: { code: err.code, message: err.message } });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
