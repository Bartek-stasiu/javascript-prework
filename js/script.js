var playerMove, playerInput;
playerInput = prompt('Wybierz sw�j ruch! 1: kamie�, 2: papier, 3: no�yce.');
console.log('Wpisana odpowied� to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamie�';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'no�yce';
} else {
  playerMove = 'kamie�';
}
printMessage('Tw�j ruch: ' + playerMove);