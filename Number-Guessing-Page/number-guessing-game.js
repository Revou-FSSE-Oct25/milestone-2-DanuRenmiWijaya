const guessInput = document.getElementById('guess-input');
const submitGuess = document.getElementById('submit-guess');
const result = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');

const randomNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 5;
let attempts = 0;

submitGuess.addEventListener('click', () => {
    attempts++;
    const userGuess = Number(guessInput.value);
    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the correct number. The number was ${randomNumber}!`;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        submitGuess.disabled = true;
    } else if (attempts >= maxAttempts) {
        result.textContent = 'Game Over! The correct number was ' + randomNumber + '.';
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        submitGuess.disabled = true; 
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again'
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    } else if (userGuess > randomNumber) {
        result.textContent = 'Too high! Try again'
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    } });

