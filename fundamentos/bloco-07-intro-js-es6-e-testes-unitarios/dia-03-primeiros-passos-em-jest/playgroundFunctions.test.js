const functions = require('./playgroundFunctions');

describe('testing encode and decode', () => {
  it('tests if typeof(encode) and typeof(decode) are functions', () => {
    expect(typeof(functions.encode)).toBe('function');
    expect(typeof(functions.decode)).toBe('function');
  })

  it('tests if encode("aeiou") returns "12345"', () => {
    expect(functions.encode('aeiou')).toBe('12345');
  })

  it('tests if decode("12345") returns "aeiou"', () => {
    expect(functions.decode('12345')).toBe('aeiou');
  })

  it('tests if the others letters/numbers aren\'t converted', () => {
    expect(functions.encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(functions.decode('67890')).toBe('67890');
  })

  it('tests if the returned string has the same length of the string passed as a parameter', () => {
    expect(functions.encode('hi').length).toBe(2);
    expect(functions.decode('testing').length).toBe(7);
  })
})