// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'apple', 'orange'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['item1', 'item2', 'item3'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));