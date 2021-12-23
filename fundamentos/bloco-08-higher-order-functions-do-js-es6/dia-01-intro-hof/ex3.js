const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (rightAnswers, answers) => {
  let total = 0;
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === 'N.A') {
      continue;
    }
    if (answers[i] === rightAnswers[i]) {
      total += 1;
    } else {
      total -= 0.5;
    }
  }

  return total;
}

const result = (rightAnswers, answers, callback) => callback(rightAnswers, answers);

console.log(result(rightAnswers, answers, checker));