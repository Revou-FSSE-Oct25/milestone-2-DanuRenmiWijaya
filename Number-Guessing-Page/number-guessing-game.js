const guessInput = document.getElementById('guess-input');
const submitGuess = document.getElementById('submit-guess');
const result = document.getElementById('result');

const randomNumber = Math.floor(Math.random() * 100) + 1;

submitGuess.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    if (userGuess === randomNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        result.textContent = 'Too high! Try again.';
    }
});

