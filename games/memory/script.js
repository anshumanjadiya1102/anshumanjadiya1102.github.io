let symbols = ["🍎","🍌","🍇","🍒","🥝","🍍","🥕","🍆"];
let board = document.getElementById("game-board");
let flippedCards = [];
let matched = 0;

function startGame() {
  board.innerHTML = "";
  matched = 0;
  flippedCards = [];
  let diff = document.getElementById("difficulty").value;
  let pairs = diff === "easy" ? 4 : diff === "medium" ? 6 : 8;
  let gameSymbols = symbols.slice(0, pairs);
  let cards = [...gameSymbols, ...gameSymbols].sort(() => Math.random() - 0.5);

  board.style.gridTemplateColumns = `repeat(${pairs}, 80px)`;
  
  cards.forEach(symbol => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.innerText = "?";
    card.addEventListener("click", () => flipCard(card));
    board.appendChild(card);
  });
}

function flipCard(card) {
  if (card.classList.contains("flipped") || flippedCards.length === 2) return;
  card.innerText = card.dataset.symbol;
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 800);
  }
}

function checkMatch() {
  let [c1, c2] = flippedCards;
  if (c1.dataset.symbol !== c2.dataset.symbol) {
    c1.innerText = "?";
    c2.innerText = "?";
    c1.classList.remove("flipped");
    c2.classList.remove("flipped");
  } else {
    matched++;
    if (matched === symbols.length) {
      setTimeout(() => alert("🎉 You win!"), 200);
    }
  }
  flippedCards = [];
}

