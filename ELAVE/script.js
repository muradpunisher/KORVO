"use strict";
let ball = document.querySelector('#ball');
let bar = document.querySelector('#bar');
let barX = 0;
let ballX = 0;
let ballY = 0;
let ballMx = 5;
let ballMy = 5;
onkeydown = barMove;
let set = setInterval(ballMove, 40);
function barMove(e) {
    if (e.keyCode == 39) {
        if (barX < 700) {
            barX += 50;
        }
        console.log(barX);
    }
    if (e.keyCode == 37) {
        if (barX > 0) {
            barX -= 50;
        }
    }
    bar.style.left = barX + 'px';
}
function ballMove() {
    if (ballX < 0 || ballX > 745) {
        ballMx *= -1;
    }
    if (ballY < 0) {
        ballMy *= -1;
    } else if (ballY > 550 && ballX >= barX - 50 && ballX <= barX + 75) {
        ballMx += 5;
        ballMy += 5;
        ballMy *= -1;
    } else if (ballY > 550) {
        let result = confirm('Uduzdunuz yeni oyuna baslamaq isteyirsinizmi?');
        clearInterval(set);
        if (result) {
            location.reload();
        }
    }
    ballX += ballMx;
    ballY += ballMy;
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}