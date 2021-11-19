import readlineSync from 'readline-sync';
import startGame from './index.js';
import { welcome, nameQuestion, greeting } from './consts.js';

const askName = (type) => {
  console.log(welcome);

  const name = readlineSync.question(nameQuestion);

  console.log(greeting(name));

  if (type) {
    startGame(type, name);
  }
};

export default askName;
