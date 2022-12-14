
// random integer between 1-3

function randomInt (){ 
    let rInt = Math.floor(Math.random()* (3-1+1)+1);
    return rInt;
}
// random computer choice based on randomInt result
function getComputerChoice() {
    let rInt = parseInt(randomInt());
  
    if (rInt == 1) {
        return "Rock";
    } else if (rInt == 2) {
        return "Paper";
    } else if (rInt == 3) {
        return "Scissor";
    }else return "you chose chaos!";
}

// game
function playRound (playerSelection = prompt().toUpperCase(), computerSelection = getComputerChoice()) {
    let message = ''
    
    if (playerSelection == "ROCK" && computerSelection != "Rock") {
        playerSelection == "ROCK" && computerSelection == "Paper" ? message = "You loose" : message = "You Win";
    } else if (playerSelection == "PAPER" && computerSelection != "Paper") {
        playerSelection == "PAPER" && computerSelection == "Scissor" ? message = "You loose": message = "You Win"
    } else if (playerSelection == "SCISSOR" && computerSelection != "Scissor") {
        playerSelection == "SCISSOR" && computerSelection == "Rock" ? message = "You loose": message = "You win";
    }
    else message = "DRAW!" ;
    console.log(computerSelection);
    return message ;
    
}
