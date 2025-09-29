// Elements
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('snakeScore');
const nextBtn = document.getElementById('snakeNextBtn');
const restartBtn = document.getElementById('snakeRestartBtn');
const startScreen = document.getElementById('snakeStartScreen');
const gameScreen = document.getElementById('snakeGameScreen');
const difficultySelect = document.getElementById('snakeDifficulty');

// Dracula colors
const COLORS = {
    canvasBg: '#44475a',
    snake: '#50fa7b',
    mouth: '#ff5555',
    food: '#f1fa8c'
};

// Game variables
let snake_snake = [];
let snake_food = {};
let snake_direction = {x:0,y:0};
let snake_newDirection = {x:0,y:0};
let snake_score = 0;
let snake_speed = 100;
let snake_gameInterval;
let snake_gridSize = 30;
let snake_tileSize = canvas.width / snake_gridSize;

// Start game
nextBtn.addEventListener('click', ()=>{
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    initSnakeGame();
});

// Restart game
restartBtn.addEventListener('click', initSnakeGame);

// Initialize Snake game
function initSnakeGame(){
    snake_snake = [{x: Math.floor(snake_gridSize/2), y: Math.floor(snake_gridSize/2)}];
    snake_direction = {x:0,y:0};
    snake_newDirection = {x:0,y:0};
    snake_score = 0;
    scoreEl.textContent = snake_score;
    snake_speed = 200 - parseInt(difficultySelect.value)*10;
    placeFood();
    clearInterval(snake_gameInterval);
    snake_gameInterval = setInterval(snakeGameLoop, snake_speed);
}

// Place food
function placeFood(){
    snake_food = {
        x: Math.floor(Math.random()*snake_gridSize),
        y: Math.floor(Math.random()*snake_gridSize)
    };
}

// Draw everything
function drawSnakeGame(){
    // Canvas background
    ctx.fillStyle = COLORS.canvasBg;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Draw food
    ctx.fillStyle = COLORS.food;
    ctx.fillRect(snake_food.x*snake_tileSize, snake_food.y*snake_tileSize, snake_tileSize, snake_tileSize);

    // Draw snake
    snake_snake.forEach((segment,index)=>{
        ctx.fillStyle = COLORS.snake;
        ctx.fillRect(segment.x*snake_tileSize, segment.y*snake_tileSize, snake_tileSize, snake_tileSize);
        if(index===0){
            // Mouth
            const mouthSize = snake_tileSize*0.4;
            const mouthX = segment.x*snake_tileSize + (snake_tileSize-mouthSize)/2;
            const mouthY = segment.y*snake_tileSize + (snake_tileSize-mouthSize)/2;
            ctx.fillStyle = COLORS.mouth;
            ctx.fillRect(mouthX, mouthY, mouthSize, mouthSize);
        }
    });
}

// Game loop
function snakeGameLoop(){
    if(Math.abs(snake_newDirection.x)!==Math.abs(snake_direction.x) || Math.abs(snake_newDirection.y)!==Math.abs(snake_direction.y)){
        snake_direction = snake_newDirection;
    }

    const head = {x: snake_snake[0].x + snake_direction.x, y: snake_snake[0].y + snake_direction.y};

    // Collision check
    if(head.x<0 || head.x>=snake_gridSize || head.y<0 || head.y>=snake_gridSize || snake_snake.some(s=>s.x===head.x && s.y===head.y)){
        clearInterval(snake_gameInterval);
        alert("Game Over! Score: "+snake_score);
        return;
    }

    snake_snake.unshift(head);

    // Food collision
    if(head.x===snake_food.x && head.y===snake_food.y){
        snake_score++;
        scoreEl.textContent = snake_score;
        placeFood();
    } else {
        snake_snake.pop();
    }

    drawSnakeGame();
}

// Keyboard input
document.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowUp': if(snake_direction.y!==1) snake_newDirection={x:0,y:-1}; break;
        case 'ArrowDown': if(snake_direction.y!==-1) snake_newDirection={x:0,y:1}; break;
        case 'ArrowLeft': if(snake_direction.x!==1) snake_newDirection={x:-1,y:0}; break;
        case 'ArrowRight': if(snake_direction.x!==-1) snake_newDirection={x:1,y:0}; break;
    }
});

