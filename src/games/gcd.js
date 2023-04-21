import gameLogic from '../logic.js';
import { getRandomNum } from '../tools.js';

const generateRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  let result = num1 <= num2 ? num1 : num2;
  for (let i = result; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i.toString();
      break;
    }
  }

  const question = `${num1} ${num2}`;
  return [question, result];
};

const rulesText = 'Find the greatest common divisor of given numbers.';

const runGameGcd = () => gameLogic({ rulesText, generateRound });
export default runGameGcd;
