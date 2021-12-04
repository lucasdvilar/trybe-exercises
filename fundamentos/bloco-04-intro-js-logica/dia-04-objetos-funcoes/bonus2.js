function arrayOfNumbers(vector) {
  let evenList = [];

  for (let i = 0; i < vector.length; i += 1) {
    for (let i2 = 0; i2 < vector[i].length; i2 += 1) {
      if (vector[i][i2] % 2 === 0) {
        evenList.push(vector[i][i2]);
      };
    };
  };

  return "pares: " + evenList;
};

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));