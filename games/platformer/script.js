let canvas = document.getElementById("platformerCanvas");
let ctx = canvas.getContext("2d");

let player, platforms, gravity, score, gameRunning;
let keys = {};

function startGame() {
  let diff = document.getElementById("difficulty").value;
  gravity = diff === "easy" ? 0.5 : diff === "medium" ? 0.7 : 1;

  player = { x: 50, y: 300, width: 30, height: 50, dx: 0, dy: 0 };
  platforms = [
    { x: 0, y: 380, width: 600, height: 20 },
    { x: 150, y: 300, width: 100, height: 10 },
    { x: 300, y: 250, width: 100, height: 10 },
    { x: 450, y: 200, width: 100, height: 10 }
  ];
  score = 0;
  gameRunning = true;
  document.getElementById("score").innerText = "Score: 0";

  loop();
}

document.addEventListener("keydown", function (e) { keys[e.code] = true; });
document.addEventListener("keyup", function (e) { keys[e.code] = false; });

function loop() {
  if (!gameRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Controls
  if (keys["ArrowLeft"]) player.dx = -5;
  else if (keys["ArrowRight"]) player.dx = 5;
  else player.dx = 0;

  if (keys["ArrowUp"] && onGround()) player.dy = -12;

  // Apply gravity
  player.dy += gravity;
  player.x += player.dx;
  player.y += player.dy;

  // Platform collision
  platforms.forEach(p => {
    if (
      player.x + player.width > p.x &&
      player.x < p.x + p.width &&
      player.y + player.height > p.y &&
      player.y + player.height - player.dy <= p.y
    ) {
      player.dy = 0;
      player.y = p.y - player.height;
      score++;
      document.getElementById("score").innerText = "Score: " + score;
    }
  });

  // Boundaries
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  if (player.y > canvas.height) gameOver();

  // Draw platforms
  ctx.fillStyle = "#8be9fd";
  platforms.forEach(p => ctx.fillRect(p.x, p.y, p.width, p.height));

  // Draw player
  ctx.fillStyle = "#ffb86c";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(loop);
}

function onGround() {
  return platforms.some(p => 
    player.y + player.height === p.y &&
    player.x + player.width > p.x &&
    player.x < p.x + p.width
  );
}

function gameOver() {
  gameRunning = false;
  ctx.fillStyle = "#ff5555";
  ctx.font = "24px Arial";
  ctx.fillText("💀 Game Over! Final Score: " + score, 150, canvas.height / 2);
}
