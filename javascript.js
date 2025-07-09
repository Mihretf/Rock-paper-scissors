// console.log("Hello, World!");
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
function getComputerChoice(){
    const randomNumber = Math.random();
    if(randomNumber < 0.34) {
        return "rock";
    }else if(randomNumber < 0.68){
        return "paper";
    }else{
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    const randomInput = prompt('Please input rock, paper or scissors')
    return randomInput

}

console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;


// rock beats scissors
// paper beats rock
// scissors beats paper

function playRound(humanChoice,computerChoice){
    const playerChoice = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();
    if (playerChoice === computerChoiceLower) {
        return "It's a tie!";
    }
    if (
        (playerChoice === "rock" && computerChoiceLower === "scissors") ||
        (playerChoice === "paper" && computerChoiceLower === "rock") ||
        (playerChoice === "scissors" && computerChoiceLower === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${playerChoice} beats ${computerChoiceLower}.`);
       
    }else if(
        (computerChoiceLower === "rock" && playerChoice === "scissors") ||
        (computerChoiceLower === "paper" && playerChoice === "rock") ||
        (computerChoiceLower === "scissors" && playerChoice === "paper")
    ) {
        computerScore++;
        console.log(`You lose! ${computerChoiceLower} beats ${playerChoice}.`);
    }};


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
    readline.close();
    return;

}
// console.log(`\n--- Round ${round} ---`);
//     readline.question("Please input rock, paper, or scissors: ", (humanChoice) => {
//         const computerChoice = getComputerChoice();
//         console.log(playRound(humanChoice, computerChoice));
//         round++;
//         playGame(); // Recursively call for next round
//     });


playGame();
