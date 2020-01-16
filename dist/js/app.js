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

// Reload page when play again is clicked
container.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
})

// Listen for user submit
submitBtn.addEventListener('click', () => {
  let guess = parseInt(userInput.value);
  userInput.focus();

  // Validate user input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Your guess must be between ${min} and ${max}`, 'red');
    userInput.value = '';
  } else {
    // Check if won
    if (guess === winningNumber) {
      setMessage(`${winningNumber} is correct, You won!`, 'green');
      userInput.disabled = true;
      playAgain();
    } else {
      guessesLeft -= 1;

      if (guess < winningNumber) {
        setMessage(`The winning number is greater than ${guess}, you have ${guessesLeft} guesses left`, 'red');
      } else if (guess > winningNumber) {
        setMessage(`The winning number is less than ${guess}, you have ${guessesLeft} guesses left`, 'red');
      }

      userInput.value = '';
      if (guessesLeft === 0) {
        setMessage(`You have ${guessesLeft} guesses left, Game Over!`, 'red');
        userInput.disabled = true;
        playAgain();
      }
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  userInput.style.borderColor = color;
}

// Play again
function playAgain() {
  submitBtn.value = 'Play Again';
  submitBtn.className += ' play-again';
}