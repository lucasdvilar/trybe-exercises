const service3 = require('./service3');

it('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".', () => {
  service3.fetchDogApi = jest.fn().mockResolvedValue('request success')

  expect(service3.fetchDogApi()).resolves.toBe('request success');
  expect(service3.fetchDogApi).toHaveBeenCalledTimes(1);
})

it('O segundo deve interpretar que a requisição falhou e ter como valor "request failed".', () => {
  service3.fetchDogApi = jest.fn().mockRejectedValue('request failed');

  expect(service3.fetchDogApi()).rejects.toBe('request failed')
  // acho que reseta automaticamente ao criar um novo mock
  expect(service3.fetchDogApi).toHaveBeenCalledTimes(1);
})