import runGameEven from './games/even.js';
import runGameCalc from './games/calc.js';
import runGameGcd from './games/gcd.js';
import runGameProgression from './games/progression.js';
import runGamePrime from './games/prime.js';

export default (gameName) => {
  switch (gameName) {
    case 'even':
      runGameEven();
      break;
    case 'calc':
      runGameCalc();
      break;
    case 'gcd':
      runGameGcd();
      break;
    case 'progression':
      runGameProgression();
      break;
    case 'prime':
      runGamePrime();
      break;
    default:
      console.log(`No gameName = '${gameName}'.`);
      break;
  }
};
