const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const winnerDisplay = document.getElementById('winnerDisplay');
const gameButtons = document.querySelectorAll('button');
const scoreDisplay = document.getElementById('scoreDisplay');

rockButton.addEventListener('click', () => playGames('rock'));
paperButton.addEventListener('click', () => playGames('paper'));
scissorsButton.addEventListener('click', () => playGames('scissors'));

let playerScore = 0;
let computerScore = 0;
const winningScore = 3;

function playGames(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
        }
    }
    if (result === 'YOU WIN!') {
        playerScore++;
    } else if (result === 'YOU LOSE!') {
        computerScore++;
    }
    
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
    
    resultDisplay.classList.toggle('resultStyleWin', result === 'YOU WIN!');
    resultDisplay.classList.toggle('resultStyleLose', result === 'YOU LOSE!');
    
    checkGameWinner();
}
function checkGameWinner() {
    if (playerScore === winningScore) {
        winnerDisplay.textContent = 'Congratulations! You are the overall winner!';
        disableButton();
    } else if (computerScore === winningScore) {
        winnerDisplay.textContent = 'Computer wins the game! Better luck next time!';
        disableButton();
    }
}
function disableButton() {
    gameButtons.forEach(button => {
        button.disabled = true;
    });
}