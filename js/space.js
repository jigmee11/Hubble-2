const cs = document.getElementById("canvas");
const ctx = cs.getContext("2d");
const laser = new Image();
laser.src = "../zurag/laser.png";
const back = new Image();
back.src = "../zurag/spaceback.jpg";
const ship = new Image();
ship.src = "../zurag/puuj.png";
cs.width = innerWidth;
cs.height = innerHeight;
let now;
const behind = new Image();
behind.src = "../zurag/spaceback.jpg";
const enemyNoob = new Image();
enemyNoob.src = "../zurag/enemy2.png";
const chuluu = new Image();
chuluu.src = "../zurag/saad2.png";
let x = cs.width / 2 - cs.width / 15;
let y = cs.height - cs.height / 2;
let c = 0;
let d = 0;
let ly = y - cs.height / 24; //laseriin y
let py;
let lx = x + cs.width / 26;
let x1;
let daisany = -cs.height / 6;
let chuluuy = -cs.height / 6;
let daisanx = Math.floor(Math.random() * window.innerWidth - 100);
let chuluux = Math.floor(Math.random() * window.innerWidth - 100);
const draw = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(back, c, d, cs.width, cs.height);
  ctx.drawImage(behind, c, d - cs.height, cs.width, cs.height);
  ctx.drawImage(laser, lx, ly, cs.width / 100, cs.height / 20);
  ctx.drawImage(ship, x, y, cs.width / 12, cs.height / 6);
  ctx.drawImage(enemyNoob, daisanx, daisany, cs.width / 12, cs.height / 6);
  ctx.drawImage(chuluu, chuluux, chuluuy, cs.width / 12, cs.height / 6);
  // ctx.drawImage(laser, lx, py, cs.width / 100, cs.height / 20);
};

let tog = () => {
  const a = setInterval(() => {
    d++;
    ly -= 3;
    daisany += 2;
    chuluuy += 1;

    if (ly < cs.height - cs.height - cs.height / 24) {
      ly = y - cs.height / 24;
    }
    if (d >= cs.height) {
      d = 0;
    }
    // if (daisany > cs.height - cs.height / 24) {
    //   daisanx = Math.floor(Math.random() * (window.innerWidth - 300));
    //   daisany = -cs.height / 6;
    // }
    // if (
    //   ly - cs.height / 6 + 20 <= daisany &&
    //   lx >= daisanx &&
    //   lx <= daisanx + daisanx
    // ) {
    //   daisany = -cs.height / 6;
    //   daisanx = Math.floor(Math.random() * window.innerWidth - 100);
    //   ly = cs.heigth / 20;
    // }
    // if (chuluuy > cs.height - cs.height / 24) {
    //   chuluux = Math.floor(Math.random() * (window.innerWidth - 300));
    //   chuluuy = -cs.height / 6;
    // }
    // if (
    //   ly - cs.height / 6 + 20 <= chuluuy &&
    //   lx >= chuluux &&
    //   lx <= chuluux + chuluux
    // ) {
    //   chuluuy = -cs.height / 6;
    //   chuluux = Math.floor(Math.random() * window.innerWidth - 100);
    //   ly = cs.heigth / 20;
    // }

    function touch(event) {
      x = event.clientX;
      y = event.clientY;
    }
    draw();
  }, 30);
};
tog();

document.addEventListener(
  "touchmove",
  (touch = (e) => {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    ly = y - cs.height / 24; //laseriin y
    lx = x + cs.width / 26;
  })
);
window.onresize = (ad) => {
  console.log(ad);
  location.reload();
};
