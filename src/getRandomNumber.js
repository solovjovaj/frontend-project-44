// eslint-disable-next-line import/prefer-default-export
function getRandomInt(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export default getRandomInt;
