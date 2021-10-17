var choices = ["rock","paper", "scissors", "lizard", "spock"];

for (let index = 0; index < choices.length; index++) {
    const element = choices[index];
    console.log(element);
}

var userChoice = "test";
var computerChoice = "scissors";

function CheckLogic(userChoice,computerChoice){
    if (userChoice === computerChoice){
        console.log("It's a tie!")
    } else{
        if(userChoice === "rock" && computerChoice === "paper"){
            console.log("You Win!")
        }else if(userChoice === "paper" && computerChoice === "rock"){
            console.log("You Lost :(")
        } else if(userChoice === "rock" && computerChoice === "scissors"){
            console.log("You Win!")
        }else if(userChoice === "scissors" && computerChoice === "rock"){
            console.log("You Lost :(")
        } else if(userChoice === "scissors" && computerChoice === "paper"){
            console.log("You Win!")
        }else if(userChoice === "paper" && computerChoice === "scissors"){
            console.log("You Lost :(")
        } else {
            console.log(`Choice: "${userChoice}" is not a recogized type.`);
            throw `Choice: "${userChoice}" is not a recogized type.`;
        }
    }
}

CheckLogic(userChoice, computerChoice);