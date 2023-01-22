import getRandomInt from '../getRandomNumber.js';
import makeGameLogic from '../index.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, other answer "no"';
const minNumber = 1;
const maxnumber = 100;
const findEven = () => {
  const randomNum = getRandomInt(minNumber, maxnumber);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [`${randomNum}`, correctAnswer];
};

export default () => makeGameLogic(rule, findEven);