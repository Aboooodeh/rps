let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resultt = document.getElementById("result");
let hs = 0;
let cs = 0; 

function getComputerChoice() {

  let choices = ["rock", "paper", "scissors"];

  let index = Math.floor(Math.random() * 3);

  return choices[index];
}

function round(e) {

  const cc=getComputerChoice();
  let hc=e.target.innerText;                                                     
  hc = hc.toLowerCase();
  let result = '';
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
  if (result === "t") resultt.innerText="Tie";
else if (result === "h") {
  hs++;
  if(hs===5){
    resultt.innerText="You Won the game";
    rock.removeEventListener("click", round);
    paper.removeEventListener("click", round);
    scissors.removeEventListener("click", round);
  }
  else resultt.innerText=`You won the round\nYour score is ${hs}, Computer score is ${cs}`;
} else if (result === "c") {
  cs++;
  if(cs===5){
    resultt.innerText="You Lost the game";
    rock.removeEventListener("click", round);
    paper.removeEventListener("click", round);
    scissors.removeEventListener("click", round);
  }
  else resultt.innerText=`Computer won the round\nYour score is ${hs}, Computer score is ${cs}`;

}
}
rock.addEventListener("click", round);
paper.addEventListener("click", round);
scissors.addEventListener("click", round);
