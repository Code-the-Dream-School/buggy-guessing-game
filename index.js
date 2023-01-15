const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');

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
  let guess = parseInt(guessInput.value, 10);
  guessInput.value='';
  
  hideAllMessages();
  resetButton.style.display = ''
  attempts++;
  if (guess === targetNumber) {
    
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    
    numberOfGuessesMessage.style.display='block';
    correctMessage.style.display = '';
    submitButton.disabled = true;
    
    guessInput.disabled = true;
    
    resetButton.style.display = '';
    
  }
  
   

  if (guess < targetNumber) {
    tooLowMessage.style.display = '';
    
  }
  
   
   
  if (guess > targetNumber) {
    tooHighMessage.style.display = '';
    
  }


  const remainingAttempts = maxNumberOfAttempts - attempts;
  console.log(remainingAttempts);

  if(guess !==targetNumber){
    

    maxGuessesMessage.innerHTML = `You guessed ${guess} <br>   ${remainingAttempts} guesses remaining`;
  maxGuessesMessage.style.display = '';
  
    
}


 if(attempts===maxNumberOfAttempts){
  guessInput.disabled=true;
  submitButton.disabled=true;
  }
   
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
  //maxNumberOfAttempts=5;
attempts=0;
  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;
 
 
  hideAllMessages();
  resetButton.style.display = 'none';

}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
