/*
 * DOTS: Level Two
 *
 */

const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
const balls = document.querySelectorAll('.js-ball')
let score = 0

balls.forEach((tags) => {
    tags.addEventListener('click', () => {
        score += 10
        scoreDisplay.innerText = score
        if (score >= 100) {
           levelWinner.style.opacity=1;
       } else{  score += 0
           scoreDisplay.innerText = score}
   
       })
})















 