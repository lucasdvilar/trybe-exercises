const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  const divisible = array.find((number) => number % 15 === 0);

  return divisible;
}

console.log(findDivisibleBy3And5(numbers))