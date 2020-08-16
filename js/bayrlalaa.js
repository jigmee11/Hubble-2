const cs = document.getElementById("canvas");
const ctx = cs.getContext("2d");
const laser = new Image();
laser.src = "../zurag/laser.png";
const back = new Image();
back.src = "../zurag/spaceback.jpg";
const ship = new Image();
ship.src = "../zurag/puuj.png";
const laserenemy = new Image();
laserenemy.src = "../zurag/lasere.png";
cs.width = innerWidth;
cs.height = innerHeight;
const harnuh = new Image();
harnuh.src = "../zurag/blackhole-icon.png"
const behind = new Image();
behind.src = "../zurag/spaceback.jpg";
const enemyNoob = new Image();
enemyNoob.src = "../zurag/enemy2.png";
const chuluu = new Image();
chuluu.src = "../zurag/saad2.png";
let x = cs.width / 2 - cs.width / 15, y = cs.height - cs.height / 6;
let hx = cs.width / 2 - cs.width / 5.5
let hy = 0 + cs.height / 21;
let q = 0
const zurag = () => {
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(ship, x, y, cs.width / 12, cs.height / 6)
    ctx.drawImage(harnuh, hx, hy, cs.width / 3, cs.height / 2)
}
const duusah = setInterval(() => {
    y -= 2;
    q += 1
    zurag()
    if (q % 40 == 0) {
        harnuh.src = "../zurag/harnuh2.png"
    } else if (q % 30 == 0) {
        harnuh.src = "../zurag/blackhole-icon.png"
    }
    if (y < cs.height / 4) {
        clearInterval(duusah)
        window.location.href = "../html/tugsgul.html"
    }
}, 20);