import getRandomInt from '../getRandomNumber.js';
import gameLogic from '../index.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, other answer "no"';
const findEven = () => {
  const randomNum = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [`${randomNum}`, correctAnswer];
};

export default () => gameLogic(rule, findEven);
