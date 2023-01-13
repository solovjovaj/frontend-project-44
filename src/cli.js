import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
const askName = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  return console.log(`Hello, ${userName}!`);
};
export default askName;
