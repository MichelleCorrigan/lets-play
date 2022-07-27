// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type"); 
                if (this.getAttribute("data-type") === "0") {
                    playerChoice = "rock";
                } else if (this.getAttribute("data-type") === "1") {
                    playerChoice = "paper";
                } else if (this.getAttribute("data-type") === "2") {
                    playerChoice = "scissors";
                }
            
            playerChoiceDisplay.innerHTML = playerChoice;
            generateComputerChoice();
            console.log(computerChoice);
            checkResult(computerChoice, playerChoice);
            
            console.log(result);
        });
    }
});

const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let resultDisplay = document.getElementById("result");
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
    

    
/** 
 * Generate the computers random selection of rock, paper 
 * or scissors */ 
function generateComputerChoice() {
     
    computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceDisplay.innerHTML = computerChoice;
            
}

/**
 *  Compares computer and player choice and decides winning result.
 *  Updates winners score tally.
*/
function checkResult(computerChoice, playerChoice) { 
    let result = document.getElementById("result");
    console.log(computerChoice);
    console.log(playerChoice); 
    if (computerChoice === 'rock' && playerChoice === 'rock') {
        result.innerHTML = "Draw";
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper') {
        result.innerHTML = "Player wins";
        incrementPlayerScore()
    }
    else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result.innerHTML = "Computer wins";
        incrementComputerScore()
    }
    else if (computerChoice === 'paper' && playerChoice === 'rock') {
        result.innerHTML = "Computer wins";
        incrementComputerScore()
    }
    else if (computerChoice === 'paper' && playerChoice === 'paper') {
        result.innerHTML = "Draw";
    }
    else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result.innerHTML = "Player wins";
        incrementPlayerScore()
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result.innerHTML = "Player wins";
        incrementPlayerScore()
    }
    else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result.innerHTML = "Computer wins";
        incrementComputerScore()
    }
    else if (computerChoice === 'scissors' && playerChoice === 'scissors') {
        result.innerHTML = "Draw";
    }
}


/** Gets the current player score from the DOM and increments it by 1 */
function incrementPlayerScore() {

    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;

}

/** Gets the current computer score from the DOM and increments it by 1 */
function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}