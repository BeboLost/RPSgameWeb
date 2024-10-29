let massage;
let wins = 0;
let loses = 0;

function randomizer() {
  return Math.random();
}

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
    wins += 1;
    document.getElementById("msg").innerHTML = 'You won!'

  } else if (result === 'lose') {
    loses += 1;
    document.getElementById("msg").innerHTML = 'You lose!'

  } else {
    document.getElementById("msg").innerHTML = `It's a tie`
  }


  document.getElementById("wins1").innerHTML = `Wins: ${wins}`;
  document.getElementById("loses1").innerHTML = `Loses: ${loses}`;
}

function resetGame(reseter) {
  if (reseter === 'rest') {
    massage = '';
    wins = 0;
    loses = 0;
  }

  document.getElementById("wins1").innerHTML = `Wins: ${wins}`;
  document.getElementById("loses1").innerHTML = `Loses: ${loses}`;
  document.getElementById("msg").innerHTML = `Reseted`
}