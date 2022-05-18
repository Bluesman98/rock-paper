
function computerPlay() {
    let x = Math.floor(Math.random()*3+1);
    if (x==1) return "rock";
    if (x==2) return "paper";
    else return "scissors";
    
}



function playRound(playerSelection, computerSelection) {
    console.log("Player's pick: ",playerSelection);
    console.log("Computer's pick :" ,computerSelection);
    let result;
    if (playerSelection!=computerSelection) {
            if (playerSelection=="rock") {
                if (computerSelection=="paper") {
                    console.log("You loose, paper beats rock");
                    return result = 0 ;    
                }
                else if (computerSelection=="scissors") {
                    console.log("You win, rock beats scissors");
                    return result = 1 ;
                }
            }
            else if (playerSelection=="paper") {
                if (computerSelection=="scissors") {
                    console.log("You loose, scissors beats paper");
                    return result = 0 ;
                }
                else if (computerSelection=="rock") {
                     console.log("You win, paper beats rock");
                     return result = 1 ;
                }
            }

            else {
                if (computerSelection=="rock") {
                    console.log("You loose, rock beats scissors");
                    return result = 0 ;
                }
                else if (computerSelection=="paper") {
                    console.log("You win, scissors beats paper");
                    return result = 1 ;
                }
            }
    }

    else {
    console.log("It's a tie");
    return 0;
    }
}
  
function game(rounds) {
    let score = 0 ;
    for (let i = 0; i < rounds ; i++) {
        let playerplay = playerInput();
        score += playRound(playerplay,computerPlay());
    }

    console.log("final score is :");
    console.log("Player : ",score);
    console.log("Compuer : ",rounds-score);

    if (score > rounds/2) return console.log ("Player wins the game");
    else return console.log ("Computer wins the game");
  }

function playerInput(){
    while (true){
        let input = prompt("Rock, Paper or Scissors ? ");
        input = input.toLowerCase();
        if (input == "rock" || input== "paper" || input == "scissors") {
         console.log(input)  ; 
         return input; 
        }
    }
}

const btn = document.querySelectorAll('.btn');

btn.forEach(e => e.addEventListener('click', event => {
  let play = playRound(e.id,computerPlay());
}));