function checksWordEnding(word, ending) {
  let status = true;

  for (let i = 0; i < ending.length; i += 1) {
    if (ending[i] !== word[word.length - ending.length + i]) {
      status = false
    }
  }

  return status;
};

console.log(checksWordEnding("trybe", "be"));