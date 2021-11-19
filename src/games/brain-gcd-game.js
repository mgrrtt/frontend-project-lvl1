/* eslint-disable no-param-reassign */
import { findGCD } from '../utils.js';

const checkGCDAnswer = (userData) => {
  const [first, second] = userData.question.split(' ');

  userData.expected = findGCD(Number(first), Number(second));

  if (userData.expected === Number(userData.answer)) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkGCDAnswer;
