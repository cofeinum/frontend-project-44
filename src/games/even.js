import gameLogic from '../index.js';
import getRandomNum from '../tools.js';

const isEven = (question) => (question % 2 ? 'no' : 'yes');

const generateRound = () => {
  const question = getRandomNum();
  const result = isEven(question);
  return [question, result];
};

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameLogic({ rulesText, generateRound });
