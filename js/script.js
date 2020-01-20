var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamieñ, 2: papier, 3: no¿yce.');
console.log('Wpisana odpowiedŸ to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamieñ';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'no¿yce';
} else {
  playerMove = 'kamieñ';
}
printMessage('Twój ruch: ' + playerMove);