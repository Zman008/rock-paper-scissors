// RPS is rock paper scissors

RPSList = ['ROCK', 'PAPER', 'SCISSOR'];

let playerScore = 0;
let computerScore = 0;
let displayScore;


function getPlayerChoice() {
    playerRPS = prompt("rock or paper or scissor");
    return playerRPS = playerRPS.toUpperCase();
}

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    return randomRPS = RPSList[randomNum];
}

function playRound(playerRPS = getPlayerChoice(), randomRPS = getComputerChoice()) {

    winCondition = (playerRPS == 'ROCK' && randomRPS == 'SCISSOR') || 
        (playerRPS == 'PAPER' && randomRPS == 'ROCK') || 
        (playerRPS == 'SCISSOR' && randomRPS == 'PAPER');

    if (playerRPS == randomRPS) {
        displayScore = `Player Score: ${playerScore} \t\t\t\t Computer Score: ${computerScore}`;
        alert('Draw \n\n' + displayScore);
    } else if (winCondition) {
        playerScore++;
        displayScore = `Player Score: ${playerScore} \t\t\t\t Computer Score: ${computerScore}`;

        alert('WIN! \n\n' + displayScore);
    } else {
        computerScore++;
        displayScore = `Player Score: ${playerScore} \t\t\t\t Computer Score: ${computerScore}`;
        
        alert('you lose \n\n' + displayScore);
    }
    
    displayScore = `Player Score: ${playerScore} \t\t\t\t Computer Score: ${computerScore}`;
    
}


function game() {
    let keepGoing = true;
    
    while (keepGoing) {
        
        playRound();

        if (playerScore == 3) {
            alert('GAME OVER \nYou Win\n\n' + displayScore);
            keepGoing = false;
        } else if (computerScore == 3) {
            alert('GAME OVER \nYou Lose\n\n' + displayScore);
            keepGoing = false;
        }
    }
}

game();

