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

const behind = new Image();
behind.src = "../zurag/spaceback.jpg";
const enemyNoob = new Image();
enemyNoob.src = "../zurag/enemy2.png";
const chuluu = new Image();
chuluu.src = "../zurag/saad2.png";
let c = 0;
let d = 0;
let qq;
let x = cs.width / 2 - cs.width / 15;
let y = cs.height - cs.height / 3.5;
let daisanx = Math.floor(Math.random() * (cs.width - 200));
let daisany = -cs.height / 6;
let lex, ley, jijigx, jijigy;
let chuluux = Math.floor(Math.random() * (cs.width - 200));
let chuluuy = -cs.height / 4;
if (chuluux + cs.width / 12 >= daisanx && chuluux <= daisanx + cs.width / 12) {
    daisanx = Math.floor(Math.random() * cs.width - 10);
    chuluux = Math.floor(Math.random() * cs.width - 10);
}
let ardtal = () => {
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(behind, c, d - cs.height, cs.width, cs.height);
    ctx.drawImage(back, c, d, cs.width, cs.height);
    ctx.drawImage(laser, lx1, ly1, cs.width / 100, cs.height / 20);
    ctx.drawImage(laser, lx2, ly2, cs.width / 100, cs.height / 20);
    ctx.drawImage(ship, x, y, cs.width / 12, cs.height / 6);
    ctx.drawImage(laser, lx, ly, cs.width / 100, cs.height / 20);
    ctx.drawImage(enemyNoob, daisanx, daisany, cs.width / 12, cs.height / 8);
    ctx.drawImage(chuluu, chuluux, chuluuy, cs.width / 12, cs.height / 8);
    ctx.drawImage(chuluu, jijigx, jijigy, cs.width / 24, cs.height / 16);
    ctx.drawImage(laserenemy, lex, ley, cs.width / 100, cs.height / 20);
};

ly = cs.height - cs.height / 2 - cs.height / 24; //laseriin y
lx = cs.width / 2 - cs.width / 15 + cs.width / 26;
lx1 = cs.width / 2 - cs.width / 15 + cs.width / 26;
ly1 = cs.height - cs.height / 2 + cs.height / 24;
lx2 = cs.width / 2 - cs.width / 15 + cs.width / 26;
ly2 = cs.height - cs.height / 2 + (3.5 * cs.height) / 24;
lex = daisanx + cs.width / 26;
ley = daisany + cs.height / 8;
let i = 100;
let ylalt = 0;
let gg = false;

