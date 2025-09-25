const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

let snake = [{x: 200, y: 200}];
let direction = 'RIGHT';
let food = {x: 100, y: 100};
let box = 20;
let score = 0;

document.addEventListener('keydown', changeDirection);

function changeDirection(e) {
  if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  else if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
  else if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  else if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
}

function draw() {
  ctx.clearRect(0, 0, 400, 400);

  snake.forEach((s, i) => {
    ctx.fillStyle = i === 0 ? 'lime' : 'green';
    ctx.fillRect(s.x, s.y, box, box);
  });

  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box);

  let head = {...snake[0]};
  if (direction === 'UP') head.y -= box;
  if (direction === 'DOWN') head.y += box;
  if (direction === 'LEFT') head.x -= box;
  if (direction === 'RIGHT') head.x += box;

  if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 || snake.some(s => s.x === head.x && s.y === head.y)) {
    alert('Game Over! Final Score: ' + score);
    snake = [{x: 200, y: 200}];
    direction = 'RIGHT';
    score = 0;
  } else {
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreEl.textContent = 'Score: ' + score;
      food = {x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box};
    } else {
      snake.pop();
    }
  }
}

setInterval(draw, 150);
