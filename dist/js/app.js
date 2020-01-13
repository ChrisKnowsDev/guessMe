// UI Vars
const container = document.querySelector('.container'),
  minNum = document.querySelector('.min'),
  maxNum = document.querySelector('.max'),
  difficulty = document.querySelector('#difficulty'),
  userInput = document.querySelector('#user-input'),
  submitBtn = document.querySelector('#submit-btn'),
  message = document.querySelector('.message');

// Game Vars
let guessesLeft = 3,
  min = 1,
  max = 10,
  winningNumber = 5;

// Set min & max numbers in UI
maxNum.textContent = max;
minNum.textContent = min;