const background = setInterval(() => {
    d++;
    if (d >= cs.height) {
        d = 0;
    }
    ardtal();
    if (gg === true) {
        y--;
    }
    if (y <= -cs.height / 6) {
        window.location.href = "../html/bugdiigdavsan.html";
    }
}, 10);
const buu = setInterval(() => {
    // ly -= 4;
    // ly1 -= 4;
    // ly2 -= 4;
    daisany += 2;
    chuluuy += 2;
    ley += 5;

    // if (ly < -cs.height / 24) {
    //   lx = x + cs.width / 26;
    //   ly = y - cs.height / 24;
    // }
    // if (ly1 < -cs.height / 24) {
    //   lx1 = x + cs.width / 26;
    //   ly1 = y - cs.height / 24;
    // }
    // if (ly2 < -cs.height / 24) {
    //   lx2 = x + cs.width / 26;
    //   ly2 = y - cs.height / 24;
    // }
    if (ley >= cs.height) {
        lex = daisanx + cs.width / 26;
        ley = daisany + cs.height / 24;
    }
    if (daisany >= cs.height) {
        daisanx = Math.floor(Math.random() * (cs.width - 100));
        daisany = -cs.height / 6;
        i = i - 5;
        l = document.getElementById("child").style.width = i + "%";
    }
    if (chuluuy >= cs.height) {
        chuluux = Math.floor(Math.random() * (cs.width - 100));
        chuluuy = -cs.height / 4;
        i = i - 5;
        l = document.getElementById("child").style.width = i + "%";
    }
    //daisan uheh heseg
    if (
        daisanx <= lx &&
        daisanx + cs.width / 12 >= lx &&
        ly <= daisany + cs.height / 8.2
    ) {
        daisanx = Math.floor(Math.random() * (cs.width - 100));
        daisany = -cs.height / 6;
        lx = x + cs.width / 26;
        ly = y - cs.height / 24;
        ylalt++;
        qq = document.getElementById("puujintoo").innerHTML = "x" + (4 - ylalt);
    }
    if (
        daisanx <= lx1 &&
        daisanx + cs.width / 12 >= lx1 &&
        ly1 <= daisany + cs.height / 8.2
    ) {
        daisanx = Math.floor(Math.random() * (cs.width - 100));
        daisany = -cs.height / 6;
        lx1 = x + cs.width / 26;
        ly1 = y - cs.height / 24;
        ylalt++;
        qq = document.getElementById("puujintoo").innerHTML = "x" + (4 - ylalt);
    }
    if (
        daisanx <= lx2 &&
        daisanx + cs.width / 12 >= lx2 &&
        ly2 <= daisany + cs.height / 8.2
    ) {
        daisanx = Math.floor(Math.random() * (cs.width - 100));
        daisany = -cs.height / 6;
        lx2 = x + cs.width / 26;
        ly2 = y - cs.height / 24;
        ylalt++;
        qq = document.getElementById("puujintoo").innerHTML = "x" + (4 - ylalt);
    }
    //
    // chuluunii heseg
    if (
        chuluux <= lx &&
        chuluux + cs.width / 12 >= lx &&
        ly <= chuluuy + cs.height / 8.2
    ) {
        // let bairshil = chuluux;
        // let bair = chuluuy;
        chuluux = Math.floor(Math.random() * (cs.width - 200));
        chuluuy = -cs.height / 6;
        // jijigx = bairshil;
        // jijigy = bair;
        // jijigy++;
        lx = x + cs.width / 26;
        ly = y - cs.height / 24;
    }
    if (
        chuluux <= lx1 &&
        chuluux + cs.width / 12 >= lx1 &&
        ly1 <= chuluuy + cs.height / 8.2
    ) {
        chuluux = Math.floor(Math.random() * cs.width - 10);
        chuluuy = -cs.height / 6;
        lx1 = x + cs.width / 26;
        ly1 = y - cs.height / 24;
    }
    if (
        chuluux <= lx2 &&
        chuluux + cs.width / 12 >= lx2 &&
        ly2 <= chuluuy + cs.height / 8.2
    ) {
        chuluux = Math.floor(Math.random() * cs.width - 10);
        chuluuy = -cs.height / 6;
        lx2 = x + cs.width / 26;
        ly2 = y - cs.height / 24;
    }
    if (lex >= x && lex <= x + cs.width / 12 && ley + cs.height / 21 >= y) {
        lex = daisanx + cs.width / 26;
        ley = daisany + cs.height / 8;
        i = i - 10;
        console.log(i);
        l = document.getElementById("child").style.width = i + "%";
    }
    if (ylalt == 4) {
        chuluux = Math.floor(Math.random() * cs.width - 10);
        chuluuy = -cs.height / 6;
        daisanx = Math.floor(Math.random() * cs.width - 10);
        daisany = -cs.height / 6;
        lx = cs.width + 100;
        ley = 0;
        lx1 = cs.width + 100;
        ly1 = 0;
        lx2 = cs.width + 100;
        ly2 = 0;
        lex = cs.width + 100;
        gg = true;

        clearInterval(buu);
    }
    const sum = setInterval(() => {
        ly -= 4;
        ly1 -= 4;
        ly2 -= 4;
        if (ly < -cs.height / 24) {
            lx = x + cs.width / 26;
            ly = y - cs.height / 24;
        }
        if (ly1 < -cs.height / 24) {
            lx1 = x + cs.width / 26;
            ly1 = y - cs.height / 24;
        }
        if (ly2 < -cs.height / 24) {
            lx2 = x + cs.width / 26;
            ly2 = y - cs.height / 24;
        }
    }, 500);
    if (i <= 0) {
        window.location.href = "../html/mars-shooter.html";
    }
}, 30);

document.addEventListener(
    "touchmove",
    (touch = (e) => {
        // if (
        //   x + cs.width / 12 <= cs.width + 2 &&
        //   x >= -2 &&
        //   y + cs.height / 6 <= cs.height + 2 &&
        //   y >= -2
        // ) {
        x = e.touches[0].clientX;
        //}
    })
);
window.onresize = (ad) => {
    console.log(ad);
    location.reload();
};