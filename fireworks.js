const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.querySelector(".login-btn").addEventListener("click", function(e){

    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;

    for(let i=0;i<120;i++){

        particles.push({

            x:startX,
            y:startY,

            vx:(Math.random()-0.5)*8,
            vy:(Math.random()-0.5)*8,

            life:200,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(e){

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        p.vy += 0.05; // gravity

        p.life--;

        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();