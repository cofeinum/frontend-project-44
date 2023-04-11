/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

let name = '';

const generateRandomArr = (arrLength = 0, randomMin = 0, randomMax = 100) => {
  if (randomMax <= randomMin || arrLength < 1) return null;

  const arr = [];
  for (let i = 0; i < arrLength; i += 1) {
    arr[i] = Math.round(Math.random() * (randomMax - randomMin) + randomMin);
  }
  return arr;
};

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const firstGame = (questionsCount = 3) => {
  if (questionsCount < 1) return null;

  const msgOk = 'Correct!';
  const msgError = `'yes' is wrong answer ;(. Correct answer was 'no'.\r\nLet's try again, ${name}!`;
  const randomArr = generateRandomArr(questionsCount);
  let errorTrigger = false;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  randomArr.every((randomArrItem) => {
    console.log(`Question: ${randomArrItem}`);
    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && randomArrItem % 2 === 0) || (answer === 'no' && randomArrItem % 2 === 1)) {
      console.log(msgOk);
    } else {
      console.log(msgError);
      errorTrigger = true;
      return false;
    }

    return true;
  });

  if (errorTrigger === true) {
    return false;
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

const games = () => {
  greetings();
  firstGame();
};

export { games };
