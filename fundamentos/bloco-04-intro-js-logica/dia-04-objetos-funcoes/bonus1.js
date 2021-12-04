let numbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function romanNumbersToDecimal(number) {
  let sum = numbers[number[number.length - 1]];
  let current = numbers[number[number.length - 1]];
  for (let i = number.length - 2; i >= 0; i -= 1) {
    let previous = numbers[number[i]];
    if (current > previous) {
      sum -= previous;
    } else {
      sum += previous;
    }
    current = previous;
  }

  return sum;
}

console.log(romanNumbersToDecimal('MMXVIII'));