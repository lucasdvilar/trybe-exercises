const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const rescue = require('express-rescue');
const authMiddleware = require('./middlewares/authMiddleware');
const validateProductName = require('./middlewares/validateProductName');
const validateInfos = require('./middlewares/validateInfos');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');
const validateSignUpFields = require('./middlewares/validateSignupFields');

const app = express();
app.use(bodyParser.json());

app.post('/signup', validateSignUpFields, rescue((req, res, next) => {
    try {
        const token = crypto.randomBytes(8).toString('hex');
        res.status(200).json({ token });
    } catch (e) {
        next(e);
    };
}));

app.use(authMiddleware);

app.post('/sales', validateProductName, validateInfos, validateSaleDate, validateWarrantyPeriod, (req, res) => {
    res.status(201).json({ message: 'Sale created successfully!' });
});

app.use((err, _req, res, _next) => {
    res.status(500).json({ error: err.message });
});

app.listen(3001, () => console.log('Listening on 3001'));
