
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
let result = []
// one round
function playRound (playerSelection , computerSelection = getComputerChoice()) {
    let message = ''
     playerSelection = playerSelection.toUpperCase()
/*     console.log(`You played: ${playerSelection}`)
    console.log(`It played: ${computerSelection}`) */
         if (playerSelection == "ROCK" && computerSelection != "Rock") {
            playerSelection == "ROCK" && computerSelection == "Paper" ? message = "You loose" : message = "You Win";
        } else if (playerSelection == "PAPER" && computerSelection != "Paper") {
            playerSelection == "PAPER" && computerSelection == "Scissor" ? message = "You loose": message = "You Win";
        } else if (playerSelection == "SCISSOR" && computerSelection != "Scissor") {
            playerSelection == "SCISSOR" && computerSelection == "Rock" ? message = "You loose": message = "You win";
        }
        else message = "DRAW!" ;
        result.push(message)
        return result ;
    }

//  game 
function game(n) {
    let playerSelection = prompt()
    for (let i = 0 ; i < n; i++) {
        let result = playRound(playerSelection);
        
    };
    return result;
}
// Returns all but the result for each match

/* function reverseString(string) {
    let stringLetters = string.split("")
   let reverseString =''
    for (let i = 0; i < stringLetters.length; i = i) {
      reverseString += stringLetters.pop();
    }
   console.log( stringLetters);
   console.log(reverseString);
  }; */

  const sumAll = function(value, maxValue) {
    let sum = 0
    for (let i = value; value <= (maxValue +1); i++) {
        sum += value;
    }
    return sum;
};



function primeMachine (n) {
    let primes = []
   nextPrime: for (i = 2; i <= n; i++) {
       for (j = 2; j < i ; j++) {
        if (i % j == 0) continue nextPrime;
       }
       primes.push(i)
    } return primes;
}


let decNum = 0.334;

let roundDecNum = decNum.toFixed(1);

console.log(`rounded number of ${decNum} is ${roundDecNum}`)