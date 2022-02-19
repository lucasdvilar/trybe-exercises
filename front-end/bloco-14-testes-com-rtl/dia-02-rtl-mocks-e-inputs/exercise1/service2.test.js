const service2 = require('./service2');

it('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.', () => {
  const turnToLowercase = jest.spyOn(service2, 'turnUppercase').mockImplementation((string) => string.toLowerCase());

  expect(turnToLowercase('LUCAS')).toBe('lucas');
})

it('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
  const getLastLetter = jest.spyOn(service2, 'getFirstLetter').mockImplementation((string) => string[string.length - 1]);

  expect(getLastLetter('lucas')).toBe('s');
})

it('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
  const concatThreeStrings = jest.spyOn(service2, 'concatTwoStrings').mockImplementation((s1, s2, s3) => s1 + s2 + s3);

  expect(concatThreeStrings('lucas', 'dantas', 'vilar')).toBe('lucasdantasvilar');
})

it('Após criar os testes, restaure a implementação da primeira função.', () => {
  service2.turnUppercase.mockRestore();

  expect(service2.turnUppercase('lucas')).toBe('LUCAS');
})