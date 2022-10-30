import getRandomInt from '../getRandomNumber.js';
import gameLogic from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
};

const primeGame = () => {
  const randomNum = getRandomInt(2, 100);
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const sixthGame = () => {
  gameLogic(rule, primeGame);
};
export default sixthGame;
