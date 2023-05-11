import gameLogic from '../index.js';
import getRandomNum from '../tools.js';

const getRandomSign = (arrSigns = ['-', '+', '*']) => arrSigns[getRandomNum(0, arrSigns.length - 1)];

const calcResult = { // example c = calcResult['+'](a, b);
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const givenNum1 = getRandomNum();
  const givenNum2 = getRandomNum();
  const sign = getRandomSign();
  const question = `${givenNum1} ${sign} ${givenNum2}`;
  const result = calcResult[sign](givenNum1, givenNum2).toString();
  return [question, result];
};

const rulesText = 'What is the result of the expression?';

export default () => gameLogic(rulesText, generateRound);
