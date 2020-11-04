// ANCHOR Show/Close DOM selectors
const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')

// ANCHOR Canvas DOM selectors
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// TODO
/**
1. Create canvas context
2. Create and drew ball
3. Create and drew paddle
4. Create bricks 
5. Drew score
6. Add update function to animate
7. function for animation frame
8.Move paddle
9. Keyboard event handles to move paddle
10.Move ball 
11. Add wall boundaries
12. Increase score when bricks break
13. Lose - redraw bricks, reset score
 */

let score = 0 // Setting our score board to zero

// Create ball props
const ball = {
  x: canvas.width / 2, //Start in the middle
  x: canvas.height / 2,// Start in the middle
  size: 10, // ball 
  speed: 4, // Animation  speed prop
  dx: 4, // Animation direction 
  dy: -4 // Animation direction with - so it does not move down
}

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40, // We are taking half width of the paddle
  y: canvas.height - 20, // Center in the middle
  w: 80,
  h: 10,
  speed: 8,
  dx: 0 // Only moving on the x-axes 
};

// Draw ball on canvas - check MDN canvas drawing paths
function drawBall() {
  ctx.beginPath(); // Create a path
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); // Draw an arc to build a circle 
  ctx.fillStyle = '#0095dd'; // style the property 
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

function draw() {
  drawBall()
  drawPaddle()
  drawScore()
}

draw()



// Rules and close event handlers
rulesBtn.addEventListener('click', () => 
  rules.classList.add('show'))

// Close button
closeBtn.addEventListener('click', () => 
  rules.classList.remove('show'))

