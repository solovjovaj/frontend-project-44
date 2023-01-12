// eslint-disable-next-line import/extensions
import getRandomInt from '../getRandomNumber.js';
// eslint-disable-next-line import/extensions
import gameLogic from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = () => {
  const randomNum = getRandomInt(2, 100);
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => gameLogic(rule, gamePrime);
