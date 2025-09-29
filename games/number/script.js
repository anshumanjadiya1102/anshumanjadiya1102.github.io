const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const difficultySelect = document.getElementById('difficulty');

let gridSize = 30;
let tileSize = canvas.width / gridSize;
let snake = [];
let food = {};
let direction = {x: 0, y: 0};
let newDirection = {x: 0, y: 0};
let score = 0;
let gameInterval;
let speed = 100;

// Show game screen and start game
nextBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    initGame();
});

restartBtn.addEventListener('click', () => {
    initGame();
});

function initGame() {
    snake = [{x: Math.floor(gridSize/2), y: Math.floor(gridSize/2)}];
    direction = {x: 0, y: 0};
    newDirection = {x: 0, y: 0};
    score = 0;
    scoreEl.textContent = score;
    placeFood();
    speed = 200 - parseInt(difficultySelect.value) * 10;
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, speed);
}

function placeFood() {
    food = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
    };
}

function drawTile(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

function drawSnake() {
    snake.forEach((segment, index) => {
        if(index === 0) {
            // Head
            ctx.fillStyle = '#0f0';
            ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
            // Mouth
            ctx.fillStyle = '#f00';
            ctx.fillRect(segment.x * tileSize + tileSize/4, segment.y * tileSize + tileSize/4, tileSize/2, tileSize/2);
        } else {
            ctx.fillStyle = '#0f0';
            ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
        }
    });
}

function drawFood() {
    drawTile(food.x, food.y, '#ff0');
}

function gameLoop() {
    if(Math.abs(newDirection.x) !== Math.abs(direction.x) || Math.abs(newDirection.y) !== Math.abs(direction.y)) {
        direction = newDirection;
    }

    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

    // Collision detection
    if(head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize || snake.some(s => s.x === head.x && s.y === head.y)) {
        clearInterval(gameInterval);
        alert("Game Over! Score: " + score);
        return;
    }

    snake.unshift(head);

    if(head.x === food.x && head.y === food.y) {
        score++;
        scoreEl.textContent = score;
        placeFood();
    } else {
        snake.pop();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
}

document.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp': newDirection = {x:0, y:-1}; break;
        case 'ArrowDown': newDirection = {x:0, y:1}; break;
        case 'ArrowLeft': newDirection = {x:-1, y:0}; break;
        case 'ArrowRight': newDirection = {x:1, y:0}; break;
    }
});
