var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
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

/**
 * Describe this function...
 */
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
playerInput = prompt('Wybierz sw�j ruch! 1: kamie�, 2: papier, 3: no�yce.');
console.log('wyb�r ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);