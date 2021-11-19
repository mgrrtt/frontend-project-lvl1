import {
  min,
  max,
  maxOperators,
  progressionLength,
  progressionStep,
} from './consts.js';

export const getRandomNumber = () => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const rand = min + Math.random() * (maxOperators - min);

  return operators[Math.floor(rand)];
};

export const getProgression = () => {
  const progression = [getRandomNumber()];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  const rand = min + Math.random() * (progressionLength - min);

  progression[Math.floor(rand)] = '..';

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

export const findGCD = (a, b) => {
  if (b) {
    return findGCD(b, a % b);
  }
  return a;
};
