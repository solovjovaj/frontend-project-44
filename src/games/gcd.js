
import getRandomInt from '../getRandomNumber.js';
import makeGameLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);
const findGcd = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};
export default () => makeGameLogic(rule, findGcd);
