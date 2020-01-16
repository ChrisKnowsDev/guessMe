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

// Focus cursor in guess input
userInput.focus();

// Listen for user submit
submitBtn.addEventListener('click', () => {
  let guess = parseInt(userInput.value);

  // Check if won
  if (guess === winningNumber) {
    setMessage(`${winningNumber} is correct, you won!`, 'green');
    userInput.disabled = true;
  } else {
    guessesLeft -= 1;
    setMessage(
      `${guess} is not correct, you have ${guessesLeft} guesses left`,
      'red'
    );
    userInput.value = '';
    userInput.focus();
  }

  if (guessesLeft === 0) {
    setMessage('GAME OVER', 'red');
    userInput.disabled = true;
  }
});

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  userInput.style.borderColor = color;
}
