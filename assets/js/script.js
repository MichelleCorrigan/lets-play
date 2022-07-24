// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        });
    }
})

let choices = ["rock", "paper", "scissors"];


function runGame(playerChoice) {

    let computorChoice = Math.floor(Math.random() * 3);
    let result = checkWinner(choices[computorChoice], choices[playerChoice]);    
}

function checkResult() {

}

function incrementPlayerScore() {

}

function incrementComputorScore() {

}