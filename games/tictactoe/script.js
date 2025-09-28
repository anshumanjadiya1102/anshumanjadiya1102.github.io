let board, cells, currentPlayer, gameActive;

function startGame() {
  let container = document.getElementById("board");
  container.innerHTML = "";
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", () => handleCellClick(i));
    container.appendChild(cell);
  }
  document.getElementById("status").innerText = "Your turn (X)";
}

function handleCellClick(i) {
  if (!gameActive || board[i] !== "") return;
  board[i] = currentPlayer;
  updateBoard();

  if (checkWin(currentPlayer)) {
    document.getElementById("status").innerText = `${currentPlayer} wins! 🎉`;
    gameActive = false;
    return;
  }
  if (!board.includes("")) {
    document.getElementById("status").innerText = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (currentPlayer === "O") {
    document.getElementById("status").innerText = "Computer's turn...";
    setTimeout(computerMove, 500);
  } else {
    document.getElementById("status").innerText = "Your turn (X)";
  }
}

function computerMove() {
  let difficulty = document.getElementById("difficulty").value;

  let move;
  if (difficulty === "easy") {
    let emptyCells = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  } else {
    // simple AI: try to win, then block, else random
    move = findBestMove() ?? randomMove();
  }

  board[move] = "O";
  updateBoard();

  if (checkWin("O")) {
    document.getElementById("status").innerText = "Computer wins! 🤖";
    gameActive = false;
    return;
  }
  if (!board.includes("")) {
    document.getElementById("status").innerText = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = "X";
  document.getElementById("status").innerText = "Your turn (X)";
}

function updateBoard() {
  document.querySelectorAll(".cell").forEach((cell, i) => {
    cell.innerText = board[i];
  });
}

function checkWin(player) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(pattern => pattern.every(i => board[i] === player));
}

function findBestMove() {
  // try to win
  for (let i=0; i<9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      if (checkWin("O")) { board[i] = ""; return i; }
      board[i] = "";
    }
  }
  // try to block
  for (let i=0; i<9; i++) {
    if (board[i] === "") {
      board[i] = "X";
      if (checkWin("X")) { board[i] = ""; return i; }
      board[i] = "";
    }
  }
  return null;
}

function randomMove() {
  let emptyCells = board.map((v,i)=> v===""?i:null).filter(v=>v!==null);
  return emptyCells[Math.floor(Math.random()*emptyCells.length)];
}

