// initial both scores
let playerScore = 0;
let computerScore = 0;

// Use a random value to determine computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let result;
    selectionsMade(playerSelection, computerSelection);

    let declare = document.querySelector("#rulesVictory");

    if (playerSelection === computerSelection) {
        result = "draw!";
        declare.textContent = "Draw!"
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        result = "player wins!";
        declare.textContent = "Player wins that round!";
        updatePlayerScore();
    } else {
        result = "player loses!";
        declare.textContent = "Player loses that round!";
        updateComputerScore();
    }

    return result + ": " + playerSelection + " vs " + computerSelection;
}

function game() {
    const playerOptions = document.querySelectorAll(".inputButton");
    console.log(playerOptions);
    playerOptions.forEach((option) => {
        option.addEventListener("click", () => {
            playRound("rock", getComputerChoice());
        });
    });

    if (playerScore >= 5 || computerScore >= 5) {
        playerOptions.forEach((option) => {
            option.removeEventListener("click", () => {
                playRound("rock", getComputerChoice());
            });
        });
    }


    const rulesVictory = document.querySelector("#rulesVictory");

    if (playerScore > computerScore) {
        rulesVictory.textContent = "PLAYER VICTORY :D";
    } else {
        rulesVictory.textContent = "COMPUTER VICTORY :(";
    }

    const mainContainer = document.querySelector("#mainContainer");
    const repeat = document.createElement("div");
    repeat.classList.add("cb", "w-100", "center", "tc", "grow");

    const repeatIcon = document.createElement("i");
    repeatIcon.classList.add("fas", "fa-redo", "mv2", "fa-3x");

    const repeatText = document.createElement("span");
    repeatText.textContent = "Play again?";
    repeatText.classList.add("db");

    repeat.append(repeatIcon, repeatText);
    mainContainer.appendChild(repeat);

}

// updating various parts of the page

function updatePlayerScore() {
    const playerScoreDiv = document.querySelector("#playerScore .score");
    playerScore++;
    playerScoreDiv.textContent = playerScore.toString();
}

function updateComputerScore() {
    const computerScoreDiv = document.querySelector("#computerScore .score");
    computerScore++;
    computerScoreDiv.textContent = computerScore.toString();
}

function selectionsMade(playerSelection, computerSelection) {
    const playerCurrent = document.querySelector("#playerCurrent .fai-large");
    const computerCurrent = document.querySelector("#computerCurrent .fai-large");

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
            let playerHistory = document.querySelector("#playerHistory");
            playerHistory.appendChild(icon);
            break;
        case "computer":
            let computerHistory = document.querySelector("#computerHistory");
            computerHistory.appendChild(icon);
            break;
    }

}

// const container = document.querySelector("#mainContainer");
// const content = document.createElement("div");
//
// content.classList.add("content");
// content.textContent = "My first JS added div!";
//
// container.appendChild(content);
// const redP = document.createElement("p");
// redP.textContent = "I am a paragraph with red text";
// redP.style.cssText = "color: red;";
// container.appendChild(redP);
//
// const blueHeader = document.createElement("h3");
// blueHeader.textContent = "I am a blue header";
// blueHeader.style.cssText = "color: blue;";
// container.appendChild(blueHeader);
//
// const blackPink = document.createElement("div");
// blackPink.style.cssText = "background-color: pink; border: 2px solid black;";
//
// const blackPinkHeader = document.createElement("h1");
// blackPinkHeader.textContent = "I'm in a div";
//
// const blackPinkParagraph = document.createElement("p");
// blackPinkParagraph.textContent = "Me too!";
//
// blackPink.appendChild(blackPinkHeader);
// blackPink.appendChild(blackPinkParagraph);
//
// container.appendChild(blackPink);



console.log("bugger");
game();