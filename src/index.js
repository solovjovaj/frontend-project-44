// eslint-disable-next-line no-unused-vars
import readlineSync from 'readline-sync';

const gameLogic = (rule, gameFunction) => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
  // eslint-disable-next-line no-console
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameFunction();
    // eslint-disable-next-line no-console
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      // eslint-disable-next-line no-console
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    // eslint-disable-next-line no-console
    console.log('Correct!');
  }
  // eslint-disable-next-line no-console
  console.log(`Congratulations, ${userName}!`);
};
export default gameLogic;
