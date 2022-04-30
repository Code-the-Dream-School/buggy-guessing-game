const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');// fixed spelling error on class name
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;  //changed variable keyword from const to let
let maxNumberOfAttempts = 5; //changed variable keyword from const to let

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

maxNumberOfAttempts--; //decrease number of attempts with each guess

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooHighMessage.style.display = ''; //replaced else condition statement
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;
    attempts++; // increment number of attempts

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;

    if (remainingAttempts === 1) {
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
    }
  }

  if (attempts === maxNumberOfAttempts) {    //fixed the equality operator error(==== to ===)
    maxGuessesMessage.style.display = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
  }
  if (guess < 0 || guess > 99) {
    alert("Invalid entry,should be a number from 1 to 99!, Reset to continue")
  }
  guessInput.value = '';

  resetButton.style.display = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) { //replaced the comparison operator <=  with <
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {     // fixed function spelling error
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 5;

  // Enable the input and submit button
  submitButton.disabled = false; //fixed disabled spelling error)
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
