const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["peru", "ivory", "darkorange", "coral", "cyan", "hotpink", "gold", "ivory", "yellow", "red", "pink", "green", "blue", "lightblue", "lightgreen"];

function drawHappy(i, x, y) {
    ctx.fillStyle = colors[i % 7];
    ctx.beginPath();
    ctx.arc(x, y, 33, 0, Math.PI * 2);
    ctx.fill();
}

function balloon(x, y) {
    for (let i = 0; i < 5; i++) {
        drawHappy(i, x, y);
    }
}

function drawCake(x, y) {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(100, 100, x, y);
}

function drawHeart() {
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
}

function init() {
    balloon(200, 200);
    drawCake(150, 100);
    drawHeart();
}

window.onload = init;