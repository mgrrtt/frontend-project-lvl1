/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

import {
  min,
  max,
  evenDescription,
  evenAnswer,
  evenCorrect,
  evenQuestion,
  evenCongrats,
  evenFailure,
} from './consts.js';

const getRandomNumber = () => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

const checkAnswer = (userData) => {
  userData.number % 2 === 0 ? userData.expected = 'yes' : userData.expected = 'no';

  if (userData.expected === userData.answer) {
    userData.correctCount += 1;

    return true;
  }
  return false;
};

const startBrainEvenGame = (name) => {
  const userData = {
    correctCount: 0,
    number: getRandomNumber(),
    expected: '',
    answer: '',
  };

  console.log(evenDescription(userData.number));

  userData.answer = readlineSync.question(evenAnswer);

  while (checkAnswer(userData) && userData.correctCount < 3) {
    console.log(evenCorrect);

    userData.number = getRandomNumber();

    console.log(evenQuestion(userData.number));

    userData.answer = readlineSync.question(evenAnswer);
  }

  if (userData.correctCount === 3) {
    console.log(evenCongrats(name));

    return;
  }
  console.log(evenFailure(userData, name));
};

export default startBrainEvenGame;
