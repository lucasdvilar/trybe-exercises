const checkBets = (bet, randomNum) => bet === randomNum ? 'Congratulations, you\'ve won' : 'Try again';

const drawing = (bet, callback) => {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  console.log(`O número era ${randomNum}`);
  return callback(bet, randomNum);
}

console.log(drawing(3, checkBets));