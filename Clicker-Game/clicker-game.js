const clickerButton = document.getElementById('clicker-button');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
let score = 0;
let timeLeft = 10; // Game duration in seconds

clickerButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    let timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = `Time Left: ${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        clickerButton.disabled = true;
        timeDisplay.textContent = `Game Over! Your final score is ${score}`;
    }
}, 1000);
});

// Timer functionality
