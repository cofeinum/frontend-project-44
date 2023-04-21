import gameLogic from '../logic.js';
import { getRandomNum, getRandomSign, calcResult } from '../tools.js';

const generateRound = () => {
  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();
  const randomSign = getRandomSign();
  const question = `${randomNum1} ${randomSign} ${randomNum2}`;
  const result = calcResult[randomSign](randomNum1, randomNum2).toString();
  return [question, result];
};

const rulesText = 'What is the result of the expression?';

const runGameCalc = () => gameLogic({ rulesText, generateRound });
export default runGameCalc;
