import readlineSync from 'readline-sync';
import startBrainEvenGame from './brain-even-game.js';
import { welcome, nameQuestion, greeting } from './consts.js';

const startGame = (type, name) => {
  if (type === 'even') {
    startBrainEvenGame(name);
  }
};

const askName = (type) => {
  console.log(welcome);

  const name = readlineSync.question(nameQuestion);

  console.log(greeting(name));

  startGame(type, name);
};

export default askName;
