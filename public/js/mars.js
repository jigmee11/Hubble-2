var cs = document.getElementById("canvas");
let hun = new Image();
hun.src = "../zurag/nasahun.png";
let hun2 = new Image();
hun2.src = "../zurag/nasahun2.png";
let saad = new Image();
saad.src = "../zurag/saadmars.png";
let saad2 = new Image();
saad2.src = "../zurag/Group 99.png";
let spacex = new Image();
spacex.src = "../zurag/space-x.png";
let guideguul = new Image();
guideguul.src = "../zurag/mountain-mars.png";
let spacey = new Image();
spacey.src = "../zurag/puuj.png";
let gal = new Image();
gal.src = "../zurag/qq.png";
let background = new Image();
background.src = "../zurag/mars.png";
const ctx = cs.getContext("2d");
const width = window.innerWidth;
const heigth = window.innerHeight;
//togloomond oroh zuiluud//
let uy = -90;//togloom ehleh uyiin hunii unah y iin utga
let dooshoo = 0.3 //togloom ehleh uyiin hunii unah y giin hasagdah utga
let gx = 0 //guideg uulnii ehleh hesegiin x iin utga
let gx1 = cs.width + 100
let guih = cs.width / 3 //hunii ehleh utga
let unasaneseh = false;
let tr = 0;//hunee guilgehed heregtei utga
let sx = cs.width //nasagiin saadnii ahnii utga
let anhniiuy = cs.height - cs.height / 3 + 10 // nasagiin saadnii y giin utga
let px = cs.width + 100, px1 = cs.width + 600 //puujnii anhnii x
let sx1 = cs.width + 110//saad2 iin ahnii x iin utga
let si1 = 0
let t = 1
let l = cs.height - cs.height / 3.5 - 5 - 30
let map = 0, m = 0;
let iq = 0;
const ehleh = () => {
  ctx.clearRect(0, 0, cs.width, cs.heigth)
  ctx.drawImage(background, 0, 0, cs.width, cs.height);
  ctx.drawImage(guideguul, gx, cs.height / 3 + 10, cs.width + 200, 300);
  ctx.drawImage(hun, cs.width / 3, uy, 110, 90);
}
const undsen = () => {
  ctx.clearRect(0, 0, cs.width, cs.heigth)
  ctx.drawImage(background, 0, 0, cs.width, cs.height);
  ctx.drawImage(guideguul, gx, cs.height / 3 + 10, cs.width + 200, 300);
  ctx.drawImage(guideguul, gx1, cs.height / 3 + 10, cs.width + 100, 300);
  ctx.drawImage(hun, guih, uy, 110, 90);
  ctx.drawImage(saad, sx, anhniiuy, 50, 60)
  ctx.drawImage(spacex, px, cs.height / 2.5, 100, 50)
  ctx.drawImage(saad2, sx1, anhniiuy + 12, 50, 50)
  ctx.drawImage(spacex, px1, cs.height / 2.5, 100, 50)
}
const gg = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(background, 0, 0, cs.width, cs.height);
  ctx.drawImage(guideguul, gx, cs.height / 3 + 10, cs.width + 100, 300);
  ctx.drawImage(guideguul, gx1, cs.height / 3 + 10, cs.width + 100, 300);
  ctx.drawImage(gal, cs.width - 100, l, 80, 120);
};
const duusah = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(background, 0, 0, cs.width, cs.height);
  ctx.drawImage(guideguul, gx, cs.height / 3 + 10, cs.width + 100, 300);
  ctx.drawImage(guideguul, gx1, cs.height / 3 + 10, cs.width + 100, 300);
  ctx.drawImage(hun, guih, uy, 90, 90);
  ctx.drawImage(spacey, cs.width - 100, uy - 30, 80, 100);
};
const unah = setInterval(() => {
  if (unasaneseh === false) {
    uy += dooshoo;
    dooshoo += 0.5;
    if (Math.floor(uy) >= cs.height - (cs.height / 3) - 10) {
      clearInterval(unah)
      unasaneseh = true;
      uy = cs.height - cs.height / 3

    }
  }
  ehleh()

}, 40);
const start = setInterval(() => {
  if (unasaneseh === true) {
    sx -= 4;
    px -= 5
    gx -= 4
    gx1 -= 4
    tr += 0.25;
    sx1 -= 4;
    px1 -= 5
    if (gx <= -cs.width - 100) {
      gx = cs.width;
      iq = iq + 25;
      t++;

      map = document.getElementById("child").style.width = iq + "%";
    }
    if (gx1 <= -cs.width - 100) {
      gx1 = cs.width;
    }
    if (tr % 8 == 0 && jumpUp == false && uy == cs.height - cs.height / 3) {
      hun.src = "../zurag/nasahun2.png";
    } else if (tr % 4 == 0 && jumpUp == false && uy == cs.height - cs.height / 3) {
      hun.src = "../zurag/nasahun.png";
    }
    if (jumpUp == true) {
      hun.src = "../zurag/Group 123.png";
    }
    if (jumpUp) {
      uy -= speedY;
      speedY -= gravity;

      if (speedY < 0) {
        jumpDown = true;
        jumpUp = false;
      }
    }
    if (jumpDown) {
      jumpUp = false;
      uy += speedY;
      speedY += gravity + 0.01;
      if (Math.floor(uy) >= cs.height - cs.height / 3) {
        // clearInterval(start)
        jumpDown = false;
        uy = cs.height - cs.height / 3;

        console.log(uy);
      }
      i = 0;
    }
    if (px <= -100) {
      px = cs.width + 100;
    }

    if (sx <= -60) {
      sx = cs.width
    }
    if (sx1 <= -50 && si1 < 2) {
      sx1 = cs.width + 200
      si1++;
    }
    if (px1 <= -100) {
      px1 = cs.width + 600

    }

    if (sx + 60 >= sx1 && sx > 0 && sx1 > 0 && sx <= sx1 + 60) {
      sx = cs.width
      sx1 = cs.width + 200
      // clearInterval(start) 
    }
    //uheh heseg iin nuhtsul shalgalt
    if (guih + 60 >= sx && guih <= sx + 10 && uy + 70 >= anhniiuy && uy <= anhniiuy + 60) {
      clearInterval(start)
      window.location.href = "../html/uheh.html";
    }
    if (guih + 60 >= sx1 && guih <= sx1 + 10 && uy + 60 >= anhniiuy && uy <= anhniiuy + 60) {
      clearInterval(start)
      window.location.href = "../html/uheh.html";
    }
    if (guih + 80 >= px && guih <= px + 50 && cs.height / 2.5 - 55 <= uy - 10 && uy <= 220 && jumpUp == true) {
      clearInterval(start)
      window.location.href = "../html/uheh.html";
    }
    if (guih + 80 >= px && guih <= px + 50 && uy >= 145 && uy - 90 <= cs.height / 2.5 - 10 && uy <= cs.height / 2.5) {
      clearInterval(start)
      window.location.href = "../html/uheh.html";

    }
    if (guih + 80 >= px1 && guih <= px1 + 50 && cs.height / 2.5 - 55 <= uy - 10 && uy <= 220 && jumpUp == true) {
      clearInterval(start)
      window.location.href = "../html/uheh.html";
    }
    if (guih + 80 >= px1 && guih <= px1 + 50 && uy >= 145 && uy - 90 <= cs.height / 2.5 - 10 && uy <= cs.height / 2.5) {
      clearInterval(start)
      window.location.href = "../html/uheh.html";
    }

    undsen()
    // map += 0.05;


    // if (t == 3) {
    //   // px1 = -120;
    //   px = -120;
    // }
    if (t == 4) {
      iq = iq + 25;
      map = document.getElementById("child").style.width = iq + "%";
      uy = cs.height - cs.height / 3
      clearInterval(start)
      const niseh = setInterval(() => {
        guih += 1;
        if (Math.floor(guih) % 16 == 0) {
          hun.src = "../zurag/nasahun.png";
        }
        if (Math.floor(guih) % 16 == 8) {
          hun.src = "../zurag/nasahun2.png";
        }
        duusah();
        if (guih >= cs.width - 80) {
          clearInterval(niseh);
          const huuruh = setInterval(() => {
            l = l - 5;
            gg();
            if (l <= -120) {
              window.location.href = "space-shooter.html";
            }
          }, 30);
        }
      }, 10);
    }

  }


}, 10);

let jumpDown = false;
let jumpUp = false;
let i = 0;
let chuluu = 0;
let isJumping = false;
let down = 1;
//userdeg
const jump = () => {
  if (unasaneseh === true) {
    i++;
    console.log(i);
    speedY = 0.01 * canvas.height;
    gravity = 0.000185 * canvas.height;
    if (!jumpDown) {
      jumpUp = true;
    }

    if (i === 3) {
      jumpUp = false;
      jumpDown = true;

      i = 0;
    }


  }
};
document.addEventListener("keyup", (e) => {
  jump();
});