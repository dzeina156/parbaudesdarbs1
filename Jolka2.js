const canvas = document.getElementById("snow"); /*Atlasa <canvas> elementu ar ID "sniegs".*/
const ctx = canvas.getContext("2d"); /*Iegūst 2D renderēšanas kontekstu zīmēšanai.*/

/*Iestata audekla izmēru, lai tas atbilstu pārlūkprogrammas skata loga izmēriem.*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = []; /*Izveido masīvu sniegpārslu objektu glabāšanai.*/
for (let i = 0; i < 200; i++) { /*Veic 200 cilpas, lai radītu 200 sniegpārslas.*/
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
    });
}
//sveiki//
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((flake) => {
        const gradient = ctx.createRadialGradient(
            flake.x,
            flake.y,
            0,
            flake.x,
            flake.y,
            flake.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}

function animate() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animate);
}

animate();

