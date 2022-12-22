
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
let result = []
let playerScore = 0
let computerScore = 0
// one round
const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click',  () => playRound(button.id))

})

function playRound (playerSelection , computerSelection = getComputerChoice()) {
    
    let message = '';
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
   
    if (playerSelection === computerSelection)  message = "DRAW";

    else if((playerSelection == "ROCK" && computerSelection == "SCISSOR") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK")||
        (playerSelection == "SCISSOR" && computerSelection == "PAPER")){
            message = "WIN";
            playerScore++;
            }

    else {
        message = "LOST";
        computerScore++;
    }
    const gameResult = document.querySelector('.gameResult');
    const runningScore = document.querySelector('.runningScore');
    const option = document.querySelector('.option')
    
    result.push(message);
    gameResult.textContent = message;
    option.textContent = `Play chose: ${playerSelection} Computer chose: ${computerSelection}`
    if(playerScore === 5||computerScore === 5){
        let winner;
    if(playerScore === 5) {
        winner = ('Player wins!')
        
    }else if(computerScore === 5){
        winner = ('Copmuter wins!')
    }
    result = [];
    message = 'Play again?';
    playerScore = 0;
    computerScore = 0;
    playerSelection = '';
    computerSelection = ''
    option.textContent = winner
    gameResult.textContent = "Play again?";
    }
   
    runningScore.textContent = `Player score: ${playerScore}  Computer score: ${computerScore}`;
    
    console.log(result)
    

}



/* function playRound (playerSelection , computerSelection = getComputerChoice()) {
    let message = '';
    playerSelection = playerSelection.toUpperCase();
     if (playerSelection === null) return;
        if (playerSelection == "ROCK" && computerSelection != "Rock") {
            playerSelection == "ROCK" && computerSelection == "Paper" ? message = "You loose" : message = "You Win";
        } else if (playerSelection == "PAPER" && computerSelection != "Paper") {
            playerSelection == "PAPER" && computerSelection == "Scissor" ? message = "You loose": message = "You Win";
        } else if (playerSelection == "SCISSOR" && computerSelection != "Scissor") {
            playerSelection == "SCISSOR" && computerSelection == "Rock" ? message = "You loose": message = "You win";
        }
        else message = "DRAW!" ;
        result.push(message);
        
        gameResult.textContent = message;
        gameResult.textContent = (`You played ${playerSelection} result: ${message}`);
        runningScore.textContent = (result);
        return result ;
    } */

//Buttons



//Score board







//  multiple games
function game(n) {
    let playerSelection = prompt()
    for (let i = 0 ; i < n; i++) {
        let result = playRound(playerSelection);
        
    };
    return result;
}

// reset game counter

const resetGame = () => result = []
// Returns all but the result for each match

