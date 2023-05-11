import readlineSync from 'readline-sync';

const runGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default (rulesText, generateRound) => {
  const userName = runGreeting();
  const countRounds = 3;
  console.log(rulesText);

  for (let i = 0; i < countRounds; i += 1) {
    const [question, result] = generateRound();
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
