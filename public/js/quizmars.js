const btnS = document.getElementById('start');
const asuult = document.getElementById('qu');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const para = document.getElementById('pa')
const q = document.getElementById('q-container');
const next = document.getElementById('next');
const returne = document.getElementById('returne');
const zurag = document.getElementById('image');
const aguul = document.getElementById('zurag');
const zu = document.getElementById('dar');

let correct;
let shufle;
const ner = [first, second, third, fourth];
let m=0, n=0, s=0;

const start = () => {
    aguul.style.display = 'block';
    zu.style.marginLeft = '5vw';
    btnS.remove();
    asuult.style.opacity = "100";
    asuult.style.display='block';
    shufle = questions.sort(() => Math.random() - .5);
    index = 0;
    ih();
    asuult.style.width = '70vw';
    asuult.style.height = '50vh';
    para.style.width = '70vw';
    para.style.height = '10vh';
    q.style.height = '30vh';
    q.style.width = '70vw';
} 
const ih = () =>{
    if(m<=3){
        reset(m);
        m++;
    }
    else{
      window.location.href = '../html/gol.html';
    }
}
const reset = (m) => {
    for(let i=0; i<4; i++){
        if(i==0){
            para.innerHTML = shufle[m].question;
        }
        show(ner[i], i);
    }
    zurag.src = shufle[index].zur;
}
const show = (name, i) => {
    name.innerHTML = shufle[index].answers[i].text;
}

const nextl = () => {
  for(let i=0; i<4; i++){
    ner[i].style.backgroundColor = '#19A8F1';
  }
  next.style.display = 'none';
  s = 0;
  ih();
  n =0;
}

const returner = () => {
  window.location.href = '../html/gol.html';
}

const checker = (e) => {
    if(s==1){
      return;
    }
    for(let i=0; i<4; i++){
      if(shufle[index].answers[i].correct){
        if(e.target.innerHTML==shufle[index].answers[i].text){
          next.style.display = 'block';
          n = 1;
        }
        ner[i].style.backgroundColor = 'green';
      }
      else{
        ner[i].style.backgroundColor = 'red';
      }
    }
    if(n==0){
      returne.style.display = 'block';
    }
    index++;
    s++;
}

first.addEventListener('click', checker);
second.addEventListener('click', checker);
third.addEventListener('click', checker);
fourth.addEventListener('click', checker);

const questions = [
    {
      question: "Ангараг гараг нь нарны аймгийн хэд дэх гараг?",
      zur: '../zurag/solar-system.jpg', 
      answers: [
        { text: "4", correct: true },
        { text: "2", correct: false },
        { text: "3", correct: false },
        { text: "8", correct: false },
      ],
    },
    {
      question: "Ангараг гараг нь хэдэн дагуултай вэ?",
      zur: '../zurag/mars-moon.jpg', 
      answers: [
        { text: "5", correct: false },
        { text: "2", correct: true },
        { text: "1", correct: false },
        { text: "0", correct: false },
      ],
    },
    // {
    //   question: "Ангараг гараг нь агаар мандлын хувьд ямар вэ?",
    //   zur: '../zurag/mars-atmo.jpg', 
    //   answers: [
    //     { text: "Дэлхий тэЙ адил", correct: false },
    //     { text: "YES!!!", correct: false },
    //     { text: "Маш хатуу нүүрсхүчлийн хийгээс тогтсон", correct: false },
    //     { text: "Маш нимгэн нүүрсхүчлийн хийгээс тогтсон", correct: true },
    //   ],
    // },
    {
      question: "Ангараг гарагийн хэмжээ",  
      zur: '../zurag/mars-size.png', 
      answers: [
        { text: "3000 км радиус", correct: false },
        { text: "3390 км радиус", correct: true },
        { text: "2500 км радиус", correct: false },
        { text: "3800 км радиус", correct: false },
      ],
    },
    {
      question: "Ангараг гарагийн 1 жилийн хугацаа",
      zur: '../zurag/mars-day.jpg', 
      answers: [
        { text: "500", correct: false }, 
        { text: "365", correct: false },
        { text: "720", correct: false },
        { text: "687", correct: true }
      ],
    },
    {
      question: "Ангараг гараг дээрх дундаж температур",
      zur: '../zurag/mars-atmo.jpg', 
      answers: [
        { text: "100 целс", correct: false },
        { text: "43 целс", correct: false },
        { text: "63 целс", correct: true },
        { text: "70 целс", correct: false }
      ],
    },
    {
      question: "Ангараг гараг дээр ус байгаа юу?",
      zur: '../zurag/mars-water.jpg',
      answers: [
        {text : "Байгаа", correct: true},
        {text : "Байхгүй", correct: false},
        {text : "", correct: ''},
        {text : "", correct: ''}
      ]
    }
  ];