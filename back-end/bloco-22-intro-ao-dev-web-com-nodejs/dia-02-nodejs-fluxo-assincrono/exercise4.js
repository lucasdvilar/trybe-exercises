const fs = require('fs').promises;

const readSimpsons = () => {
    fs.readFile('./simpsons.json', 'utf-8')
        .then((content) => JSON.parse(content).forEach(({ id, name }) => console.log(`${id} - ${name}`)))
        .catch((err) => console.log('Erro:', err.message));
};

readSimpsons();

const readSimpsonById = async (id) => {
    try {
        const content = await fs.readFile('./simpsons.json', 'utf-8');
        const simpson = await JSON.parse(content).find((sim) => {
            const simId = parseInt(sim.id);
            return simId === id;
        });
        if (!simpson) throw new Error('id não encontrado');
        console.log(simpson);
    } catch (e) {
        console.log('Error:', e.message);
    }
};

readSimpsonById(11);

const removeChar10And6 = () => {
    fs.readFile('./simpsons.json', 'utf-8')
        .then((result) => JSON.parse(result).filter((sim) => {
            const simId = parseInt(sim.id);
            return simId !== 10 && simId !== 6;
        }))
        .then((newSimpsons) => newSimpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`)))
        .catch((e) => console.log(e.message));
};

removeChar10And6();

const createNewSimpsonsFile = async () => {
    try {
        const content = await fs.readFile('./simpsons.json', 'utf-8');
        const ids = [1, 2, 3, 4];
        const char1And4 = JSON.parse(content).filter((sim) => {
            const simId = parseInt(sim.id);
            return ids.includes(simId);
        });
        fs.writeFile('./simpsonFamily.json', JSON.stringify(char1And4));
        console.log('New file created');
    } catch (e) {
        console.log(e.message);
    };
};

createNewSimpsonsFile();
