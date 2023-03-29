// RPS is rock paper scissors

RPSList = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;
let displayScore;
let randomRPS;
let playerRPS;
const result = document.querySelector(".gameResult");
const score = document.querySelector('.score');

score.setAttribute('style', 'white-space: pre');

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
  } else if (winCondition) {
    playerScore++;
    result.textContent = 'Win';
  } else {
    computerScore++;
    result.textContent = 'Lose';
  }
  console.log(randomRPS)

  displayScore = `Player Score: ${playerScore} \t\t Computer Score: ${computerScore}`;
  score.textContent = displayScore;
}

