var choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let index = 0; index < choices.length; index++) {
    const element = choices[index];
    console.log(element);
}

var userChoice = "spock";
var computerChoice = "scissors";

function CheckLogic(userChoice, computerChoice) {
    var winner = "";
    if (userChoice === computerChoice) {
        winner = "tie";
    } else {
        if (userChoice === "rock" && computerChoice === "paper") {
            winner = "user";
        } else if (userChoice === "paper" && computerChoice === "rock") {
            winner = "computer";
        } else if (userChoice === "rock" && computerChoice === "scissors") {
            winner = "user";
        } else if (userChoice === "scissors" && computerChoice === "rock") {
            winner = "computer";
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            winner = "user";
        } else if (userChoice === "paper" && computerChoice === "scissors") {
            winner = "computer";
        } else if (userChoice === "lizard" && computerChoice === "paper") {
            winner = "user";
        } else if (userChoice === "paper" && computerChoice === "lizard") {
            winner = "computer";
        } else if (userChoice === "lizard" && computerChoice === "spock") {
            winner = "user";
        } else if (userChoice === "spock" && computerChoice === "lizard") {
            winner = "computer";
        } else if (userChoice === "spock" && computerChoice === "rock") {
            winner = "user";
        } else if (userChoice === "rock" && computerChoice === "spock") {
            winner = "computer";
        } else if (userChoice === "spock" && computerChoice === "scissors") {
            winner = "user";
        } else if (userChoice === "scissors" && computerChoice === "spock") {
            winner = "computer";
        } else {
            console.log(`Choice: "${userChoice}" is not a recogized type.`);
            throw `Choice: "${userChoice}" is not a recogized type.`;
        }
    }
    return winner;
}

console.log(CheckLogic(userChoice, computerChoice));