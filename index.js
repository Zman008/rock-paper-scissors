// RPS is rock paper scissors

RPSList = ['rock', 'paper', 'scissor'];

function getPlayerChoice() {
    return playerRPS = prompt("rock or paper or scissor \ntype and enter 'q' to exit");
}

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    return randomRPS = RPSList[randomNum];
}

keepGoing = true;

while (keepGoing) {
    getPlayerChoice();
    getComputerChoice();

    winCondition = (playerRPS == 'rock' && randomRPS == 'scissor') || (playerRPS == 'paper' && randomRPS == 'rock') || (playerRPS == 'scissor' && randomRPS == 'paper');

    if (playerRPS == 'q') {
        keepGoing = false;
    } else if (playerRPS == randomRPS) {
        alert('Draw');
    } else if (winCondition) {
        alert('WIN!')
    } else {
        alert('you lose')
    }
}