console.log("hello");

function computerPlay() {
    let x = Math.floor(Math.random()*3+1);
    if (x==1) return "rock";
    if (x==2) return "paper";
    else return "scissors";
    
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection!=computerSelection) {
            if (playerSelection=="rock") {
                if (computerSelection=="paper") return "You loose, paper beats rock";
                else if (computerSelection=="scissors") return "You win, rock beats scissors";
            }
            else if (playerSelection=="paper") {
                if (computerSelection=="scissors") return "You loose, scissors beats paper";
                else if (computerSelection=="rock") return "You win, paper beats rock";
            }

            else {
                if (computerSelection=="rock") return "You loose, rock beats scissors";
                else if (computerSelection=="paper") return "You win, scissors beats paper";
            }
    }
    
    else return "It's a tie";
}
  
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));