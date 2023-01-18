import readlineSync from 'readline-sync';

const askName = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  return console.log(`Hello, ${userName}!`);
};
export default askName;
