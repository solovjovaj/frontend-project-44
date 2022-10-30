// eslint-disable-next-line import/no-unresolved
import getRandomInt from '../getRandomNumber.js';
// eslint-disable-next-line import/no-unresolved
import gameLogic from '../index.js';

const makeProgression = (startNumber, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + (step * i));
  }
  return progression;
}

const rule = 'What number is missing in the progression?';

const progressionGame = () => {
  const startNumber = getRandomInt(0, 100);
  const step = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 10); 
  const progression = makeProgression(startNumber, step, progressionLength);
  const hiddenNumberPosition = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenNumberPosition].toString();
  progression[hiddenNumberPosition] = '..';
  const question = progression.join(" ");
  return [question, correctAnswer];
};

const fifthGame = () => {
  gameLogic(rule, progressionGame);
};
export default fifthGame;