import gameLogic from '../index.js';
import getRandomNum from '../tools.js';

const isEven = (question) => (!(question % 2));

const generateRound = () => {
  const question = getRandomNum();
  const result = isEven(question) ? 'yes' : 'no';
  return [question, result];
};

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameLogic(rulesText, generateRound);
