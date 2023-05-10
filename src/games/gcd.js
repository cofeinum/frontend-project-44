import gameLogic from '../index.js';
import getRandomNum from '../tools.js';

const findGCD = (num1, num2) => {
  let result = num1 <= num2 ? num1 : num2;
  for (let i = result; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i.toString();
      break;
    }
  }
  return result;
};

const generateRound = () => {
  const givenNum1 = getRandomNum();
  const givenNum2 = getRandomNum();

  const result = findGCD(givenNum1, givenNum2);
  const question = `${givenNum1} ${givenNum2}`;
  return [question, result];
};

const rulesText = 'Find the greatest common divisor of given numbers.';

export default () => gameLogic({ rulesText, generateRound });
