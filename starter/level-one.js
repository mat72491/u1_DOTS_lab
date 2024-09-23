/*
 * DOTS: Level One
 *
 */

const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')
let score = 0

const ball = document.querySelector('.js-ball')
ball.addEventListener('click', () => {
     score += 10
     scoreDisplay.innerText = score
     if (score >= 100) {
        levelWinner.style.opacity=1;
    } else{  score += 0
        scoreDisplay.innerText = score}

    }) 





