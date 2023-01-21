function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];

  let index = Math.floor(Math.random() * 3);

  return choices[index];
}

function round(ps, cs) {
  let result;
  ps = ps.toLowerCase();
  if (ps === cs) result = "It's a tie";
  else {
    if (ps === "rock") {
      if (cs === "scissors") result = "You Win, Rock beats Scissors";
      if (cs === "paper") result = "You Lose, Paper beats Rock";
    } else if (ps === "scissors") {
      if (cs === "paper") result = "You Win, Scissors beats Paper";
      if (cs === "rock") result = "You Lose, Rock beats Scissors";
    } else if (ps === "paper") {
      if (cs === "scissors") result = "You Lose, Scissors beats Paper";
      if (cs === "rock") result = "You Win, Paper beats Rock";
    } else result = "errorrrrrrr";
  }
  return result;
}
let g = "ROCK";
console.log(round(g, getComputerChoice()));
