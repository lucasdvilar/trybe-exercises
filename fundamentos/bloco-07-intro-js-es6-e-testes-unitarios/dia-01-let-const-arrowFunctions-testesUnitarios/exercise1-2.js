const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(oddsAndEvens.sort());
// Seu código aqui.
const sortArray = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  return `Os números ${sortedArray.toString()} se encontram ordenados de forma crescente!`
}

console.log(sortArray(oddsAndEvens)); // será necessário alterar essa linha 😉