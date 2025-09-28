let canvas = document.getElementById("asteroidsCanvas");
let ctx = canvas.getContext("2d");

let ship, bullets, asteroids, score, gameRunning;
let shipSpeed = 5, bulletSpeed = 7, asteroidSpeed = 2;

function startGame() {
  let diff = document.getElementById("difficulty").value;
  if (diff === "easy") asteroidSpeed = 1.5;
  else if (diff === "medium") asteroidSpeed = 2.5;
  else asteroidSpeed = 3.5;

  ship = { x: canvas.width / 2, y: canvas.height / 2, radius: 12 };
  bullets = [];
  asteroids = [];
  score = 0;
  gameRunning = true;

  for (let i = 0; i < 5; i++) spawnAsteroid();

  document.getElementById("score").innerText = "Score: 0";

  loop();
}

function spawnAsteroid() {
  asteroids.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 15 + Math.random() * 10,
    dx: (Math.random() - 0.5) * asteroidSpeed * 2,
    dy: (Math.random() - 0.5) * asteroidSpeed * 2
  });
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
let keys = {};

function keyDown(e) { keys[e.code] = true; if (e.code === "Space") shoot(); }
function keyUp(e) { keys[e.code] = false; }

function shoot() {
  bullets.push({ x: ship.x, y: ship.y, dx: 0, dy: -bulletSpeed, radius: 4 });
}

function loop() {
  if (!gameRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move ship
  if (keys["ArrowLeft"] && ship.x - ship.radius > 0) ship.x -= shipSpeed;
  if (keys["ArrowRight"] && ship.x + ship.radius < canvas.width) ship.x += shipSpeed;
  if (keys["ArrowUp"] && ship.y - ship.radius > 0) ship.y -= shipSpeed;
  if (keys["ArrowDown"] && ship.y + ship.radius < canvas.height) ship.y += shipSpeed;

  // Draw ship
  ctx.beginPath();
  ctx.arc(ship.x, ship.y, ship.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#50fa7b";
  ctx.fill();
  ctx.closePath();

  // Move and draw bullets
  bullets.forEach((b, i) => {
    b.y += b.dy;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffb86c";
    ctx.fill();
    ctx.closePath();
    if (b.y < 0) bullets.splice(i, 1);
  });

  // Move and draw asteroids
  asteroids.forEach((a, i) => {
    a.x += a.dx;
    a.y += a.dy;

    // Wrap around edges
    if (a.x < 0) a.x = canvas.width;
    if (a.x > canvas.width) a.x = 0;
    if (a.y < 0) a.y = canvas.height;
    if (a.y > canvas.height) a.y = 0;

    ctx.beginPath();
    ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ff5555";
    ctx.fill();
    ctx.closePath();

    // Collision with ship
    if (Math.hypot(a.x - ship.x, a.y - ship.y) < a.radius + ship.radius) {
      gameOver();
    }

    // Collision with bullets
    bullets.forEach((b, j) => {
      if (Math.hypot(a.x - b.x, a.y - b.y) < a.radius + b.radius) {
        bullets.splice(j, 1);
        asteroids.splice(i, 1);
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
        spawnAsteroid();
      }
    });
  });

  requestAnimationFrame(loop);
}

function gameOver() {
  gameRunning = false;
  ctx.fillStyle = "#ff5555";
  ctx.font = "24px Arial";
  ctx.fillText("💀 Game Over! Final Score: " + score, 50, canvas.height / 2);
}

canvas.addEventListener("mousemove", function (e) {
  let rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left;
  let mouseY = e.clientY - rect.top;
  ship.x = mouseX;
  ship.y = mouseY;
});
