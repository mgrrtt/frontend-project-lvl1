/* eslint-disable no-param-reassign */

import { findGCD } from '../utils.js';

const checkGCDAnswer = (userData) => {
  const [x, y] = userData.question.split(' ');

  userData.expected = findGCD(Number(x), Number(y));

  if (userData.expected === Number(userData.answer)) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkGCDAnswer;
