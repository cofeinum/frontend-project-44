import gameLogic from '../logic.js';
import { getRandomNum, getRandomSign, calcResult } from '../tools.js';

const generateRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const sign = getRandomSign();
  const question = `${num1} ${sign} ${num2}`;
  const result = calcResult[sign](num1, num2).toString();
  return [question, result];
};

const rulesText = 'What is the result of the expression?';

const runGameCalc = () => gameLogic({ rulesText, generateRound });
export default runGameCalc;
