import gameLogic from '../logic.js';
import { getRandomNum } from '../tools.js';

const generateRound = () => {
  const question = getRandomNum();
  const result = (question % 2 === 0) ? 'yes' : 'no';
  return [question, result];
};

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => gameLogic({ rulesText, generateRound });
export default runGameEven;
