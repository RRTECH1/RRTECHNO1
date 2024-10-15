const ball = document.getElementById('Ball');
let isJumping = false;
let interval;

ball.addEventListener('click', () => {
  if (!isJumping) {
    startJumping();
  } else {
    stopJumping()
  }
});

function startJumping() {
  isJumping = true;
  let position = 0;
  let direction = 1;
  const maxPosition = 500;

  interval = setInterval(() => {
    if (position >= maxPosition) direction = -1;
    if (position <= 0) direction = 1;

    position += 10 * direction;

    ball.style.transform = `translateY(${position}px)`;
  }, 20);
}

function stopJumping() {
  clearInterval(interval); 
  isJumping = false
}
