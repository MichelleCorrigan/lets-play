// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons

    let buttons = document.getElementsByTagName("button");

    let playerChoiceDisplay = document.getElementById("player-choice");
    let computerChoiceDisplay = document.getElementById("computer-choice");
    let playerScore = document.getElementById("player-score");
    let computerScore = document.getElementById("computer-score");
    let resultDisplay = document.getElementById("result");
    let choices = ["rock", "paper", "scissors"];
    let computerChoice
    


    /* Add event listeners to all buttons */
    for (let button of buttons) {
        button.addEventListener("click", function() {
            playerChoice = (this.getAttribute(choices));
            
            console.log(playerChoice);

            generateComputerChoice();
            console.log(computerChoice);
            checkResult();
            console.log(result);
        });
    }



function generateComputerChoice() {
     
    computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceDisplay.innerHTML = computerChoice

        playerChoiceDisplay.innerHTML = playerChoice
}


function checkResult() { 
    if (computerChoice === playerChoice) {
        result = "Draw"
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = "Player wins"
    }
    else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = "Computer wins"
    }
    else if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = "Computer wins"
    }
    else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = "Player wins"
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = "Player wins"
    }
    else (computerChoice === 'scissors' && playerChoice === 'paper'); {
        result = "Computer wins"
    }
    resultDisplay.innerHTML = result;
}

function incrementPlayerScore() {

}

function incrementComputorScore() {

}