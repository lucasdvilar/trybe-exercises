const number = 4;

const generateFactorial = (num) => {
  let total = 1;
  for (let i = 1; i <= num; i += 1) {
    total *= i;
  }

  return total;
}

console.log(generateFactorial(number));