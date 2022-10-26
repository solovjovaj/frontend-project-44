// eslint-disable-next-line import/extensions
import getRandomInt from '../getRandomNumber.js';
// eslint-disable-next-line import/no-unresolved, import/extensions
import gameLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  while (a != 0 & b != 0) {
    if (a > b) {
      a %=b;
    } else {
      b %= a;
    }
  }
  return (a + b);
};

const gcdGame = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const fourthGame = () => {
  gameLogic(rule, gcdGame);
};
export default fourthGame;
