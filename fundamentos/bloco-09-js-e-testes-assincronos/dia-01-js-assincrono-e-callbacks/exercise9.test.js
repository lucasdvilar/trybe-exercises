// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Lucas', ((error, message) => {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    }))
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', ((error, message) => {
      expect(message).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
      done();
    }))
  });
});