// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type"); {
                if (this.getAttribute("data-type") === "0") {
                    playerChoice = "rock";
                } else if (this.getAttribute("data-type") === "1") {
                    playerChoice = "paper";
                } else if (this.getAttribute("data-type") === "2") {
                    playerChoice = "scissors";
                }
            }
            playerChoiceDisplay.innerHTML = playerChoice;
            generateComputerChoice();
            console.log(computerChoice);
            checkResult();
            resultDisplay.innerHTML = result;
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
    

    
    
function generateComputerChoice() {
     
    computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceDisplay.innerHTML = computerChoice;
            
}


function checkResult(computerChoice, playerChoice) { 
    let resultDisplay = document.getElementById("result"); {
    if (computerChoice === 'rock' && playerChoice === 'rock') {
        result = "Draw";
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = "Player wins";
    }
    else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = "Computer wins";
    }
    else if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = "Computer wins";
    }
    else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = "Player wins";
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = "Player wins";
    }
    else if(computerChoice === 'scissors' && playerChoice === 'paper'); {
        result = "Computer wins";
    }}
    
}

function incrementPlayerScore() {

}

function incrementComputorScore() {

}