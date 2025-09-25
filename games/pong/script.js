const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Ball
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 3;
let ballSpeedY = 3;
let ballRadius = 8;

// Paddles
const paddleHeight = 70;
const paddleWidth = 10;

let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = canvas.height / 2 - paddleHeight / 2;
const paddleSpeed = 4;

let playerScore = 0;
let aiScore = 0;

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

function drawText(text, x, y) {
  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.fillText(text, x, y);
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
}

function update() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Wall collision
  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY;
  }

  // Player paddle
  if (
    ballX - ballRadius < paddleWidth &&
    ballY > playerY &&
    ballY < playerY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // AI paddle
  if (
    ballX + ballRadius > canvas.width - paddleWidth &&
    ballY > aiY &&
    ballY < aiY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // Scoring
  if (ballX - ballRadius < 0) {
    aiScore++;
    resetBall();
  }
  if (ballX + ballRadius > canvas.width) {
    playerScore++;
    resetBall();
  }

  // AI movement
  if (aiY + paddleHeight / 2 < ballY) {
    aiY += paddleSpeed;
  } else {
    aiY -= paddleSpeed;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Paddles
  drawRect(0, playerY, paddleWidth, paddleHeight, "#fff");
  drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, "#fff");

  // Ball
  drawBall();

  // Score
  drawText(playerScore, canvas.width / 4, 30);
  drawText(aiScore, (3 * canvas.width) / 4, 30);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Player control
document.addEventListener("mousemove", (e) => {
  let rect = canvas.getBoundingClientRect();
  playerY = e.clientY - rect.top - paddleHeight / 2;
});

gameLoop();
