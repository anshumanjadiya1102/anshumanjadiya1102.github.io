let canvas, ctx;
let snake, food, dx, dy, gameInterval;
let box = 20;
let score = 0;
let speed = 200;

function startGame() {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  snake = [{x: 9 * box, y: 10 * box}];
  food = spawnFood();
  dx = box;
  dy = 0;
  score = 0;

  let diff = document.getElementById("difficulty").value;
  speed = diff === "easy" ? 200 : diff === "medium" ? 120 : 80;

  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(draw, speed);

  document.getElementById("status").innerText = "Game started! Score: 0";
}

function spawnFood() {
  return {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
  };
}

document.addEventListener("keydown", direction);

function direction(e) {
  if (e.key === "ArrowLeft" && dx === 0) { dx = -box; dy = 0; }
  else if (e.key === "ArrowUp" && dy === 0) { dx = 0; dy = -box; }
  else if (e.key === "ArrowRight" && dx === 0) { dx = box; dy = 0; }
  else if (e.key === "ArrowDown" && dy === 0) { dx = 0; dy = box; }
}

function draw() {
  ctx.fillStyle = "#1e1f29";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? "#50fa7b" : "#bd93f9";
    ctx.fillRect(part.x, part.y, box, box);
    ctx.strokeStyle = "#282a36";
    ctx.strokeRect(part.x, part.y, box, box);
  });

  ctx.fillStyle = "#ff79c6";
  ctx.fillRect(food.x, food.y, box, box);

  let headX = snake[0].x + dx;
  let headY = snake[0].y + dy;

  if (headX === food.x && headY === food.y) {
    food = spawnFood();
    score++;
    document.getElementById("status").innerText = `Score: ${score}`;
  } else {
    snake.pop();
  }

  let newHead = {x: headX, y: headY};

  if (
    headX < 0 || headY < 0 ||
    headX >= canvas.width || headY >= canvas.height ||
    snake.some(part => part.x === headX && part.y === headY)
  ) {
    clearInterval(gameInterval);
    document.getElementById("status").innerText = `💀 Game Over! Final Score: ${score}`;
    return;
  }

  snake.unshift(newHead);
}
