// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons

    const buttons = document.getElementsByTagName("button");

    const playerChoiceDisplay = document.getElementById("player-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    const resultDisplay = document.getElementById("result");
    const choices = ["rock", "paper", "scissors"];
    let playerChoice;
    let computerChoice;
    let result;


    /* Add event listeners to all buttons */
    for (let button of buttons) {
        button.addEventListener("click", function() {
            playerChoice = this.getAttribute("data-type"); {
                if (this.getAttribute("data-type") === "0") {
                    playerChoice = "rock";
                } if (this.getAttribute("data-type") === "1") {
                    playerChoice = "paper";
                } else {
                    playerChoice = "scissors";
                }
            }
            playerChoiceDisplay.innerHTML = playerChoice
            generateComputerChoice();
            console.log(computerChoice);
            checkResult();
            
        });
    }



function generateComputerChoice() {
     
    computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceDisplay.innerHTML = computerChoice;
            
}


function checkResult() { 
    if (computerChoice === playerChoice) {
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
    }
    resultDisplay.innerHTML = result;
}

function incrementPlayerScore() {

}

function incrementComputorScore() {

}