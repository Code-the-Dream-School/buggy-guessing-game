const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numOfGuessesMessage = document.getElementsByClassName('num-of-guesses');
console.log(numOfGuessesMessage);
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 1;
let maxNumberOfAttempts=5;

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
  resetButton.style.display=''
  
  if (guess === targetNumber) {

    
    numOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
  
    correctMessage.style.display ='';


    submitButton.disabled = true;
    guessInput.disabled = true;
    resetButton.style.display=''
    
  }

  if (guess < targetNumber) {
    tooLowMessage.style.display = '';
  }
  if (guess > targetNumber) {
    tooHighMessage.style.display = '';
  }

  





    const remainingAttempts = maxNumberOfAttempts - attempts;
    console.log(remainingAttempts);
    
    if(guess === targetNumber){
      submitButton.disabled = true;
      guessInput.disabled = true;
      guessInput.value = 'Submit Guess';
      maxNumberOfAttempts.innerHTML="You guessed Correctly"
      
  }



  maxGuessesMessage.innerHTML = `You guessed ${guess} <br>   guesses remaining ${remainingAttempts}`;
  maxGuessesMessage.style.display = '';
  attempts++;
}

if (guess!== guess) {

  submitButton.disabled = false;
  guessInput.disabled = false;
maxGuessesMessage.style.display='0 guesses remaining';

 // guessInput.value = 'Submit Guess';
  
  
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
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  console.log(maxNumberOfAttempts)

  // Enable the input and submit button
  submitButton.disabeld = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display='none';
  
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

