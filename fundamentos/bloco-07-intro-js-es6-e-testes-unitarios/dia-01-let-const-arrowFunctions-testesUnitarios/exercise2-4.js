const searchForX = (string) => {
  const mainString = 'Tryber x aqui!';

  for (let i = 0; i < mainString.length; i += 1) {
    if (mainString[i] === 'x') {
      const newString = mainString.replace('x', string)
      return newString;
    }
  }
}

const returnedString = searchForX('Lucas')

const skills = ['Git', 'Unix', 'HTML', 'CSS', 'JS'];

const putItAllTogether = (string) => {
  const finalString = `${string} Minhas cinco principais habilidades são:
${skills.sort()} #goTrybe`;

  return finalString;
}

console.log(putItAllTogether(returnedString));