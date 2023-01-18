
import getRandomInt from '../getRandomNumber.js';
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
const findPrime = () => {
  const randomNum = getRandomInt(2, 100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [`${randomNum}`, correctAnswer];
};
export default () => gameLogic(rule, findPrime);
