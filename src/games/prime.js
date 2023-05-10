import gameLogic from '../index.js';
import getRandomNum from '../tools.js';

const isNumPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const generateRound = () => {
  const minRandomNum = 2;
  const maxRandomNum = 10;
  const designatedNum = getRandomNum(minRandomNum, maxRandomNum);
  const question = designatedNum;
  const result = isNumPrime(designatedNum);
  return [question, result];
};

const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameLogic({ rulesText, generateRound });
