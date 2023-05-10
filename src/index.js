import readlineSync from 'readline-sync';

const runGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default (gameData) => {
  const userName = runGreeting();
  console.log(gameData.rulesText);

  for (let i = 0; i < 3; i += 1) {
    const [question, result] = gameData.generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\r\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
