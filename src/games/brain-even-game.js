/* eslint-disable no-param-reassign */
const checkEvenAnswer = (userData) => {
  userData.expected = userData.question % 2 === 0 ? 'yes' : 'no';

  if (userData.expected === userData.answer) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkEvenAnswer;