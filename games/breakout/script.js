let canvas = document.getElementById("breakoutCanvas");
let ctx = canvas.getContext("2d");

let paddle, ball, bricks;
let rightPressed = false;
let leftPressed = false;
let score = 0;
let rows = 3, cols = 5, brickWidth = 75, brickHeight = 20;
let gameRunning = false;
let ballSpeed = 2;

function startGame() {
  let diff = document.getElementById("difficulty").value;
  if (diff === "easy") ballSpeed = 2;
  else if (diff === "medium") ballSpeed = 3;
  else ballSpeed = 4;

  paddle = { x: (canvas.width - 75) / 2, y: canvas.height - 10, width: 75, height: 10, speed: 7 };
  ball = { x: canvas.width / 2, y: canvas.height - 30, dx: ballSpeed, dy: -ballSpeed, radius: 8 };
  bricks = [];

  for (let c = 0; c < cols; c++) {
    bricks[c] = [];
    for (let r = 0; r < rows; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }

  score = 0;
  document.getElementById("score").innerText = "Score: 0";
  gameRunning = true;

  loop();
}

function loop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBricks();
  drawPaddle();
  drawBall();

  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx *= -1;
  }
  if (ball.y - ball.radius < 0) {
    ball.dy *= -1;
  } else if (ball.y + ball.radius > canvas.height) {
    endGame();
  }

  // Paddle collision
  if (
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.width &&
    ball.y + ball.radius > paddle.y
  ) {
    ball.dy *= -1;
  }

  // Brick collision
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let b = bricks[c][r];
      if (b.status === 1) {
        if (
          ball.x > b.x &&
          ball.x < b.x + brickWidth &&
          ball.y > b.y &&
          ball.y < b.y + brickHeight
        ) {
          ball.dy *= -1;
          b.status = 0;
          score++;
          document.getElementById("score").innerText = "Score: " + score;
          if (score === rows * cols) {
            ctx.fillStyle = "#50fa7b";
            ctx.font = "20px Arial";
            ctx.fillText("🎉 You Win!", canvas.width / 2 - 40, canvas.height / 2);
            gameRunning = false;
          }
        }
      }
    }
  }

  // Move paddle
  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += paddle.speed;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= paddle.speed;
  }

  requestAnimationFrame(loop);
}

function drawPaddle() {
  ctx.fillStyle = "#8be9fd";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffb86c";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (bricks[c][r].status === 1) {
        let brickX = c * (brickWidth + 10) + 30;
        let brickY = r * (brickHeight + 10) + 30;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.fillStyle = "#bd93f9";
        ctx.fillRect(brickX, brickY, brickWidth, brickHeight);
      }
    }
  }
}

function endGame() {
  ctx.fillStyle = "#ff5555";
  ctx.font = "20px Arial";
  ctx.fillText("💀 Game Over", canvas.width / 2 - 50, canvas.height / 2);
  gameRunning = false;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
  else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
  else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
});

document.addEventListener("mousemove", function (e) {
  let rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left;
  if (mouseX > 0 && mouseX < canvas.width) {
    paddle.x = mouseX - paddle.width / 2;
  }
});
