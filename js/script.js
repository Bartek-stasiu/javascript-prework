var buttonRock, buttonPaper, buttonTest, buttonScissors;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' zosta� klikni�ty');

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

function getMoveName(argMoveId) {
  console.log('wywo�ano funkcj� getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamie�';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'no�yce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zak�adam, �e chodzi�o o "kamie�".');
    return 'kamie�';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywo�ano funkcj� displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamie�') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamie�' && argComputerMove == 'no�yce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'no�yce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagra�em ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}

buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik kamie�'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik no�yczki'); });
