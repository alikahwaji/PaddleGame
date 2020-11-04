const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')


// Rules and close event handlers
rulesBtn.addEventListener('click', () => 
  rules.classList.add('show'))

// Close button
closeBtn.addEventListener('click', () => 
  rules.classList.remove('show'))

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