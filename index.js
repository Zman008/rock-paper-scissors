// RPS is rock paper scissors

RPSList = ['rock', 'paper', 'scissor'];

function getPlayerChoice() {
    return playerRPS = prompt("rock or paper or scissor \ntype and enter 'q' to exit");
}

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    return randomRPS = RPSList[randomNum];
}

function playRound(playerRPS = getPlayerChoice(), randomRPS = getComputerChoice()) {
    
    playerRPS = playerRPS.toUpperCase();
    randomRPS = randomRPS.toUpperCase();

    winCondition = (playerRPS == 'ROCK' && randomRPS == 'SCISSOR') || 
        (playerRPS == 'PAPER' && randomRPS == 'ROCK') || 
        (playerRPS == 'SCISSOR' && randomRPS == 'PAPER');

    if (playerRPS == 'Q') {
        keepGoing = false;
    } else if (playerRPS == randomRPS) {
        alert('Draw');
    } else if (winCondition) {
        alert('WIN!')
    } else {
        alert('you lose');
    }
}

function game() {
    for (i=0; i<5; i++){
        playRound();
    }
}

game();