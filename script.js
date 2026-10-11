let Rock = 0;
let Paper = 1;
let Scissors = 2;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    }
    else if (computerChoice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper or Scissors?");
    return humanChoice;
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    }
    else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You won! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else {
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}
let rounds = 0;
while (rounds < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    rounds++;
}
}
playGame();