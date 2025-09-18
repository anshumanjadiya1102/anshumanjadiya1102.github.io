const board = document.querySelector('.game-board');
const restartBtn = document.getElementById('restart');
const emojis = ['🍎','🍌','🍇','🍒','🥝','🍍','🍑','🍉'];
let cards = [...emojis, ...emojis];
let flippedCards = [];
let matchedCount = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  board.innerHTML = '';
  cards = shuffle(cards);
  cards.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = symbol;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (this.classList.contains('flipped') || flippedCards.length === 2) return;
  this.classList.add('flipped');
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;
  if (c1.textContent === c2.textContent) {
    matchedCount++;
    flippedCards = [];
    if (matchedCount === emojis.length) {
      setTimeout(() => alert('🎉 You Won!'), 300);
    }
  } else {
    setTimeout(() => {
      c1.classList.remove('flipped');
      c2.classList.remove('flipped');
      flippedCards = [];
    }, 800);
  }
}

restartBtn.addEventListener('click', () => {
  matchedCount = 0;
  flippedCards = [];
  createBoard();
});

createBoard();
