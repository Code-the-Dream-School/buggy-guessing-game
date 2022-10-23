const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const invalidMessage = document.getElementById('invalid-guess');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let maxNumberOfAttempts = 5;
let attempts = 0;
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
  if (invalidGuess(guess)){
    invalidMessage.style.display = ""
     //console.log(invalidGuess);
     //setup();
   }

  attempts = attempts + 1;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = "";

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  let remainingAttempts = maxNumberOfAttempts;

  if (guess !== targetNumber) {
    if (guess < 1 || guess > 99 ) {
      invalidMessage.style.display = "";
      attempts = attempts - 1;
      remainingAttempts = remainingAttempts - 1;
    }
    else if (guess < targetNumber) {
      tooLowMessage.style.display = "";
    } else {
      tooHighMessage.style.display = "";
    }

    remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = "";

  resetButton.style.display = "";
}

function invalidGuess(guess) {
  if (guess < 1 || guess > 99) {
   invalidMessage.style.display = ""
    return true;
  }
  else {
    return false;
  }
}


function hideAllMessages() {
  //document.getElementById("too-high").style.display = "none";
  //for (let elementIndex = 0; elementIndex <= messages.length; elementIndex++) {
   //messages[elementIndex].style.display = 'none';
   for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display ='none';
  }
 }
//}


function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  //maxNumberOfAttempts = 5;
  attempts = 0; 
  remainingAttempts = 5;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = "none";
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
