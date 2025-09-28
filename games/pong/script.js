let canvas = document.getElementById("pongCanvas");
let ctx = canvas.getContext("2d");

let player, ai, ball;
let playerScore = 0, aiScore = 0;
let gameRunning = false;
let aiSpeed = 3;

function startGame() {
  let diff = document.getElementById("difficulty").value;
  if (diff === "easy") aiSpeed = 2;
  else if (diff === "medium") aiSpeed = 4;
  else aiSpeed = 6;

  player = { x: 10, y: canvas.height / 2 - 40, width: 10, height: 80 };
  ai = { x: canvas.width - 20, y: canvas.height / 2 - 40, width: 10, height: 80 };
  ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 8, dx: 4, dy: 4 };

  gameRunning = true;
  playerScore = 0;
  aiScore = 0;
  document.getElementById("score").innerText = `Player: 0 | AI: 0`;

  loop();
}

function loop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw paddles
  ctx.fillStyle = "#8be9fd";
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = "#ff79c6";
  ctx.fillRect(ai.x, ai.y, ai.width, ai.height);

  // Draw ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#f1fa8c";
  ctx.fill();
  ctx.closePath();

  // Move ball
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Bounce off top/bottom
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.dy *= -1;
  }

  // AI paddle movement
  if (ball.y < ai.y + ai.height / 2) ai.y -= aiSpeed;
  else if (ball.y > ai.y + ai.height / 2) ai.y += aiSpeed;

  // Paddle collision
  if (
    ball.x - ball.radius < player.x + player.width &&
    ball.y > player.y &&
    ball.y < player.y + player.height
  ) {
    ball.dx *= -1;
    ball.x = player.x + player.width + ball.radius;
  }
  if (
    ball.x + ball.radius > ai.x &&
    ball.y > ai.y &&
    ball.y < ai.y + ai.height
  ) {
    ball.dx *= -1;
    ball.x = ai.x - ball.radius;
  }

  // Scoring
  if (ball.x < 0) {
    aiScore++;
    resetBall();
  } else if (ball.x > canvas.width) {
    playerScore++;
    resetBall();
  }

  document.getElementById("score").innerText =
    `Player: ${playerScore} | AI: ${aiScore}`;

  requestAnimationFrame(loop);
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.dx *= -1;
  ball.dy = (Math.random() > 0.5 ? 4 : -4);
}

document.addEventListener("mousemove", function (e) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseY = e.clientY - rect.top - root.scrollTop;
  player.y = mouseY - player.height / 2;
});

