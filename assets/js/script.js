
var choices = ["rock", "paper", "scissors", "lizard", "spock"];

let userScore = 0;
let computerScore = 0;
let winner = '';

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("choice-btn");

    for (let button of buttons){
        button.addEventListener('click', function(){

                let userChoice = this.getAttribute('data-type');
                let compChoice = choices[parseInt(calculateComputerChoice())];
                CheckLogic(userChoice, compChoice);
                setUserChoiceImage(userChoice);
                setComputerChoiceImage(compChoice)
                updateScores(winner);
                showWinner(winner);

                console.log(userScore, computerScore, winner);
                
        })
    }
})

function showWinner(winner){
    if (winner === "user"){
        document.getElementById("show-winner").innerHTML = `You beat the computer! <i class="far fa-laugh-beam"></i>`;
    }else if(winner === "computer"){
        document.getElementById("show-winner").innerHTML = `Haha! I bet you! <i class="far fa-smile-beam"></i>`;
    }else{
        document.getElementById("show-winner").innerHTML = "Great minds think alike!";
    }
}

function updateScores(winner){
    if(winner === "user"){
        userScore = userScore + 1;
        document.getElementById("score-label").innerHTML = `${userScore}:${computerScore}`;
    }else if(winner === "computer"){
        computerScore = computerScore + 1;
        document.getElementById("score-label").innerHTML = `${userScore}:${computerScore}`;
    }else{
        return;
    }
}

function calculateComputerChoice(){
    let choice = Math.floor(Math.random() * 5);
    return choice;
}


function setUserChoiceImage(userChoice){
   let choiceImage =  document.getElementById("user-choice");
   choiceImage.style.setProperty('background-image', `url(/assets/images/${userChoice}.png)`);
}

function setComputerChoiceImage(userChoice){
    let choiceImage =  document.getElementById("computer-choice");
    choiceImage.style.setProperty('background-image', `url(/assets/images/${userChoice}.png)`);
 }

function CheckLogic(userChoice, computerChoice) {
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
        } else if (userChoice === "rock" && computerChoice === "lizard") {
            winner = "user";
        } else if (userChoice === "lizard" && computerChoice === "rock") {
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
        } else if (userChoice === "paper" && computerChoice === "spock") {
            winner = "user";
        } else if (userChoice === "spock" && computerChoice === "paper") {
            winner = "computer"
        }else {
            console.log(`Choice: "${userChoice}" is not a recogized type.`);
            throw `Choice: "${userChoice}" is not a recogized type.`;
        }
    }
    console.log(winner);
    return winner;
    
}
