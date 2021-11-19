/* eslint-disable no-param-reassign */

import { isPrime } from '../utils.js';

const checkPrimeAnswer = (userData) => {
  userData.expected = isPrime(userData.question) ? 'yes' : 'no';

  if (userData.expected === userData.answer) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkPrimeAnswer;
