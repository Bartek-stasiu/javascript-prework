var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywo³ano funkcjê getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamieñ';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'no¿yce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zak³adam, ¿e chodzi³o o "kamieñ".');
    return 'kamieñ';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywo³ano funkcjê displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamieñ') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamieñ' && argComputerMove == 'no¿yce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'no¿yce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagra³em ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamieñ, 2: papier, 3: no¿yce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);