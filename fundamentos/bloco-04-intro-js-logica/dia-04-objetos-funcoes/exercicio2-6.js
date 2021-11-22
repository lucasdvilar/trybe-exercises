function summation(number) {
  let summation = 0;

  for (let i = 1; i <= number; i += 1) {
    summation += i;
  };

  return summation;
};

console.log(summation(5));