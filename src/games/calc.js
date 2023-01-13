// eslint-disable-next-line import/no-unresolved
import getRandomInt from '../getRandomNumber.js';
// eslint-disable-next-line import/no-unresolved
import gameLogic from '../index.js';

const calc = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Error';
  }
};

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const randomOperatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operator).toString();
  return [question, correctAnswer];
};

const calculate = () => {
  gameLogic(rule, calcGame);
};
export default calculate;
