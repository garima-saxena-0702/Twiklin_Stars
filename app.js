const canvas  = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
const totalOffsetX = canvas.offsetLeft - canvas.scrollLeft;
const totalOffsetY = canvas.offsetTop - canvas.scrollTop;

let particleArray = [];

canvas.addEventListener('click', (event) => {
    let x = event.pageX - totalOffsetX;
    let y = event.pageY - totalOffsetY;
    particleArray.push(new Particle(x, y))
    drawStar();
})

function updateCanvas() {
    if(particleArray.length){
        if(particleArray[0].timeExisted == 0) {
            let particle = particleArray.shift();
            particle.endParticle();
        }
        particleArray.forEach(element => {
            element.timeExisted--;
        });
        drawStar();
    
    }
    window.requestAnimationFrame(updateCanvas);
}

window.requestAnimationFrame(updateCanvas);

function drawStar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleArray.forEach(ele => {
        ctx.beginPath();
        // ctx.arc(ele.x, ele.y, 1, 0, 2 * Math.PI);
        let x = ele.x + Math.random() * 2;
        let y = ele.y + Math.random() * 2;
        for(let  i = 0; i <= 8; i++) {
            lineAtAngle(x, y, i%2 == 0? 9: 7, ele.angle+degreeToRad(45*i));
        }
        ctx.stroke();
    });
}

function lineAtAngle(x1, y1, length, angle) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + length * Math.cos(angle), y1 + length * Math.sin(angle));
}

function degreeToRad(degrees) {
    return degrees * Math.PI / 180;
}
