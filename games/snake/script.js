/* Snake improved: uses icon image for head/body and rainbow for fruit */
const canvas = document.getElementById("game"), ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn"), scoreEl = document.getElementById("score");
const icon = new Image(); icon.src = "../assets/icons/snake_icon.png"; // use icon as snake
const fruitImg = new Image(); fruitImg.src = "../assets/rainbow1.png";

let grid = 20; let snake = []; let dir = {x:1,y:0}; let food; let timer; let speed = 120; let score = 0;

startBtn.addEventListener("click", start);

function start(){
  const diff = document.getElementById("difficulty").value;
  speed = diff === "easy" ? 160 : diff === "medium" ? 110 : 80;
  snake = [{x:10,y:10}];
  dir = {x:1,y:0};
  spawnFood(); score=0; updateScore();
  clearInterval(timer); timer = setInterval(loop, speed);
  window.addEventListener("keydown", onKey);
}

function spawnFood(){
  food = { x: Math.floor(Math.random()*21), y: Math.floor(Math.random()*21) };
}

function updateScore(){ scoreEl.textContent = "Score: "+score; }

function onKey(e){
  if (e.key === "ArrowUp" && dir.y===0) dir = {x:0,y:-1};
  if (e.key === "ArrowDown" && dir.y===0) dir = {x:0,y:1};
  if (e.key === "ArrowLeft" && dir.x===0) dir = {x:-1,y:0};
  if (e.key === "ArrowRight" && dir.x===0) dir = {x:1,y:0};
}

function loop(){
  // move
  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
  // wrap
  head.x = (head.x + 21) % 21; head.y = (head.y + 21) % 21;
  if (snake.some(s=> s.x===head.x && s.y===head.y)){ end(); return; }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y){
    score += 10; updateScore(); spawnFood();
  } else snake.pop();

  draw();
}

function draw(){
  ctx.fillStyle = "#1e1f29";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  // draw food
  ctx.drawImage(fruitImg, food.x*grid, food.y*grid, grid, grid);
  // draw snake
  for (let i=0;i<snake.length;i++){
    const s = snake[i];
    if (icon.complete) ctx.drawImage(icon, s.x*grid, s.y*grid, grid, grid);
    else {
      ctx.fillStyle = i===0? "#50fa7b" : "#bd93f9";
      ctx.fillRect(s.x*grid, s.y*grid, grid, grid);
    }
  }
}

function end(){
  clearInterval(timer);
  saveHighScore("snakeHighScore", score);
  alert("Game over! Score: "+score);
}

function saveHighScore(key, sc){
  const prev = Number(localStorage.getItem(key)||0);
  if (sc>prev){ localStorage.setItem(key, sc); window.refreshLeaderboard && window.refreshLeaderboard(); }
}
