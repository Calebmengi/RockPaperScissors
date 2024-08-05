function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice() {
    let choice;
    const validChoices = ["rock", "paper", "scissors"];
    do {
        choice = prompt("Enter one of the three choices: 'rock', 'paper', 'scissors'! ").toLowerCase();
    } while (!validChoices.includes(choice));
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const toLowerCaseHu = humanChoice.toLowerCase();
    const toLowerCaseCo = computerChoice.toLowerCase();
    
    if (toLowerCaseHu === toLowerCaseCo) {
        return "It's a Tie! No one wins!";
    } else if (
        (toLowerCaseHu === 'paper' && toLowerCaseCo === 'rock') ||
        (toLowerCaseHu === 'rock' && toLowerCaseCo === 'scissors') ||
        (toLowerCaseHu === 'scissors' && toLowerCaseCo === 'paper')
    ) {
        humanScore++;
        return `You win! ${toLowerCaseHu} beats ${toLowerCaseCo}! Good Game!`;
    } else {
        computerScore++;
        return `You lose! ${toLowerCaseCo} beats ${toLowerCaseHu}! Good Game!`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}`);
        console.log(`Human choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        // Update scores based on the result
        if (result.includes('You win')) {
            humanScore++;
        } else if (result.includes('You lose')) {
            computerScore++;
        }
    }

    console.log(`Final Scores:`);
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

document.getElementById('openConsoleButton').addEventListener('click', function() {
    alert("To open the console:\n\n- On Windows/Linux: Press Ctrl+Shift+I or F12\n- On macOS: Press Cmd+Option+I");
});
