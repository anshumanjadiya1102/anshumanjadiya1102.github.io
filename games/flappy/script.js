const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ball
let ballX = 50;
let ballY = canvas.height / 2;
let ballRadius = 12;
let gravity = 0.5;
let lift = -8;
let velocity = 0;

// Pipes
let pipes = [];
let pipeWidth = 60;
let pipeGap = 140;
let frame = 0;

// Score
let score = 0;
let gameOver = false;

// Input
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});
canvas.addEventListener("click", jump);

function jump() {
  if (gameOver) return;
  velocity = lift;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ff4757";
  ctx.fill();
  ctx.closePath();
}

function drawPipes() {
  pipes.forEach(pipe => {
    ctx.fillStyle = "#2ed573";
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
    ctx.fillRect(pipe.x, canvas.height - pipe.bottom, pipeWidth, pipe.bottom);
  });
}

function updatePipes() {
  if (frame % 100 === 0) {
    let top = Math.random() * (canvas.height - pipeGap - 100) + 20;
    let bottom = canvas.height - top - pipeGap;
    pipes.push({ x: canvas.width, top: top, bottom: bottom });
  }

  pipes.forEach(pipe => {
    pipe.x -= 2;

    // Collision detection
    if (
      ballX + ballRadius > pipe.x &&
      ballX - ballRadius < pipe.x + pipeWidth &&
      (ballY - ballRadius < pipe.top || ballY + ballRadius > canvas.height - pipe.bottom)
    ) {
      gameOver = true;
    }

    // Scoring
    if (pipe.x + pipeWidth === ballX) {
      score++;
    }
  });

  // Remove off-screen pipes
  pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);
}

function drawScore() {
  ctx.fillStyle = "#333";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 25);
}

function update() {
  if (gameOver) {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over!", 120, canvas.height / 2);
    ctx.font = "20px Arial";
    ctx.fillText("Final Score: " + score, 140, canvas.height / 2 + 40);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ball physics
  velocity += gravity;
  ballY += velocity;

  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    gameOver = true;
  }

  drawBall();
  drawPipes();
  updatePipes();
  drawScore();

  frame++;
  requestAnimationFrame(update);
}

update();
