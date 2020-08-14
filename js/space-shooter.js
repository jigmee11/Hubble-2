const cs = document.getElementById("canvas");
const ctx = cs.getContext("2d");
let o;

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

if (window.innerHeight < window.innerWidth) {
  now = true;
} else {
  now = false;
}
let x = cs.width / 2 - 50;
let y = cs.height / 2 - 50;
let c = 0;
let d = 0;
let e = 0;
let l = 0;
let p;
let eOne = Math.floor(Math.random() * cs.width - 100) + 1;
let i = 0;
let m = 0;
let z = 0;
let mtwo, mthree, mfour, mfive, msix, mseven, meight, mnine, mten;
let ztwo, zthree, zfour, zfive, zsix, zseven, zeight, znine, zten;

let la = false;
const draw = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(back, c, d, cs.width, cs.height);
  ctx.drawImage(behind, c, d - cs.height, cs.width, cs.height);
  if (cs.width > cs.height) {
    ctx.drawImage(enemyNoob, eOne, e, cs.width / 10, cs.width / 10);
  } else {
    ctx.drawImage(enemyNoob, eOne, e, cs.height / 10, cs.height / 10);
  }
  ctx.drawImage(laser, z, m, 10, 20);
  ctx.drawImage(laser, ztwo, mtwo, 10, 20);
  ctx.drawImage(laser, zthree, mthree, 10, 20);
  ctx.drawImage(laser, zfour, mfour, 10, 20);

  // ctx.drawImage(laser, zfour,  mfour, 10, 20);
  // ctx.drawImage(laser, zfive,  mfive, 10, 20);
  // ctx.drawImage(laser, zsixe,  msix, 10, 20);
  // ctx.drawImage(laser, zseven,  mseven, 10, 20);
  // ctx.drawImage(laser, zeight,  meight, 10, 20);
  // ctx.drawImage(laser, znine,  mnine, 10, 20);
  // ctx.drawImage(laser, zten,  mten, 10, 20);
  // ctx.drawImage(laser, z,  m, 10, 20);
  // ctx.drawImage(laser, z,  m, 10, 20);
  // ctx.drawImage(laser, z,  m, 10, 20);
  // ctx.drawImage(laser, z,  m, 10, 20);
  // ctx.drawImage(laser, z,  m, 10, 20);

  ctx.drawImage(ship, x - 50, y - 100, 100, 100);
};
const a = setInterval(() => {
  if (i >= 1) {
    if (z >= eOne && z <= eOne + cs.width / 10 && m <= e + cs.width / 10) {
      window.location.href = "../html/space-shooter.html";
    } else if (
      ztwo >= eOne &&
      ztwo <= eOne + cs.width / 10 &&
      mtwo <= e + cs.width / 10 + 10
    ) {
      window.location.href = "../html/space-shooter.html";
    } else if (
      zthree >= eOne &&
      zthree <= eOne + cs.width / 10 &&
      mthree <= e + cs.width / 10 + 10
    ) {
      window.location.href = "../html/space-shooter.html";
    } else if (
      zfour >= eOne &&
      zfour <= eOne + cs.width / 10 &&
      mfour <= e + cs.width / 10 + 10
    ) {
      window.location.href = "../html/space-shooter.html";
    }
  }
  if (i == 0) {
    m = y - 100;
    z = x - 4;
  }
  if (m <= 0) {
    m = y - 100;
    z = x - 4;
  }
  if (i == 20) {
    mtwo = y - 100;
    ztwo = x - 4;
  }
  if (i == 40) {
    mthree = y - 100;
    zthree = x - 4;
  }
  if (i == 60) {
    mfour = y - 100;
    zthree = x - 4;
  }
  if (i >= 20) {
    mtwo -= 5;
  }
  if (i >= 40) {
    mthree -= 5;
  }
  if (i >= 60) {
    mfour -= 5;
  }
  if (mtwo <= 0) {
    mtwo = y - 100;
    ztwo = x - 4;
  }
  if (mthree <= 0) {
    mthree = y - 100;
    zthree = x - 4;
  }
  if (mfour <= 0) {
    mfour = y - 100;
    zfour = x - 4;
  }
  if (window.innerHeight < window.innerWidth && now == false) {
    location.reload();
  }
  if (window.innerHeight > window.innerWidth && now == true) {
    location.reload();
  }
  if (d >= window.innerHeight) {
    d = 0;
    draw();
  }
  if (e >= window.innerHeight) {
    e = 0;
    for (let i = 0; i < 100000; i++) {
      o = Math.floor(Math.random() * window.innerWidth - 100);
      if (o < 0) {
      } else {
        eOne = o;
        break;
      }
    }
  }
  m -= 5;
  e += 3;
  d += 3;
  l -= 3;
  i++;
  draw();
}, 30);

function printMousePos(event) {
  console.log(event);
  x = event.clientX;
  y = event.clientY;
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(back, c, d, cs.width, cs.height);
  ctx.drawImage(behind, c, d - cs.height, cs.width, cs.height);
  if (cs.width > cs.height) {
    ctx.drawImage(enemyNoob, eOne, e, cs.width / 10, cs.width / 10);
  } else {
    ctx.drawImage(enemyNoob, eOne, e, cs.height / 10, cs.height / 10);
  }
  ctx.drawImage(laser, z, m, 10, 20);
  ctx.drawImage(laser, ztwo, mtwo, 10, 20);
  ctx.drawImage(laser, zthree, mthree, 10, 20);
  ctx.drawImage(laser, zfour, mfour, 10, 20);
  ctx.drawImage(ship, x - 50, y - 100, 100, 100);
  draw;
}
document.addEventListener("mousemove", printMousePos);
document.addEventListener(
  "touchmove",
  (touch = (e) => {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  })
);
window.onresize = (ad) => {
  console.log(ad);
  location.reload();
};
