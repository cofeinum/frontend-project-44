import readlineSync from 'readline-sync';

const runGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const getRandomNum = (randomMin = 1, randomMax = 10) => {
  if (randomMax <= randomMin) return null;
  return Math.round(Math.random() * (randomMax - randomMin) + randomMin);
};

const getRandomSign = (arrSigns = ['-', '+', '*']) => arrSigns[getRandomNum(0, 2)];

const calcResult = { // example c = calcResult['+'](a, b);
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
};

export {
  runGreeting, getUserAnswer, getRandomNum, getRandomSign, calcResult,
};
