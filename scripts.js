let wins1 = 0;
let loses1 = 0;
let wins = 0;
let loses = 0;
let attempts = 0;





function randomizer() {
  return Math.random();
}

document.getElementById("enjoyMsg").innerHTML = 'New Game!';


function comover(comove) {
  let computerMove = '';
  if (comove > 0 && comove <= 1 / 3) {
    computerMove = 'rock';
  } else if (comove > 1 / 3 && comove <= 2 / 3) {
    computerMove = 'paper';
  } else if (comove > 2 / 3 && comove <= 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}




function newMove(playerMove) {
  const computerMove = comover(randomizer());
  if (computerMove === playerMove) {
    return 'tie';
  } else if (
    (computerMove === 'rock' && playerMove === 'paper') ||
    (computerMove === 'paper' && playerMove === 'scissors') ||
    (computerMove === 'scissors' && playerMove === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}






function playGame(playerMove) {
  
  const result = newMove(playerMove);
  
  
  if (result === 'win') {
    document.getElementById("msg").innerHTML = 'You won!';
    attempts += 1;
    wins1 += 1;


  } else if (result === 'lose') {
    document.getElementById("msg").innerHTML = 'You lose!';
    attempts += 1;
    loses1 += 1;


  } else {
    document.getElementById("msg").innerHTML = `It's a tie`;
    attempts += 1;

  }
  console.log(attempts);
  enderpopup();

  
}




function resetGame() {
    
    
    wins1 = 0;
    loses1 = 0;
    attempts = 0;

  document.getElementById("wins1").innerHTML = `Wins: ${wins}`;
  document.getElementById("loses1").innerHTML = `Loses: ${loses}`;
  document.getElementById("msg").innerHTML = `Reseted`
}





function endGame(plrState, comState) {
  
  let result;
  
  if (plrState > comState) {
    result = 'won!';
  } else if (plrState < comState){
    result = 'lost!';
  } else {
    result = `didn't lose or win..` 
  }
  
  return result;
}





function endGamePopUp() {
  document.querySelector('dialog').showModal();
}






function fname() {
   
  resetGame();

  document.getElementById('popupDialog').close();
  
}





function endGamePopUp() {
  document.querySelector('dialog').showModal();
  
  document.getElementById("plrWC").innerHTML = `${wins1}`;
  
  document.getElementById("comWC").innerHTML = `${loses1}`;
  
  document.getElementById("rslt").innerHTML = `${endGame(wins1, loses1)}`;
  
  document.getElementById("enjoyMsg").innerHTML = 'Enjoy New Game!';
  
  let a = endGame(wins1, loses1);
  
  if (a === 'won!') {
    wins += 1;
  } else if (a === 'lost!') {
    loses += 1;
  }
}





function enderpopup() {
  if (attempts === 3 || attempts > 3) {
    return endGamePopUp();
  }

    }
