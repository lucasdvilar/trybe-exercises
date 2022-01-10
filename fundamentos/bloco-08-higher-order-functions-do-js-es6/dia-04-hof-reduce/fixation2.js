const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  if (number > bigger) {
    return number;
  } else {
    return bigger;
  } //ternary operator can also be used
}

const reduceBigger = numbers.reduce(getBigger);

console.log(reduceBigger);