const options = ["rock", "paper", "scissors"];
 
function getComputerChoice () {
     const choice = options[Math.floor(Math.random() * options.length)];
     return choice;
}
function checkWinner(playerSelection, computerSelection){
 if(playerSelection == computerSelection){
   return "Tie";
 }
 else if(
       (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
 ){
   return "player";
 }
   else {return "computer"
 }
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
if(result == "Tie"){
 return "It's a Tie!"
}
else if(result == "player"){
 return  `You're the Winner! ${playerSelection} beats ${computerSelection}`
}
else{
 return `You Lose! ${computerSelection} beats ${playerSelection}`
}
}


function getPlayerChoice(){
 let validatedInput = false;
 while(validatedInput == false){
   const choice = prompt("rock, paper or scissors");
   if(choice == null){
     continue;
   }
   const choiceInLower = choice.toLowerCase();
   if(options.includes(choiceInLower)){
     validatedInput = true;;
     return choiceInLower;
   }
 }
}

function game(){
 let scorePlayer = 0
 let scoreComputer = 0;
 for (let i = 0; i < 5; i++) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection)); 
  if(checkWinner(playerSelection, computerSelection) == "player"){
   scorePlayer++;
  } 
  else if(checkWinner(playerSelection, computerSelection) == "computer"){
   scoreComputer++
  }
}
console.log("Game over");
if(scorePlayer > scoreComputer){
 console.log("Player Wins!");
}
 else if(scoreComputer > scorePlayer){
   console.log("Computer Wins!");
 }
 else{
   console.log("Its a Tie")
 }
}

game()