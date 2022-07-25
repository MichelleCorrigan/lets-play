// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let playerChoice = document.getElementById("player-choice");
    let computerChoice = document.getElementById("computer-choice");
    let result 
    let playerScore = document.getElementById("player-score");
    let computerScore = document.getElementById("computer-score");
    let choices = ["rock", "paper", "scissors"];
    

    for (let button of buttons) {
        button.addEventListener("click", function() {
            playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
            checkResult
        });
    }
})

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) [
        computerChoice = 'rock'
    ]
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    computerChoice.innerHTML = computerChoice
}


function runGame(playerChoice) {

    playerChoice.innerHTML = playerChoice
    
    console.log(result);
}

function checkResult() {
    if (computerChoice === playerChoice) {
        result = "Draw"
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = "Player wins"
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = "Computer wins"
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = "Computer wins"
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = "Player wins"
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = "Player wins"
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = "Computer wins"
    }
}

function incrementPlayerScore() {

}

function incrementComputorScore() {

}