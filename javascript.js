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
    return 2;
    }
}
  
function game(rounds) {
    let score = 0 ;
    for (let i = 0; i < rounds ; i++) {
        let playerplay = playerInput();
        score += playRound(playerplay,computerPlay());
    }
}

function playerInput(){
    while (true){
        let input = prompt("Rock, Paper or Scissors ? ");
        input = input.toLowerCase();
        if (input == "rock" || input== "paper" || input == "scissors") {
         return input; 
        }
    }
}

let score = 0;
let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll('.btn');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

btn.forEach(e => e.addEventListener('click', event => {
  score = playRound(e.id, computerPlay());
  if (score == 1) playerScore++;
  if (score == 0) computerScore++;
  if (score == 2) {
    playerScore++; 
    computerScore++;
  }

  player.textContent = `${playerScore}`;
  computer.textContent = `${computerScore}`;

  if(playerScore == 5 || computerScore == 5) {
    computerPlay.textContent = '';
    if(playerScore == 5) alert('PLAYER WINS!!!');
    else alert('COMPUTER WINS!!!'); 
    window.location.reload();
    return false;
  }
}));

