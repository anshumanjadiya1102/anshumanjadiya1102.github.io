let secretNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('check');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess) {
    message.textContent = '❌ Please enter a number';
    return;
  }
  if (guess === secretNumber) {
    message.textContent = '🎉 Correct! You guessed the number!';
  } else if (guess < secretNumber) {
    message.textContent = '⬆️ Too low!';
  } else {
    message.textContent = '⬇️ Too high!';
  }
});

restartBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = '';
  message.textContent = 'New game started!';
});
