    // const scoreCard = {
    //   win: 0,
    //   losses: 0,
    //   ties: 0,
    // }
    let computerMove = 0;
    console.log(localStorage.getItem('message'));
    console.log(localStorage.getItem('scoreCard'));
    let scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || {
      win: 0,
      losses: 0,
      ties: 0,
    };
    updateScore();
    console.log(scoreCard);
    function playgame(userMove) {
      pickComputerMove();
      if (userMove == 1) {
        if (1 == computerMove) {
          ++scoreCard.ties;
        } else if (computerMove == 2) {
          ++scoreCard.losses;
        } else if (computerMove == 3) {
          ++scoreCard.win;
        }
      } else if (userMove == 2) {
        if (1 == computerMove) {
          ++scoreCard.win;
        } else if (computerMove == 2) {
          ++scoreCard.ties;
        } else if (computerMove == 3) {
          ++scoreCard.losses;
        }
      } else if (userMove == 3) {
        if (1 == computerMove) {
          ++scoreCard.losses;
        } else if (computerMove == 2) {
          ++scoreCard.win;
        } else if (computerMove == 3) {
          ++scoreCard.ties;
        }       
      }   
      localStorage.setItem('message', 'hello');
      const score = JSON.stringify(scoreCard);
      localStorage.setItem('scoreCard', score);    
      updateScore();
      moves(userMove, computerMove);
       
    }
    function moves(userMove, computerMove){
      let umove = "";
      let cmove = "";
      if (computerMove == 1) {
        cmove = 'rock';
      } else if (computerMove == 2) {
        cmove = 'Paper';
      } else if (computerMove == 3) {
        cmove = 'scissors';
      }      
      if (userMove == 1) {
        umove = 'rock';
      } else if (userMove == 2) {
        umove = 'paper';
      } else if (userMove == 3) {
        umove = 'scissors';
      }
      document.querySelector('.js-moves')
        .innerHTML = `Your 
    <img src="./images/${umove}-emoji.png" class="move-icon" > 
    <img src="images/${cmove}-emoji.png" class="move-icon">
    Computer`;      
    }
    function updateScore(){
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${scoreCard.win}, Losses: ${scoreCard.losses} Ties: ${scoreCard.ties}`;  
    }
    function pickComputerMove() {
      computerMove = Math.floor(Math.random() * 3) + 1;
      console.log(`${computerMove}`);
    }