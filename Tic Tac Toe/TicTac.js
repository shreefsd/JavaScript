let currentPlayer = "X";
let moves = {
  X: [],
  O: []
};
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function makeMove(gridId) {
  const button = document.getElementById(gridId.toString());
  if (button.innerText !== "") return;

  button.innerText = currentPlayer;
  moves[currentPlayer].push(gridId);

  if (checkWin(currentPlayer)) {
    if(currentPlayer==='X'){
      alert(`Congratulations! Player1 wins`);
      resetGame();
      return;
    }else{
      alert(`Congratulations! Player2 wins`);
      resetGame();
      return;
    }
  }

  if (checkDraw()) {
    alert("Draw!");
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin(player) {
  const playerMoves = moves[player];

  for (const combination of winningCombinations) {
    if (
      combination.every((gridId) => playerMoves.includes(gridId))
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  const totalMoves = moves.X.length + moves.O.length;
  return totalMoves === 9;
}

function resetGame() {
  currentPlayer = "X";
  moves = {
    X: [],
    O: []
  };

  const buttons = document.querySelectorAll(".grid button");
  buttons.forEach((button) => {
    button.innerText = "";
  });
}