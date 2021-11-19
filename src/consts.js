// common texts
export const welcome = 'Welcome to the Brain Games!';
export const nameQuestion = 'May I have your name? ';
export const answer = 'Your answer: ';
export const correct = 'Correct!';

// with params
export const greeting = (name) => `Hello, ${name}!`;
export const question = (number) => `Question: ${number}`;
export const congrats = (name) => `Congratulations, ${name}!`;
export const failure = (userData, name) => `"${userData.answer}" is wrong answer ;(. Correct answer was "${userData.expected}". \nLet's try again, ${name}!`;

// game descriptions
export const description = (type) => {
  const descriptions = {
    even: 'Answer "yes" if the number is even, otherwise answer "no".',
    calc: 'What is the result of the expression?',
    gcd: 'Find the greatest common divisor of given numbers.',
    prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    progression: 'What number is missing in the progression?',
  };

  return descriptions[type];
};

// numbers
export const maxCorrectCount = 3;
export const progressionStep = 2;
export const progressionLength = 10;
