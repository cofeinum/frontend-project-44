/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export { showGreetings };
