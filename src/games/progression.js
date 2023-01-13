// eslint-disable-next-line import/no-unresolved, import/extensions
import getRandomInt from '../getRandomNumber.js';
// eslint-disable-next-line import/no-unresolved, import/extensions
import gameLogic from '../index.js';

const generateProgression = (startStep, step, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startStep + (step * i));
  }
  return progression;
};
const rule = 'What number is missing in the progression?';
const findMissingNumber = () => {
  const startStep = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progresLength = getRandomInt(5, 10);
  const progression = generateProgression(startStep, step, progresLength);
  const missingNumber = getRandomInt(0, progresLength - 1);
  const correctAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => gameLogic(rule, findMissingNumber);
