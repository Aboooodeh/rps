function getComputerChoice() {         //This function is to get computer choice
  let choices = ["rock", "paper", "scissors"];

  let index = Math.floor(Math.random() * 3);

  return choices[index];
}

function round(hc, cc) {                        //This function is to determine the winner
  let result;                                   // h = Human , c = Computer
  hc = hc.toLowerCase();
  if (hc === cc) result = "t";
  else {
    if (hc === "rock") {
      if (cc === "scissors") result = "h";
      if (cc === "paper") result = "c";
    } else if (hc === "scissors") {
      if (cc === "paper") result = "h";
      if (cc === "rock") result = "c";
    } else if (hc === "paper") {
      if (cc === "scissors") result = "c";
      if (cc === "rock") result = "h";
    } else result = "e";
  }
  return result;
}

function game() {                                                     //This function is to start a game;
  let hs = 0;
  let cs = 0;
  for (let i = 0; i < 5; i++) {
    let result = round(
      prompt("enter Rock, Paper, Scissors"),
      getComputerChoice()
    );
    if (result === "h") hs++;
    else if (result === "t") cs++;
    else if (result === "e") {
      console.log("input error, try again");                 // this to cancel the round if the input is invalid
      i--;
    }
    console.log(`Your score is ${hs}, Computer score ${cs}`);
    if (hs >= 3 || cs >= 3) break;
  }
  if (hs > cs) console.log("You Win");
  else console.log("You Lose");
}
