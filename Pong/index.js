//get game pieces
const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");

//set game dimensions
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

//pick colors
const boardBckgrnd = "white";
const paddle1Color = "pink";
const paddle2Color = "purple";
const paddleBorder = "black";
const ballColor = "blue";

//define speeds and dimensions
const ballRadius = 12.5;
const paddleSpeed = 40;

//game variables
let intervalId;
let ballSpeed = 1;
let ballX = gameWidth/2;
let ballY = gameHeight/2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
};

let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};

//define event listeners
window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();

//Game Functions

//start game
function gameStart(){
    createBall();
    nextTick();
};


function nextTick(){
    intervalId = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)
};

function clearBoard(){
    context.fillStyle = boardBckgrnd;
    context.fillRect(0, 0, gameWidth, gameHeight);
};

function drawPaddles(){
    context.strokeStyle = paddleBorder;

    context.fillStyle = paddle1Color;
    context.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    context.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

    context.fillStyle = paddle2Color;
    context.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    context.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};

function createBall(){

};
function moveBall(){};

function drawBall(ballX, ballY){
    context.fillStyle = ballColor;
    context.strokeStyle = paddleBorder;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
};

function checkCollision(){};

function changeDirection(event){
    const keyPressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch(keyPressed){
        case(paddle1Up):
            paddle1.y -= paddleSpeed;
            if(paddle1.y < 0){
                paddle1.y = 0;
            }
            break;
        case(paddle1Down):
            paddle1.y += paddleSpeed;
            if(paddle1.y > (gameHeight - paddle1.height)){
                paddle1.y = gameHeight - paddle1.height;
            }
            break;
        case(paddle2Up):
            paddle2.y -= paddleSpeed;
            if(paddle2.y < 0){
                paddle2.y = 0;
            }
            break;
        case(paddle2Down):
            paddle2.y += paddleSpeed;
            if(paddle2.y > (gameHeight - paddle2.height)){
                paddle2.y = gameHeight - paddle2.height;
            }
            break;
    }
};

function updateScore(){};
function resetGame(){};

