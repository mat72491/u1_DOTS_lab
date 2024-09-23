/*
 * DOTS: Level Three
 *
 */
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
const balls = document.querySelectorAll('.js-ball')
let score = 0

balls.forEach(ball => {
    ball.addEventListener ('click', () => {
       const incrementValue = parseInt(ball.getAttribute('data-increment'))
    score += incrementValue;
    scoreDisplay.innerText = score.toString()
    if (score >= 100) {
        levelWinner.style.opacity = 1
    }
}) 
})
//still very confused by this one. worked with Kisha and Mike on this.