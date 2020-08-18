var cs = document.getElementById("canvas");
let hun = new Image();
hun.src = "../zurag/nasahun.png";
let hun2 = new Image();
hun2.src = "../zurag/Group 74.png";
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
gal.src = "../zurag/puuj.png";
let background = new Image();
background.src = "../zurag/mars.png";
const ctx = cs.getContext("2d");
const width = window.innerWidth;
const heigth = window.innerHeight;
console.log(width, heigth);
//togloomond oroh zuiluud//
let uy;
let dooshoo;
let unsaneseh;
let anhniiuy = cs.height - cs.height / 3 + 10;
let guih = cs.width / 3;
let gx = 0; //guideguul nii x
let gx1 = cs.width + 100;
let px = cs.width + 200; //puujingiin x
let sx = cs.width; //saadnii x
let sx1 = cs.width + 400;
let px1 = cs.width + 800;
let t = 0;
let l = cs.height - cs.height / 3.5 - 5 - 30;
let p = 0;
let la;
//--//
//togloomnii zurah heseg//
const ehleh = () => {
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(background, 0, 0, cs.width, cs.height);
    ctx.drawImage(guideguul, gx, cs.height / 3 + 10, cs.width + 200, 300);
    ctx.drawImage(hun, cs.width / 3, uy, 110, 90);
};
const undsen = () => {
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(background, 0, 0, cs.width, cs.height);
    ctx.drawImage(guideguul, gx, cs.height / 3 + 10, cs.width + 100, 300);
    ctx.drawImage(guideguul, gx1, cs.height / 3 + 10, cs.width + 100, 300);

    ctx.drawImage(saad, sx, anhniiuy, 50, 60);
    ctx.drawImage(spacex, px, cs.height / 2.5, 110, 50);
    ctx.drawImage(saad2, sx1, anhniiuy, 50, 50);
    ctx.drawImage(spacex, px1, cs.height / 2.5, 110, 50);
    ctx.drawImage(hun, guih, uy, 110, 90);
};
const duusah = () => {
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(background, 0, 0, cs.width, cs.height);
    ctx.drawImage(guideguul, gx, cs.height / 3 + 15, cs.width + 100, 300);
    ctx.drawImage(guideguul, gx1, cs.height / 3 + 15, cs.width + 100, 300);
    ctx.drawImage(hun, guih, uy, 90, 90);
    ctx.drawImage(spacey, cs.width - 100, uy - 40, 80, 100);
};
const gg = () => {
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(background, 0, 0, cs.width, cs.height);
    ctx.drawImage(guideguul, gx, cs.height / 3 + 15, cs.width + 100, 300);
    ctx.drawImage(guideguul, gx1, cs.height / 3 + 15, cs.width + 100, 300);
    ctx.drawImage(gal, cs.width - 100, l, 80, 120);
};

//--//
//          //
//Usreh heseg
//         //
let jumpDown = false;
let jumpUp = false;
let i = 0;
let chuluu = 0;
let isJumping = false;
let down = 1;
const jump = () => {
    if (unsaneseh == true) {
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

//togloomii ehnii heseg boloh start heseg
let game = () => {
    uy = -60;
    dooshoo = 0.3;
    unsaneseh = false;
    const unah = setInterval(() => {
        if (unsaneseh === false) {
            uy += dooshoo;
            dooshoo += 0.5;
            if (uy >= cs.height - cs.height / 3 - 10) {
                clearInterval(unah);
                unsaneseh = true;
                uy = cs.height - cs.height / 3;

            }
        }
        ehleh();
    }, 40);
    const start = setInterval(() => {
        if (unsaneseh == true) {
            sx -= 5;
            px -= 7;
            gx -= 5;
            gx1 -= 5;
            sx1 -= 5; //hoyrdoh saad
            px1 -= 8; // hoyrdoh puujin
            if (p <= 110) {
                p = p + 0.2;
                la = document.getElementById("child").style.width = p + "%";
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
                speedY += gravity;
                if (Math.floor(uy) >= cs.height - cs.height / 3.5 - 5) {
                    jumpDown = false;
                    uy = cs.height - cs.height / 3.5 - 5;
                    console.log(uy);
                }

                i = 0;
            }
            if (gx <= -cs.width - 100) {
                gx = cs.width;
            }
            if (gx1 <= -cs.width - 100) {
                gx1 = cs.width;
            }
            if (sx <= -80) {
                sx = cs.width;
            }
            if (px <= -130 && sx <= -80) {
                px = cs.width;
            }
            if (px1 <= -130 && t < 3) {
                px1 = cs.width;
            }
            //ogt usreegui saadaanda tulval uhdeg heseg
            if (guih + 54.4 >= sx && uy == anhniiuy && sx >= guih - 60) {
                window.location.href = "../html/uheh.html";
            }
            if (guih + 25 >= sx && uy >= anhniiuy - 60 && sx >= guih - 60) {
                window.location.href = "../html/uheh.html";
            }
            if (
                uy - 60 <= cs.height / 2.5 - 33 &&
                guih >= px - 40 &&
                guih - 110 <= px &&
                cs.height / 2.5 - 50 <= uy - 60
            ) {
                window.location.href = "../html/uheh.html";
            }
            if (
                uy >= cs.height / 2.5 - 35 &&
                guih - 40 <= px &&
                guih >= px - 40 &&
                uy - 60 <= cs.height / 2.5 - 33
            ) {
                window.location.href = "../html/uheh.html";
            }
            if (
                uy - 60 <= cs.height / 2.5 - 33 &&
                guih >= px1 - 40 &&
                guih - 110 <= px1 &&
                cs.height / 2.5 - 50 <= uy - 60
            ) {
                window.location.href = "../html/uheh.html";
            }
            if (
                uy >= cs.height / 2.5 - 35 &&
                guih - 40 <= px1 &&
                guih >= px1 - 40 &&
                uy - 60 <= cs.height / 2.5 - 33
            ) {
                window.location.href = "../html/uheh.html";
            }
            if (guih + 54.4 >= sx1 && uy == anhniiuy && sx1 >= guih - 60) {
                window.location.href = "../html/uheh.html";
            }
            if (guih + 25 >= sx1 && uy >= anhniiuy - 60 && sx1 >= guih - 60) {
                window.location.href = "../html/uheh.html";
            }
            undsen();
            if (sx <= -70) {
                t++;
            }
            if (t == 6) {
                uy = cs.height - cs.height / 3.5 - 5;
                px = cs.width + 100;
                clearInterval(start);
                const niseh = setInterval(() => {
                    guih += 4;
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
                }, 30);
            }
        }
    }, 20);
};
game();
