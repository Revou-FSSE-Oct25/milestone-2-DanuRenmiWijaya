const clickerButton = document.getElementById('clicker-button');
const scoreDisplay = document.getElementById('score');
let score = 0;

clickerButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
});
