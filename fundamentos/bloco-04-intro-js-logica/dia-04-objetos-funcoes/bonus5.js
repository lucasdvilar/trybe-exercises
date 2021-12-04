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

for (let key in moradores.blocoUm) {
  let nome = moradores.blocoUm[key].nome;
  let lastName = moradores.blocoUm[key].sobrenome;
  console.log(nome + " " + lastName);
};

for (let key in moradores.blocoDois) {
  let nome = moradores.blocoDois[key].nome;
  let lastName = moradores.blocoDois[key].sobrenome;
  console.log(nome + " " + lastName);
};