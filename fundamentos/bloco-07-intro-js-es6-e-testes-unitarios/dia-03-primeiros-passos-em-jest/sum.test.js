const { describe, it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('the function sum(a,b) returns the sum', () => {
  it('sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('sum(4, "5") returns an error', () => {
    expect(() => {sum()}).toThrow();
  })

  it('sum(4, "5") returns the message "parameters must be numbers"', () => {
    expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'))
  })
})