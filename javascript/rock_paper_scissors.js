function computerPlay() {
    let randInt = Math.floor(Math.random() * 3);

    if (randInt === 0) {
        return "rock";
    }
    else if (randInt === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "tied"
    }
    else {
        if ((playerSelection === "rock") && (computerSelection === "paper")) {
            return "computer";
        }
        else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            return "you";
        }
        else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            return "you";
        }
        else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
            return "computer";
        }
        else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
            return "computer";
        }
        else {
            return "you";
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (i = 0; i < 5; ++i) {
        let playerSelection = prompt("please enter one of rock, paper or scissors", "rock")
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === "tied") {
            computerScore += 1;
            playerScore += 1;
        }
        else if (result === "you") {
            playerScore += 1;
        }
        else {
            computerScore += 1;
        }
        console.log("The Computer is " + computerSelection + " and the player is " + playerSelection + ".");
    }
    if (computerScore > playerScore) {
        console.log("The computer wins " + computerScore + " to " + playerScore + ".");
    }
    else if ( computerScore < playerScore) {
        console.log("The player wins " + playerScore + " to " + computerScore + ".");
    }
    else {
        console.log("There is a tie: " + computerScore + " to " + playerScore + ".");
    }
}

let computerSelection, playerSelection;
let computerScore = 0;
let playerScore = 0;

const buttonRock = document.querySelector("button.rock");
buttonRock.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "rock";

    let result = playRound("rock", computerSelection);
    
    if (result === "tied") {
        computerScore += 1;
        playerScore += 1;
    }
    else if (result === "you") {
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }
    console.log("The Computer is " + computerSelection + " and the player is rock.");
    console.log("The computer is " + computerScore + " and the player is " + playerScore + ".");
});

const buttonPaper = document.querySelector("button.paper");
buttonPaper.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "paper";
    
    let result = playRound("paper", computerSelection);
    
    if (result === "tied") {
        computerScore += 1;
        playerScore += 1;
    }
    else if (result === "you") {
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }
    console.log("The Computer is " + computerSelection + " and the player is paper.");
    console.log("The computer is " + computerScore + " and the player is " + playerScore + ".");
});

const buttonScissors = document.querySelector("button.scissors");
buttonScissors.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "scissors";
    
    let result = playRound("scissors", computerSelection);
    
    if (result === "tied") {
        computerScore += 1;
        playerScore += 1;
    }
    else if (result === "you") {
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }
    console.log("The Computer is " + computerSelection + " and the player is scissors.");
    console.log("The computer is " + computerScore + " and the player is " + playerScore + ".");
});

