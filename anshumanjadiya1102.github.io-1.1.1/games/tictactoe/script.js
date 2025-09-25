const board = document.querySelector('.board');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let cells = Array(9).fill(null);

function createBoard() {
  board.innerHTML = '';
  cells = Array(9).fill(null);
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(i, cell));
    board.appendChild(cell);
  }
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function makeMove(i, cell) {
  if (cells[i] || checkWinner()) return;
  cells[i] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');
  if (checkWinner()) {
    statusText.textContent = `🎉 Player ${currentPlayer} wins!`;
  } else if (cells.every(c => c)) {
    statusText.textContent = "It's a draw!";
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return wins.some(([a,b,c]) => 
    cells[a] && cells[a] === cells[b] && cells[a] === cells[c]
  );
}

restartBtn.addEventListener('click', createBoard);

createBoard();
