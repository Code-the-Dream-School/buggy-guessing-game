const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const correctMessage = document.getElementById('correct');



let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);

  if (guess < 1 || guess > 99) {
    alert('Number must be greater than 0 and less than 100. Try Again.');
    return;
  }

  attempts++;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    if (attempts === 1) {
      correctMessage.innerHTML = 'Congratulations, You guessed correctly! <br/> Would like to play again?';
    }

    submitButton.disabled = true;
    guessInput.disabled = true;
    resetButton.style.display = '';
  } else {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooHighMessage.style.display = '';
    }

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${maxNumberOfAttempts - attempts} guesses remaining`;

    if (attempts === maxNumberOfAttempts) {
      submitButton.disabled = true;
      guessInput.disabled = true;
      numberOfGuessesMessage.innerHTML = '0 guesses remaining';
      resetButton.style.display = '';
    }
  }

  guessInput.value = '';
}

function hideAllMessages() {
  const messages = [
    numberOfGuessesMessage,
    tooHighMessage,
    tooLowMessage,
    maxGuessesMessage,
    correctMessage,
  ];

  messages.forEach((message) => {
    message.style.display = 'none';
  });
}

function setup() {
  // Get random number
  //targetNumber = getRandomNumber(1, 99);
  targetNumber = 42;
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
