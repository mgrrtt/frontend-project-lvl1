/* eslint-disable no-param-reassign */

import { isEven } from '../utils.js';

const checkEvenAnswer = (userData) => {
  userData.expected = isEven(userData.question) ? 'yes' : 'no';

  if (userData.expected === userData.answer) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkEvenAnswer;
