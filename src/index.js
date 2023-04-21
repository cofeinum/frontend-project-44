import runGameEven from './games/even.js';
import runGameCalc from './games/calc.js';

export default (gameName) => {
  switch (gameName) {
    case 'even':
      runGameEven();
      break;
    case 'calc':
      runGameCalc();
      break;
    default:
      console.log(`No gameName = '${gameName}'.`);
      break;
  }
};
