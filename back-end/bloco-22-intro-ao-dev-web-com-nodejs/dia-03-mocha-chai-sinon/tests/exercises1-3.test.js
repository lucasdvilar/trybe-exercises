const { expect } = require('chai');
const exercise = require('../exercises1-3.js');

describe('show number condition', () => {
    it('it should be "negativo" if n < 0', () => {
        const result = exercise(-1);
        expect(result).to.be.equals('negativo');
    });
    it('it should be "positivo" if n > 0', () => {
        const result = exercise(1);
        expect(result).to.be.equals('positivo');
    });
    it('it should be "neutro" if n = 0', () => {
        const result = exercise(0);
        expect(result).to.be.equals('neutro');
    });
    it('it should require a number if n !== Number ', () => {
        const result = exercise('a');
        expect(result).to.be.equals('o valor deve ser um número');
    });
});
