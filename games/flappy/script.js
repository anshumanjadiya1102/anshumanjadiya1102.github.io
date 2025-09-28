let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let ball, gravity, lift, velocity;
let pipes = [];
let frame = 0;
let score = 0;
let gameRunning = false;
let pipeGap = 120;
let pipeSpeed = 2;

function startGame() {
  let diff = document.getElementById("difficulty").value;
  if (diff === "easy") {
    pipeGap = 150; pipeSpeed = 2;
  } else if (diff === "medium") {
    pipeGap = 120; pipeSpeed = 3;
  } else {
    pipeGap = 100; pipeSpeed = 4;
  }

  ball = { x: 50, y: canvas.height / 2, radius: 12 };
  gravity = 0.5;
  lift = -8;
  velocity = 0;
  pipes = [];
  frame = 0;
  score = 0;
  gameRunning = true;

  document.getElementById("score").innerText = "Score: 0";

  loop();
}

function loop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ball
  velocity += gravity;
  ball.y += velocity;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffb86c";
  ctx.fill();
  ctx.closePath();

  // Pipes
  if (frame % 90 === 0) {
    let pipeHeight = Math.random() * (canvas.height - pipeGap - 50) + 20;
    pipes.push({ x: canvas.width, y: pipeHeight });
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    let pipe = pipes[i];
    pipe.x -= pipeSpeed;

    ctx.fillStyle = "#50fa7b";
    ctx.fillRect(pipe.x, 0, 40, pipe.y);
    ctx.fillRect(pipe.x, pipe.y + pipeGap, 40, canvas.height - pipe.y - pipeGap);

    if (pipe.x + 40 < 0) {
      pipes.splice(i, 1);
      score++;
      document.getElementById("score").innerText = "Score: " + score;
    }

    // Collision
    if (
      ball.x + ball.radius > pipe.x &&
      ball.x - ball.radius < pipe.x + 40 &&
      (ball.y - ball.radius < pipe.y || ball.y + ball.radius > pipe.y + pipeGap)
    ) {
      endGame();
    }
  }

  // Floor / Ceiling collision
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    endGame();
  }

  frame++;
  requestAnimationFrame(loop);
}

function endGame() {
  gameRunning = false;
  ctx.fillStyle = "#ff5555";
  ctx.font = "24px Arial";
  ctx.fillText("💀 Game Over! Final Score: " + score, 40, canvas.height / 2);
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") velocity = lift;
});

canvas.addEventListener("mousedown", function () {
  velocity = lift;
});
