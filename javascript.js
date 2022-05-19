

function computerPlay() {
    let x = Math.floor(Math.random()*3+1);
    if (x==1) return "rock";
    if (x==2) return "paper";
    else return "scissors";
    
}



function playRound(playerSelection, computerSelection) {
    const msg = document.querySelector('.msg');
    const computerPlay = document.querySelector('.computer-play');
    computerPlay.textContent = `Computer plays: ${computerSelection}` ;
    let result;
    if (playerSelection!=computerSelection) {
            if (playerSelection=="rock") {
                if (computerSelection=="paper") {
                    msg.textContent = "You loose, paper beats rock";
                    return result = 0 ;    
                }
                else if (computerSelection=="scissors") {
                    msg.textContent = "You win, rock beats scissors";
                    return result = 1 ;
                }
            }
            else if (playerSelection=="paper") {
                if (computerSelection=="scissors") {
                    msg.textContent = "You loose, scissors beats paper";
                    return result = 0 ;
                }
                else if (computerSelection=="rock") {
                     msg.textContent = "You win, paper beats rock";
                     return result = 1 ;
                }
            }

            else {
                if (computerSelection=="rock") {
                    msg.textContent = "You loose, rock beats scissors";
                    return result = 0 ;
                }
                else if (computerSelection=="paper") {
                    msg.textContent = "You win, scissors beats paper";
                    return result = 1 ;
                }
            }
    }

    else {
    msg.textContent = "It's a tie";
    return 0;
    }
}
  
function game(rounds) {
    let score = 0 ;
    for (let i = 0; i < rounds ; i++) {
        let playerplay = playerInput();
        score += playRound(playerplay,computerPlay());
    }

    //msg.textContent("final score is :");//
   // msg.textContent("Player : ",score);//
    //msg.textContent("Compuer : ",rounds-score);//

    //if (score > rounds/2) return msg.textContent ("Player wins the game");
    //else return msg.textContent ("Computer wins the game");//
  }

function playerInput(){
    while (true){
        let input = prompt("Rock, Paper or Scissors ? ");
        input = input.toLowerCase();
        if (input == "rock" || input== "paper" || input == "scissors") {
         msg.textContent(input)  ; 
         return input; 
        }
    }
}

const btn = document.querySelectorAll('.btn');

btn.forEach(e => e.addEventListener('click', event => {
  let play = playRound(e.id, computerPlay());
}));