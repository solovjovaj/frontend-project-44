import getRandomInt from '../getRandomNumber.js';
import gameLogic from '../index.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, other answer "no"';
const gameEven = () => {
  const randomNum = getRandomInt(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameLogic(rule, gameEven);
