const searchEmployee = require('./bonus');

test('searchEmployee exists and is a function', () => {
  expect(typeof(searchEmployee)).toBe('function');
})

test('returns the result of the search by id', () => {
  expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  expect((searchEmployee('1256-4', 'specialities'))).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
})

test('searchEmployee("1256-5", "firstName") returns the error "ID não identificada"', () => {
  expect(() => searchEmployee('1256-5', 'firstName')).toThrow();
  expect(() => searchEmployee('1256-5', 'firstName')).toThrowError(new Error('ID não identificada'));
})

test('searchEmployee("4456-4", "petim") returns the error "Informação indisponível"', () => {
  expect(() => searchEmployee('4456-4', 'petim')).toThrow();
  expect(() => searchEmployee('4456-4', 'petim')).toThrowError(new Error('Informação indisponível'));
})
