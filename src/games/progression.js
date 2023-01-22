
import getRandomInt from '../getRandomNumber.js';
import makeGameLogic from '../index.js';

const generateProgression = (startStep, step, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startStep + (step * i));
  }
  return progression;
};
const rule = 'What number is missing in the progression?';
const minStartStep = 1;
const maxStartStep = 10;
const minStepLength = 1;
const maxStepLength = 10;
const minProgressionLength = 5;
const maxProgressionLength = 10;
const findMissingNumber = () => {
  const startStep = getRandomInt(minStartStep, maxStartStep);
  const step = getRandomInt(minStepLength, maxStepLength);
  const progresLength = getRandomInt(minProgressionLength, maxProgressionLength);
  const progression = generateProgression(startStep, step, progresLength);
  const missingNumber = getRandomInt(0, progresLength - 1);
  const correctAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => makeGameLogic(rule, findMissingNumber);
