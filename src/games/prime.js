import gameLogic from '../logic.js';
import { getRandomNum } from '../tools.js';

const generateRound = () => {
  const num = getRandomNum(2, 10);
  const question = num;
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) result = 'no';
  }
  return [question, result];
};

const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => gameLogic({ rulesText, generateRound });
export default runGamePrime;
