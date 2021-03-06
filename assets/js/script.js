
var choices = ["rock", "paper", "scissors", "lizard", "spock"];

let userScore = 0;
let computerScore = 0;
let winner = '';
let maxScore = 3;

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("choice-btn");
    let gameTypeButtons = document.getElementsByClassName("game-type-btn");

    for (let button of buttons){
        button.addEventListener('click', function(){

                let userChoice = this.getAttribute('data-type');
                let compChoice = choices[parseInt(calculateComputerChoice())];
                CheckLogic(userChoice, compChoice);
                DisplayTextChoices(userChoice, compChoice);
                SetChoiceImages(userChoice, compChoice)
                updateScores(winner);
                showWinner(winner);

                console.log(userScore, computerScore, winner);
                
        });
    }

    for (let gameTypeButton of gameTypeButtons){
        gameTypeButton.addEventListener('click', function(){
            let typeChoice = this.getAttribute('data-type');
            
            CheckGameType(typeChoice);
        });
    }
});

function DisplayTextChoices(userChoice, computerChoice){
    document.getElementById('user-choice-text').innerHTML = userChoice;
    document.getElementById('computer-choice-text').innerHTML = computerChoice;
}

/** Checks what the input of game-type is and changes game-type to relevent values. */
function CheckGameType(gameType){
    if(gameType === "reset"){
        ResetGame();
    } else {
        maxScore = parseInt(gameType);
        document.getElementById("you-are-playing").innerHTML = `First to ${maxScore}`;
    }
}


/** Reset back to values displayed on opening page. */
function ResetGame(){
    userScore = 0;
    computerScore = 0;
    maxScore = 3;

    document.getElementById('show-winner').innerHTML = 'Click a button to begin!'
    document.getElementById("score-label").innerHTML = '0:0';
    document.getElementById("you-are-playing").innerHTML = `First to ${maxScore}`;



}

/** Display message for round win and alert for overall win. Takes input of 'winner' which is a string of computer or user. */
function showWinner(winner){
    if (winner === "user"){
        document.getElementById("show-winner").innerHTML = `You beat the computer! <i class="far fa-laugh-beam"></i>`;
    }else if(winner === "computer"){
        document.getElementById("show-winner").innerHTML = `Haha! I bet you! <i class="far fa-smile-beam"></i>`;
    }else{
        document.getElementById("show-winner").innerHTML = "Great minds think alike!";
    }

    if (userScore === maxScore){
        alert("You Win!");
        ResetGame();
    }else if (computerScore === maxScore){
        alert("The Computer Wins!")
        ResetGame();
    } else{
        return;
    }
}

/** Increment player or computer score by 1 and display the total score. Takes input of 'Winner' which is a string of user or computer. */
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

/** A random number generator for 1 - 5 so that the computer choice can be determined. */
function calculateComputerChoice(){
    let choice = Math.floor(Math.random() * 5);
    return choice;
}

/** This will set the choice images for the computer and the user. */
function SetChoiceImages(userChoice, compChoice){
    let userChoiceImage =  document.getElementById("user-choice");
   userChoiceImage.style.setProperty('background-image', `url(https://raw.githubusercontent.com/DazHaze/RPSLS-Code-Institute-Project-2/main/assets/images/${userChoice}.png)`);

   let compChoiceImage =  document.getElementById("computer-choice");
   compChoiceImage.style.setProperty('background-image', `url(https://raw.githubusercontent.com/DazHaze/RPSLS-Code-Institute-Project-2/main/assets/images/${compChoice}.png)`);
}

/** Use this to check if the user wins or loses by inputting a string for both players. */
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
            winner = "computer";
        } else if (userChoice === "paper" && computerChoice === "spock") {
            winner = "user";
        } else if (userChoice === "spock" && computerChoice === "paper") {
            winner = "computer";
        }else {
            console.log(`Choice: "${userChoice}" is not a recogized type.`);
            throw `Choice: "${userChoice}" is not a recogized type.`;
        }
    }
    console.log(winner);
    return winner;
    
}
