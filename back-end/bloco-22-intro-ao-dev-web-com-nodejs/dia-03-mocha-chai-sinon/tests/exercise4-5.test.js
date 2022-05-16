const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const writeFiles = require('../exercise4-5');

sinon.stub(fs, 'writeFileSync'); //?

describe(('writing status'), () => {
    it('should return "ok" when a function with two parameters is called', () => {
        const response = writeFiles('file.txt', 'Lucas Vilar');
        expect(response).to.be.equals('ok');
    });
});
