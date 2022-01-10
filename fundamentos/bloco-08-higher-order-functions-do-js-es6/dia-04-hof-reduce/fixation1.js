const numbers = [50, 85, -30, 3, 15];

const getBigger = (array) => {
  let bigger = array[0];

  for (let number of array) {
    if (number > bigger) {
      bigger = number;
    }
  }

  return bigger;
}

console.log(getBigger(numbers));