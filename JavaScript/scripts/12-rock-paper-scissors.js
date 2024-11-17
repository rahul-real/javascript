let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/
let intervalId;

function autoPlay() {
  const element = document.querySelector('.auto-playing');
  console.log(element);
  const autoplaying = element.innerHTML;
  console.log(autoplaying);
  if(autoplaying === 'Auto Play'){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
  document.querySelector('.auto-playing').innerHTML = 'Stop Auto playing';
  }else{
    clearInterval(intervalId);
    element.innerHTML = 'Auto Play';
  }

}
const playRock = () => {
  playGame('rock');
}

const playPaper = () => {
  playGame('paper');
}

const playScissors = () => {
  playGame('scissors');
}
document.querySelector('.js-rock-button')
  .addEventListener('click',playRock);

document.querySelector('.js-paper-button')
  .addEventListener('click',playPaper);

document.querySelector('.js-scissors-button')
  .addEventListener('click',playScissors);  

document.querySelector('.js-reset-score')
  .addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();    
  });

document.querySelector('.js-auto-playing-button')
  .addEventListener('click', () => {
    autoPlay();
  })

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'R' || event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'P' || event.key === 'p'){
    playGame('paper');
  }else if(event.key === 'S' || event.key === 's'){
    playGame('scissors');
  }else if(event.key==='a' || event.key === 'A'){
    autoPlay();
  }

})

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Backspace') {
    let resetMessage = document.querySelector('.js-reset-backspace');
    resetMessage.innerHTML = `Are you sure want to reset the score ? <button class = "js-yes-reset-btn">Yes</button> <button class ="js-no-reset-btn">No</button>`; 
    document.querySelector('.js-yes-reset-btn')
      .addEventListener('click', ()=>{
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        resetMessage.innerHTML = '';    
      })
    document.querySelector('.js-no-reset-btn')
      .addEventListener('click', () => {
        resetMessage.innerHTML = '';
      })
  }

});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

