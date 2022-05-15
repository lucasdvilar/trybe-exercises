const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distância em metros? ');
const tempo = readline.questionInt('Em quanto tempo (em segundos) essa distância foi percorrida? ');

const velocidadeMedia = distancia / tempo;

console.log(`${velocidadeMedia.toFixed(2)} m/s`);
