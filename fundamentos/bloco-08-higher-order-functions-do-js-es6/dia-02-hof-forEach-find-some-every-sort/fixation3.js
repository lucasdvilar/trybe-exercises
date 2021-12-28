const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  const fiveLettersName = array.find((name) => name.length === 5);

  return fiveLettersName;
}

console.log(findNameWithFiveLetters(names));