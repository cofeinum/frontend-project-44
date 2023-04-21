import gameLogic from '../logic.js';
import { getRandomNum } from '../tools.js';

const generateRound = () => {
  const quantityNumbers = getRandomNum(5, 10);
  const indexUnknownNumber = getRandomNum(5, quantityNumbers);
  const add = getRandomNum(2, 10);
  const start = getRandomNum(0, 99);
  const unknownNumber = start + add * indexUnknownNumber;
  const limit = start + add * quantityNumbers;
  const result = unknownNumber.toString();
  let question = '';
  for (let i = start; i <= limit; i += add) {
    question += (i === unknownNumber) ? '.. ' : `${i} `;
  }

  // const question = `${num1} ${num2}`;
  return [question, result];
};

const rulesText = 'Find the greatest common divisor of given numbers.';

const runGameProgression = () => gameLogic({ rulesText, generateRound });
export default runGameProgression;
