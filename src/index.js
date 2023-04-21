import runGameEven from './games/even.js';
import runGameCalc from './games/calc.js';
import runGameGcd from './games/gcd.js';

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
    default:
      console.log(`No gameName = '${gameName}'.`);
      break;
  }
};
