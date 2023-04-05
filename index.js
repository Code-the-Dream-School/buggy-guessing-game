const guessInput = document.getElementById(&#39;guess&#39;);
const submitButton = document.getElementById(&#39;submit&#39;);
const resetButton = document.getElementById(&#39;reset&#39;);
const messages = document.getElementsByClassName(&#39;message&#39;);
const tooHighMessage = document.getElementById(&#39;too-high&#39;);
const tooLowMessage = document.getElementById(&#39;too-low&#39;);
const maxGuessesMessage = document.getElementById(&#39;max-guesses&#39;);
const numberOfGuessesMessage = document.getElementById(&#39;number-of-guesses&#39;);
const correctMessage = document.getElementById(&#39;correct&#39;);
let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
function checkGuess() {
const guess = parseInt(guessInput.value, 10);
attempts = attempts + 1;
hideAllMessages();
if (guess === targetNumber) {
numberOfGuessesMessage.style.display = &#39;&#39;;
numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
correctMessage.style.display = &#39;&#39;;
submitButton.disabled = true;
guessInput.disabled = true;
}
if (guess !== targetNumber) {
if (guess &lt; targetNumber) {
tooLowMessage.style.display = &#39;&#39;
} else {
  tooHighMessage.style.display = &#39;&#39;;
  }
  const remainingAttempts = maxNumberOfAttempts - attempts;
  numberOfGuessesMessage.style.display = &#39;&#39;;
  if(remainingAttempts === 1) {
  numberOfGuessesMessage.innerHTML = `You guessed ${guess}. &lt;br&gt; ${remainingAttempts} guess remaining`;
  } else {
  numberOfGuessesMessage.innerHTML = `You guessed ${guess}. &lt;br&gt; ${remainingAttempts} guesses
  remaining`;
  }
  }
  if (attempts === maxNumberOfAttempts) {
  submitButton.disabled = true;
  guessInput.disabled = true;
  }
  guessInput.value = &#39;&#39;;
  resetButton.style.display = &#39;&#39;;
  }
  function hideAllMessages() {
  for (let elementIndex = 0; elementIndex &lt; messages.length; elementIndex++) {
  messages[elementIndex].style.display = &#39;none&#39;;
  }
  }
  function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);
  // Reset number of attempts
  attempts = 0;
  maxNumberOfAttempts = 5;
  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;
  hideAllMessages();
resetButton.style.display = &#39;none&#39;;
}
submitButton.addEventListener(&#39;click&#39;, checkGuess);
resetButton.addEventListener(&#39;click&#39;, setup);
setup();

