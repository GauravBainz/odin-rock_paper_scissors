let humanScore = 0;
let computerScore = 0;
let round = 0;
const totalRounds = 5;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

function checkWin(humanChoice, computerChoice) {
    if(humanChoice===computerChoice) {
        return "Tie!"
    }
    else if (
        (humanChoice==="rock" && computerChoice==="scissors")||
        (humanChoice==="paper" && computerChoice==="rock")||
        (humanChoice==="scissors" && computerChoice==="paper")
    ) {
        humanScore++;
        return "You win!"
    }else{
        computerScore++;
        return "Computer wins!"
    }
}
function updateScores(){
    document.getElementById('human-score').textContent = `Your Score: ${humanScore}`;
    document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
}

function resetGame() {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    updateScores();
}

function handleButtonClick(choice) {
    const computerChoice = getComputerChoice();
    const result = checkWin(choice, computerChoice);

    // Only increment round if it's not a tie
    if (result !== "Tie!") {
        round++;
    }

    document.getElementById('result').textContent = `You chose ${choice}, computer chose ${computerChoice}. ${result}`;
    updateScores();

    if (round === totalRounds) {
        endGame();
    }
}

function startGame() {
    alert("Welcome to Rock Paper Scissors! Click the button of the choice you want to select!");
    document.querySelector('.buttons').addEventListener('click', (event) => {
        if(event.target.classList.contains('game-buttons')) {
            const humanChoice = event.target.textContent.toLowerCase();
            handleButtonClick(humanChoice);
        }
    });
}

function endGame() {
    alert("End of rounds! Starting a new game.");
    resetGame();
}
startGame();