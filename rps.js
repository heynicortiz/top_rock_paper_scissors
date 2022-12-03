
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let result = "result";

    if (playerSelection == computerSelection) {
        result = "draw!";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        result = "player wins!";
        playerScore++;
    } else {
        result = "player loses!";
        computerScore++;
    }

    return result + ": " + playerSelection + " vs " + computerSelection;
}

function game() {
    for (let i = 0; i < 5; i++) {
        alert(playRound(prompt("Please enter your selection").toLowerCase(), getComputerChoice()));
        console.log("PS: " + playerScore + ", CS: " + computerScore);
    }
    console.log("Final Scores: \n" +
        "Player: " + playerScore + "\nComputer: " + computerScore);
}

game();