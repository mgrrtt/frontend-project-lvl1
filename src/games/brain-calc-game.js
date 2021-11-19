/* eslint-disable no-param-reassign */

const checkCalcAnswer = (userData) => {
  const doMath = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const [x, operator, y] = userData.question.split(' ');

  userData.expected = doMath[operator](Number(x), Number(y));

  if (userData.expected === Number(userData.answer)) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkCalcAnswer;
