let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let nome = moradores.blocoDois[1].nome;
let lastName = moradores.blocoDois[1].sobrenome;
let floor = moradores.blocoDois[1].andar;
let apartment = moradores.blocoDois[1].apartamento;

console.log(`O morador do bloco 2 de nome ${nome + " " + lastName} mora no ${floor}° andar, apartamento ${apartment} `);