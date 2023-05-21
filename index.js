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
const computerChoiceImg = document.querySelector(".cmp-choice-img");
const playerChoiceImg = document.querySelector(".plyr-choice-img");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    playerRPS = btn.id;
    playerChoiceImg.src = `./img/${playerRPS}.png`;
    
    playRound();

    if (playerScore == 5) {
      alert("You win!");
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore == 5) {
      alert("You lose!");
      playerScore = 0;
      computerScore = 0;
    }
  });
});

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  return RPSList[randomNum];
}

function playRound(randomRPS = getComputerChoice()) {
  computerChoiceImg.src = `./img/${randomRPS}.png`;
  winCondition =
    (playerRPS == "ROCK" && randomRPS == "SCISSORS") ||
    (playerRPS == "PAPER" && randomRPS == "ROCK") ||
    (playerRPS == "SCISSORS" && randomRPS == "PAPER");

  if (playerRPS == randomRPS) {
    result.src = './img/equal.png';
    html.style.backgroundColor = 'grey';
  } else if (winCondition) {
    playerScore++;
    result.src = './img/circle.png';
    html.style.backgroundColor = 'palegreen';
  } else {
    computerScore++;
    result.src = './img/cross.png';
    html.style.backgroundColor = 'tomato';
  }
  
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
}
