var playerName = "Challenger"; // Default name if no name is provided

function promptForName() {
  playerName = prompt("Please enter your name:", "Challenger");
  if (playerName !== null && playerName.trim() !== "") {
    document.getElementById(
      "yourname"
    ).innerText = `Hi ${playerName}, how would you like to play?`;
  } else {
    playerName = "Challenger";
    document.getElementById("yourname").innerText =
      "Hi Player, how would you like to play?";
  }
}

function initialize() {
  promptForName(); // Prompt for user's name
  myGrid = new Grid();
  moves = 0;
  winner = 0;
  gameOver = false;
  whoseTurn = player;
  for (var i = 0; i <= myGrid.cells.length - 1; i++) {
    myGrid.cells[i] = 0;
  }
  // Show the options dialog only once
  showOptions();
}
