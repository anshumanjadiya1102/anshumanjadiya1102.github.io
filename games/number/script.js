let secretNumber, maxNumber, attempts;

function startGame() {
  let diff = document.getElementById("difficulty").value;
  if (diff === "easy") maxNumber = 10;
  else if (diff === "medium") maxNumber = 50;
  else maxNumber = 100;

  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;

  document.getElementById("instruction").innerText =
    `Guess a number between 1 and ${maxNumber}`;
  document.getElementById("result").innerText = "";

  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessBtn").disabled = false;
  document.getElementById("guessInput").value = "";
}

function makeGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  if (!guess || guess < 1 || guess > maxNumber) {
    document.getElementById("result").innerText = "⚠️ Enter a valid number!";
    return;
  }

  attempts++;
  if (guess === secretNumber) {
    document.getElementById("result").innerText =
      `🎉 Correct! The number was ${secretNumber}. Attempts: ${attempts}`;
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
  } else if (guess < secretNumber) {
    document.getElementById("result").innerText = "🔼 Too low! Try again.";
  } else {
    document.getElementById("result").innerText = "🔽 Too high! Try again.";
  }
}
