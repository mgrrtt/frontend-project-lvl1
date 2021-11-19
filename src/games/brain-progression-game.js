/* eslint-disable no-param-reassign */
const checkProgressionAnswer = (userData) => {
  const array = userData.question.split(' ');
  const empty = array.indexOf('..');

  userData.expected = Number(array[empty - 1]) + 2;

  if (userData.expected === Number(userData.answer)) {
    userData.correctCount += 1;

    return true;
  }

  return false;
};

export default checkProgressionAnswer;
