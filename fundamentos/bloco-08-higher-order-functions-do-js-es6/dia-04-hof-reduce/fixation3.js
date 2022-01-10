const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvens = (acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr;
  } else {
    return acc;
  }
}

const reduceSumEvens = numbers.reduce(sumEvens, 0);

console.log(reduceSumEvens);