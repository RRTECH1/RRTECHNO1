// lavel 1  
const ball = document.getElementById('Ball');
let isJumping = false;
let interval;
let gameTimeout;
let timeRemaining = 30; 
const stopCountDisplay = document.getElementById('stopCountDisplay');
const gameOverDisplay = document.getElementById('gameOverDisplay');  
const timerDisplay = document.getElementById('timerDisplay'); 

ball.addEventListener('click', () => {
  if (!isJumping) {
    startJumping();
  } else {
    stopJumping();
  }
});

//lavel 2

function startJumping() {
  isJumping = true;
  let position = 0;
  let direction = 1;
  const maxPosition = 500;

  
  if (gameTimeout) {
    clearTimeout(gameTimeout);
  }


  timeRemaining = 30;
  timerDisplay.textContent = `Time: ${timeRemaining}`;

  
  gameTimeout = setTimeout(() => {
    gameOver();
  }, 300000); 

  const timeInterval = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = `Time: ${timeRemaining}s`;

    if (timeRemaining <= 0) {
      clearInterval(timeInterval); 
    }
  }, 1000); 

  interval = setInterval(() => {
    if (position >= maxPosition) direction = -1;
    if (position <= 0) direction = 1;

    position += 5 * direction;
    ball.style.transform = `translateY(${position}px)`;
  }, 10);
}

//lavel 3 gaee over 
function stopJumping() {
  clearInterval(interval);
  isJumping = false;
  stopCount++;
  stopCountDisplay.textContent = `score: ${stopCount}`;
}

//lavel 4 

function gameOver(){
  
}
