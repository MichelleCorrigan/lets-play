// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type");
            runGame(playerChoice);
        });
    }
})

function runGame(playerChoice) {

    
}

function checkResult() {

}

function incrementPlayerScore() {

}

function incrementComputorScore() {

}