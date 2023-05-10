import gameLogic from '../index.js';
import getRandomNum from '../tools.js';

const createProgression = () => {
  const minQuantityNumbers = 5;
  const maxQuantityNumbers = 10;
  const minIndexMissingNumber = 0;
  const minAddedNumber = 2;
  const maxAddedNumber = 10;
  const minInitialNumber = 0;
  const maxInitialNumber = 99;

  const quantityNumbers = getRandomNum(minQuantityNumbers, maxQuantityNumbers);
  const indexMissingNumber = getRandomNum(minIndexMissingNumber, quantityNumbers);
  const addedNumber = getRandomNum(minAddedNumber, maxAddedNumber);
  const initialNumber = getRandomNum(minInitialNumber, maxInitialNumber);
  const finalNumber = initialNumber + addedNumber * quantityNumbers;

  const progressionArr = [];
  for (let i = initialNumber; i <= finalNumber; i += addedNumber) {
    progressionArr.push(i);
  }
  const missingNumberStr = progressionArr[indexMissingNumber].toString();
  progressionArr[indexMissingNumber] = '..';
  const progressionStr = progressionArr.join(' ');

  return [progressionStr, missingNumberStr];
};

const generateRound = () => {
  const [question, result] = createProgression();
  return [question, result];
};

const rulesText = 'What number is missing in the progression?';

export default () => gameLogic({ rulesText, generateRound });
