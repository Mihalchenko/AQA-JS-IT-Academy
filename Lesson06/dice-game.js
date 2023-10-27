let score1 = 0;
let score2 = 0;

for (i=1; i<4; i++) {
    let currentScore1 = Math.floor(Math.random()*6) + 1;
    let currentScore2 = Math.floor(Math.random()*6) + 1;

    score1 += currentScore1;
    score2 += currentScore2;

    console.log(`Player-1 rolls ${currentScore1}, Player-2 rolls ${currentScore2}`);
    console.log(`Total score after ${i} roll: Player-1 = ${score1}, Player-2 = ${score2}`);
}

if (score1 > score2) {
    console.log(`Player 1 wins! Total score: ${score1}:${score2}`);
} else if (score1 < score2) {
    console.log(`Player 2 wins! Total score: ${score2}:${score1}`);
} else {
    console.log(`The game ends up in a draw. Total score: ${score1}:${score2}`);
}