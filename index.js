// RPS is rock paper scissors

RPSList = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;
let randomRPS;
let playerRPS;
const html = document.querySelector("html");
const result = document.querySelector(".gameResult");
const computerScoreDisplay = document.querySelector('.computer-score');
const playerScoreDisplay = document.querySelector('.player-score');

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    playerRPS = btn.id;
    playRound();
  });
});

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  return (randomRPS = RPSList[randomNum]);
}

function playRound(randomRPS = getComputerChoice()) {
  winCondition =
    (playerRPS == "ROCK" && randomRPS == "SCISSORS") ||
    (playerRPS == "PAPER" && randomRPS == "ROCK") ||
    (playerRPS == "SCISSORS" && randomRPS == "PAPER");

  if (playerRPS == randomRPS) {
    result.textContent = 'Draw';
    html.style.backgroundColor = 'grey';
  } else if (winCondition) {
    playerScore++;
    result.textContent = 'Win';
    html.style.backgroundColor = 'LimeGreen';
  } else {
    computerScore++;
    result.textContent = 'Lose';
    html.style.backgroundColor = 'OrangeRed';
  }
  
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
}

