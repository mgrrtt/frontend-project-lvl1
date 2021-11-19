import {
  min,
  max,
  maxOperators,
} from './consts.js';

export const getRandomNumber = () => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const rand = min + Math.random() * (maxOperators + 1 - min);

  return operators[Math.floor(rand)];
};

export const getQuestion = (type) => {
  const questions = {
    even: getRandomNumber(),
    calc: `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`,
    gcd: `${getRandomNumber()} ${getRandomNumber()}`,
    prime: getRandomNumber(),
    progression: `${getRandomNumber()}`,
  };

  return questions[type];
};

export const findGCD = (a, b) => {
  if (b) {
    return findGCD(b, a % b);
  }
  return a;
};
