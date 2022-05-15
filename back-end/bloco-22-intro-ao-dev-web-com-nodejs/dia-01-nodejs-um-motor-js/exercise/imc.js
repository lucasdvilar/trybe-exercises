const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

const imc = peso / altura ** 2;
const situacoes = {
    magreza: {
        imcMax: 18.5, 
    },
    'peso normal': {
        imcMin: 18.5,
        imcMax: 24.9,
    },
    'sobrepeso': {
        imcMin: 25.0,
        imcMax: 29.9,
    },
    'obesidade 1': {
        imcMin: 30.0,
        imcMax: 34.9,
    },
    'obesidade 2': {
        imcMin: 35.0,
        imcMax: 39.9,
    },
    'obesidade 3 e 4': {
        imcMin: 40.0,
    },
};

const graus = Object.keys(situacoes);
const resultado = graus.find((grau) => imc < situacoes[grau].imcMax && imc > situacoes[grau].imcMin);

console.log('IMC:', imc.toFixed(2));
console.log('Diagnóstico:', resultado);
