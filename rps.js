// document elements
const playerScoreDiv = document.querySelector("#playerScore .score");
const makeYourSelection = document.querySelector("#makeYourSelection");
const declare = document.querySelector("#rulesVictory");
const inputChoices = document.querySelector("#inputChoices");
const mainContainer = document.querySelector("#mainContainer");
const repeat = document.querySelector("#repeat");
const computerScoreDiv = document.querySelector("#computerScore .score");
const playerCurrent = document.querySelector("#playerCurrent .fai-large");
const computerCurrent = document.querySelector("#computerCurrent .fai-large");
const playerHistory = document.querySelector("#playerHistory");
const computerHistory = document.querySelector("#computerHistory");

// initial both scores
let playerScore = 0;
let computerScore = 0;

// activate buttons
const playerOptions = document.querySelectorAll(".inputButton");
playerOptions.forEach((option) => {
    option.addEventListener("click", () => {
        playRound(option.id, getComputerChoice());
    });
});

// Use a random value to determine computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    selectionsMade(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        declare.textContent = "Draw!"
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        declare.textContent = "Player wins that round!";
        playerScore++;
        playerScoreDiv.textContent = playerScore.toString();
    } else {
        declare.textContent = "Player loses that round!";
        computerScore++;
        computerScoreDiv.textContent = computerScore.toString();
    }


    if (playerScore >= 5 || computerScore >= 5) {
        declare.classList.add("blue", "f2");
        declare.classList.remove("f4");
        makeYourSelection.classList.add("dn");
        inputChoices.classList.add("dn");

        if (playerScore > computerScore) {
            declare.textContent = "PLAYER VICTORY :D";
        } else {
            declare.textContent = "COMPUTER VICTORY :(";
        }


        repeat.classList.replace("dn", "db");
        repeat.addEventListener("click", () => {
            playerScore = 0;
            playerScoreDiv.textContent = playerScore.toString();
            computerScore = 0;
            computerScoreDiv.textContent = computerScore.toString();
            declare.classList.remove("blue", "f2");
            declare.classList.add("f4");
            declare.textContent = "First to 5 wins!";
            makeYourSelection.classList.remove("dn");
            inputChoices.classList.remove("dn");
            playerHistory.innerHTML = "";
            computerHistory.innerHTML = "";
            repeat.classList.replace("db", "dn");

        });
    }
}

function game() {

}

// updating various parts of the page

function selectionsMade(playerSelection, computerSelection) {

    // add icon to each side's history
    createIcon(playerSelection, "player");
    createIcon(computerSelection, "computer");

    // remove the existing classes first
    playerCurrent.removeAttribute("class");
    computerCurrent.removeAttribute("class");

    // then depending on the selections, add new classes as appropriate
    switch (playerSelection) {
        case "rock":
            playerCurrent.classList.add("far", "fai-large", "fa-hand-rock");
            break;
        case "paper":
            playerCurrent.classList.add("far", "fai-large", "fa-hand-paper");
            break;
        case "scissors":
            playerCurrent.classList.add("far", "fai-large", "fa-hand-scissors");
            break;
    }

    switch (computerSelection) {
        case "rock":
            computerCurrent.classList.add("far", "fai-large", "fa-hand-rock");
            break;
        case "paper":
            computerCurrent.classList.add("far", "fai-large", "fa-hand-paper");
            break;
        case "scissors":
            computerCurrent.classList.add("far", "fai-large", "fa-hand-scissors");
            break;
    }
}

function createIcon(selection, side) {
    let icon = document.createElement("i");
    icon.classList.add("far", "pa1", "fai-previous");

    switch (selection) {
        case "rock":
            icon.classList.add("fa-hand-rock");
            break;
        case "paper":
            icon.classList.add("fa-hand-paper");
            break;
        case "scissors":
            icon.classList.add("fa-hand-scissors");
            break;
    }

    switch (side) {
        case "player":
            playerHistory.appendChild(icon);
            break;
        case "computer":
            computerHistory.appendChild(icon);
            break;
    }

}
game();