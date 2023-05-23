const RPSList = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let randomRPS;
let playerRPS;
const html = document.querySelector("html");
const roundResult = document.querySelector(".round-result");
const computerScoreDisplay = document.querySelector('.computer-score');
const playerScoreDisplay = document.querySelector('.player-score');
const btns = document.querySelectorAll(".choice-btn");
const computerChoiceImg = document.querySelector(".cmp-choice-img");
const playerChoiceImg = document.querySelector(".plyr-choice-img");
const gameResult = document.querySelector(".game-result");
const resultText = document.querySelector(".result-text");
const playAgain = document.querySelector(".play-again");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    playerRPS = btn.id;
    playerChoiceImg.src = `./img/${playerRPS}.png`;
    
    playRound();

    checkGameEnd();
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
    roundResult.src = './img/equal.png';
    html.style.backgroundColor = 'grey';
  } else if (winCondition) {
    playerScore++;
    roundResult.src = './img/circle.png';
    html.style.backgroundColor = 'palegreen';
  } else {
    computerScore++;
    roundResult.src = './img/cross.png';
    html.style.backgroundColor = 'tomato';
  }
  
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
}

function checkGameEnd() {
  if (playerScore == 5) {
    resultText.textContent = "You Win!";
    gameResult.showModal();
  } else if (computerScore == 5) {
    resultText.textContent = "You Lose!";
    gameResult.showModal();
  }
}

playAgain.addEventListener("click", () => {
  gameResult.close();
  playerScore = 0;
  computerScore = 0;
  html.style.backgroundColor = 'lightskyblue';
  roundResult.src = './img/equal.png';
  computerChoiceImg.src = '';
  playerChoiceImg.src = '';
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
})

