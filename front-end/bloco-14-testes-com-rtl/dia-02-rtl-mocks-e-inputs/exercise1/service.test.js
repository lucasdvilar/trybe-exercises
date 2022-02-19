const service = require('./service');
jest.mock("./service");

afterEach(() => jest.clearAllMocks());

it('Crie uma função que gere um número aleatório', () => {
  service.generateRandomNumber.mockReturnValue(10);
  expect(service.generateRandomNumber()).toBe(10);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
})

it('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
  service.generateRandomNumber.mockImplementationOnce((a, b) => a / b);
  expect(service.generateRandomNumber(10, 2)).toBe(5);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
})

it('Use a mesma função do primeiro exercício', () => {
  service.generateRandomNumber.mockImplementation((a, b, c) => a * b * c);
  expect(service.generateRandomNumber(1, 2, 3)).toBe(6);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);

  service.generateRandomNumber.mockReset();
  service.generateRandomNumber.mockImplementation((a) => 2 * a);
  expect(service.generateRandomNumber(1)).toBe(2);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
})
