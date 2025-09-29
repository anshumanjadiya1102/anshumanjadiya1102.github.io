// Elements
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const difficultySelect = document.getElementById('difficulty');

// Dracula colors
const COLORS = {
    canvasBg: '#44475a',
    snake: '#50fa7b',
    mouth: '#ff5555',
    food: '#f1fa8c'
};

let gridSize = 30;
let tileSize = canvas.width / gridSize;
let snake = [];
let food = {};
let direction = {x:0,y:0};
let newDirection = {x:0,y:0};
let score = 0;
let speed = 100;
let gameInterval;

// Start game screen
nextBtn.addEventListener('click', ()=>{
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    initGame();
});

restartBtn.addEventListener('click', initGame);

// Initialize game
function initGame(){
    snake = [{x: Math.floor(gridSize/2), y: Math.floor(gridSize/2)}];
    direction = {x:0,y:0};
    newDirection = {x:0,y:0};
    score = 0;
    scoreEl.textContent = score;
    speed = 200 - parseInt(difficultySelect.value)*10;
    placeFood();
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, speed);
}

// Place food
function placeFood(){
    food = {
        x: Math.floor(Math.random()*gridSize),
        y: Math.floor(Math.random()*gridSize)
    };
}

// Draw snake and food
function draw(){
    // Clear canvas
    ctx.fillStyle = COLORS.canvasBg;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Draw food
    ctx.fillStyle = COLORS.food;
    ctx.fillRect(food.x*tileSize, food.y*tileSize, tileSize, tileSize);

    // Draw snake
    snake.forEach((segment,index)=>{
        ctx.fillStyle = COLORS.snake;
        ctx.fillRect(segment.x*tileSize, segment.y*tileSize, tileSize, tileSize);
        if(index===0){
            // Draw mouth
            const mouthSize = tileSize*0.4;
            const mouthX = segment.x*tileSize + (tileSize-mouthSize)/2;
            const mouthY = segment.y*tileSize + (tileSize-mouthSize)/2;
            ctx.fillStyle = COLORS.mouth;
            ctx.fillRect(mouthX, mouthY, mouthSize, mouthSize);
        }
    });
}

// Game loop
function gameLoop(){
    // Update direction
    if(Math.abs(newDirection.x)!==Math.abs(direction.x) || Math.abs(newDirection.y)!==Math.abs(direction.y)){
        direction = newDirection;
    }

    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

    // Collision check
    if(head.x<0 || head.x>=gridSize || head.y<0 || head.y>=gridSize || snake.some(s=>s.x===head.x && s.y===head.y)){
        clearInterval(gameInterval);
        alert("Game Over! Score: "+score);
        return;
    }

    snake.unshift(head);

    // Check food
    if(head.x===food.x && head.y===food.y){
        score++;
        scoreEl.textContent = score;
        placeFood();
    } else {
        snake.pop();
    }

    draw();
}

// Key input
document.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowUp': if(direction.y!==1) newDirection={x:0,y:-1}; break;
        case 'ArrowDown': if(direction.y!==-1) newDirection={x:0,y:1}; break;
        case 'ArrowLeft': if(direction.x!==1) newDirection={x:-1,y:0}; break;
        case 'ArrowRight': if(direction.x!==-1) newDirection={x:1,y:0}; break;
    }
});
