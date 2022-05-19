const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
    const simpsons = JSON.parse(await fs.readFile('./simpsons.json'));
    res.json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
    const { id } = req.params;
    const simpsons = JSON.parse(await fs.readFile('./simpsons.json'));

    const simpsonById = simpsons.find((simpson) => simpson.id === id);

    if (!simpsonById) return res.status(404).json({ message: 'simpson not found' });
    res.status(200).json(simpsonById);
});

app.post('/simpsons', async (req, res) => {
    const { id, name } = req.body;
    const simpsons = JSON.parse(await fs.readFile('./simpsons.json'));

    const idDoesNotExist = simpsons.some((simpson) => simpson.id === id);

    if(idDoesNotExist) return res.status(409).json({ message: 'id already exists' });

    simpsons.push({ id, name });

    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));

    res.status(204).end();
});

app.listen(3000, () => console.log('Listening on 3000'));
