import {
  progressionLength,
  progressionStep,
} from './consts.js';

export const getRandomNumber = (min = 1, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[getRandomNumber(0, operators.length - 1)];
};

export const getProgression = () => {
  const progression = [getRandomNumber()];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  progression[getRandomNumber(1, progressionLength - 1)] = '..';

  return progression.join(' ');
};

export const getQuestion = (type) => {
  const questions = {
    even: getRandomNumber(),
    calc: `${getRandomNumber()} ${getRandomOperator()} ${getRandomNumber()}`,
    gcd: `${getRandomNumber()} ${getRandomNumber()}`,
    prime: getRandomNumber(),
    progression: `${getProgression()}`,
  };

  return questions[type];
};

export const findGCD = (x, y) => {
  if (y) {
    return findGCD(y, x % y);
  }

  return x;
};

export const isEven = (number) => number % 2 === 0;

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};
