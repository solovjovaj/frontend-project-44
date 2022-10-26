import readlineSync from 'readline-sync';

export const firstGame = () => {
  // eslint-disable-next-line no-param-reassign
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const secondGame = (userName) => {
  const expectedEvenAnswer = 'yes';
  const expectedOddAnswer = 'no';
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(100);
    const randomQuestion = `Question: ${randomNumber}`;
    console.log(randomQuestion);
    if (randomNumber % 2 === 0) {
      if (readlineSync.question('Your answer:') === expectedEvenAnswer) {
        console.log('Correct!');
      } else return `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
    } if (randomNumber % 2 !== 0) {
      if (readlineSync.question('Your answer:') === expectedOddAnswer) {
        console.log('Correct!');
      } else return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    }
  } return `Congratulations, ${userName}!`;
};
