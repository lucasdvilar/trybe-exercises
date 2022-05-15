const readline = require('readline-sync');

const scripts = [
    { name: 'IMC - 1', path: './imc.js' },
    { name: 'Velocidade Média - 2', path: './velocidade.js' },
    { name: 'Sorteio - 3', path: './sorteio.js' },
];

scripts.forEach(scr => {
    console.log(scr.name);
});

const scriptSelecionado = readline.questionInt('Qual script? ');

const script = scripts[scriptSelecionado - 1];

require(script.path);
