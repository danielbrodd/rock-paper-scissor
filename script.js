
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
    }else return "chaos!";
}

// one round
function playRound (playerSelection , computerSelection = getComputerChoice()) {
    let message = ''
     playerSelection = playerSelection.toUpperCase()
    console.log(`You played: ${playerSelection}`)
         if (playerSelection == "ROCK" && computerSelection != "Rock") {
            playerSelection == "ROCK" && computerSelection == "Paper" ? message = "You loose" : message = "You Win";
        } else if (playerSelection == "PAPER" && computerSelection != "Paper") {
            playerSelection == "PAPER" && computerSelection == "Scissor" ? message = "You loose": message = "You Win";
        } else if (playerSelection == "SCISSOR" && computerSelection != "Scissor") {
            playerSelection == "SCISSOR" && computerSelection == "Rock" ? message = "You loose": message = "You win";
        }
        else message = "DRAW!" ;
        console.log(`The computer played: ${computerSelection.toUpperCase()}`);
        return message ;
    }

//  game 
function game(n) {
    let playerSelection = prompt()
    for (let i = 0 ; i < n; i++) {
        playRound(playerSelection);
        
    }
}
// 
/* [Log] You played: PAPER (script.js, line 25)
[Log] The computer played: PAPER (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: SCISSOR (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: SCISSOR (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: ROCK (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: PAPER (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: PAPER (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: ROCK (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: SCISSOR (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: SCISSOR (script.js, line 34)
[Log] You played: PAPER (script.js, line 25)
[Log] The computer played: ROCK (script.js, line 34)
< undefined */