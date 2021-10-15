// common texts
export const welcome = 'Welcome to the Brain Games!';
export const nameQuestion = 'May I have your name? ';
export const greeting = (name) => `Hello, ${name}!`;

// brain-even texts
export const evenAnswer = 'Your answer: ';
export const evenCorrect = 'Correct!';
export const evenDescription = (number) => `Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${number}`;
export const evenQuestion = (number) => `Question: ${number}`;
export const evenCongrats = (name) => `Congratulations, ${name}!`;
export const evenFailure = (userData, name) => `"${userData.answer}" is wrong answer ;(. Correct answer was "${userData.expected}". \nLet's try again, ${name}!`;

// numbers
export const min = 1;
export const max = 100;
