const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementsByClassName('num-of-guesses');
console.log(numberOfGuessesMessage);
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;
let remainingAttempts;
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
  let guess = parseInt(guessInput.value, 10);
  console.log(guess)
  
  hideAllMessages();


  if (guess === targetNumber) {

    
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    numberOfGuessesMessage.style.display ='';


    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess < targetNumber) {
    tooLowMessage.style.display = '';
  }
  if (guess > targetNumber) {
    tooHighMessage.style.display = '';
  }

  {





    const remainingAttempts = maxNumberOfAttempts - attempts;
    console.log(remainingAttempts)
  }



  maxGuessesMessage.innerHTML = `You guessed ${guess} <br>   guesses remaining `;
  maxGuessesMessage.style.display = '';

}

if (attempts === maxNumberOfAttempts) {

  submitButton.disabled = true;
  guessInput.disabled = true;


  guessInput.value = '';

  resetButton.style.display = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';

  }

}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`targetNumber`);

  // Reset number of attempts
  console.log(maxNumberOfAttempts)

  // Enable the input and submit button
  submitButton.disabeld = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = '';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

