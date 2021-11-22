function mostRepeatedInteger(array) {
  let repetitions = 0;
  let number = array[0];
  
  for (let i = 0; i < array.length; i += 1) {
    let currentRepetitions = 0;
    for (let checking = 0; checking < array.length; checking += 1) {
      if (array[i] === array[checking]) {
        currentRepetitions += 1;
      };
    };

    if (currentRepetitions > repetitions) {
      repetitions = currentRepetitions;
      number = array[i];
    };
  };

  return number;
};

console.log(mostRepeatedInteger([2, 3, 2, 5, 8, 2, 3]));