var choices = ["rock", "paper", "scissors", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("choice-btn");

    for (let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') == 'submit'){
                checkAnswer();
                
            } else{
                let userChoice = this.getAttribute('data-type');
                CheckLogic(userChoice, "rock");
            }
        })
    }
})


var userChoice = "spock";
var computerChoice = "lizard";

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
        } else if (userChoice === "scissors" && computerChoice === "lizard") {
            winner = "user";
        } else if (userChoice === "lizard" && computerChoice === "scissors") {
            winner = "computer"
        } else {
            console.log(`Choice: "${userChoice}" is not a recogized type.`);
            throw `Choice: "${userChoice}" is not a recogized type.`;
        }
    }
    console.log(winner);
    return winner;
    
}
