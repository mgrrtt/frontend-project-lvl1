import readlineSync from 'readline-sync';

import checkEvenAnswer from './games/brain-even-game.js';
import checkCalcAnswer from './games/brain-calc-game.js';
import checkGCDAnswer from './games/brain-gcd-game.js';
import checkPrimeAnswer from './games/brain-prime-game.js';
import checkProgressionAnswer from './games/brain-progression-game.js';

import { getQuestion } from './utils.js';

import {
  description,
  answer,
  correct,
  question,
  congrats,
  failure,
  maxCorrectCount,
} from './consts.js';

const gameCheck = {
  even: checkEvenAnswer,
  calc: checkCalcAnswer,
  gcd: checkGCDAnswer,
  prime: checkPrimeAnswer,
  progression: checkProgressionAnswer,
};

const startGame = (type, name) => {
  const userData = {
    correctCount: 0,
    question: getQuestion(type),
    answer: '',
    expected: '',
  };

  // объяснить задачу, задать вопрос
  console.log(description(type));
  console.log(question(userData.question));

  // получить ответ
  userData.answer = readlineSync.question(answer);

  while (gameCheck[type](userData)
        && userData.correctCount < maxCorrectCount) {
    // ответ верный
    console.log(correct);

    // сформировать новую задачу
    userData.question = getQuestion(type);

    // задать вопрос
    console.log(question(userData.question));

    // получить ответ
    userData.answer = readlineSync.question(answer);
  }

  if (userData.correctCount === maxCorrectCount) {
    // три верных ответа подряд
    console.log(correct);
    console.log(congrats(name));

    return;
  }

  // неверный ответ
  console.log(failure(userData, name));
};

export default startGame;
