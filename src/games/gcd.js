// eslint-disable-next-line import/extensions
import getRandomInt from '../getRandomNumber.js';
// eslint-disable-next-line import/no-unresolved, import/extensions
import gameLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);
const findGcd = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};
export default () => gameLogic(rule, findGcd);
