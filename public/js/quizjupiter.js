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
    question: "Бархасбадь гарагийн масс",
    zur: '../zurag/jupiter-mass.jpg',
    answers: [
          {text: "Дэлхийгээс 10 дахин хүнд масстай", correct: false},
          {text: "Дэлхийгээс 512 дахин хүнд масстай", correct: false},
          {text: "Дэлхийгээс 2 дахин бага масстай", correct: false},
          {text: "Дэлхийгээс 318 дахин хүнд масстай", correct: true},
    ]
  }, 
  {
    question: "Бархасбадь гараг хэдэн сартай вэ?",
    zur: "../zurag/jupiter-moon.jpg",
    answers: [
          {text: "106", correct: false},
          {text: "79", correct: true},
          {text: "97", correct: false},
          {text: "50", correct: false}
    ]
  },
  {
    question: "Бархасбадь гараг хэдэн бүслүүртэй вэ?",
    zur: "../zurag/jupiter-rings.jpg",
    answers: [
          {text: "4", correct: true},
          {text: "9", correct: false},
          {text: "0", correct: false},
          {text: "2", correct: false}
    ]
  },
  {
    question: "Аль 2 гараг нь Бархасбадьтай хамгийн ойрхон хөрш вэ?",
    zur: "../zurag/jupiter-close.jpg",
    answers: [
          {text: "Санчир бас Далайн ван", correct: false},
          {text: "Тэнгэрийн ван бас Санчир", correct: false},
          {text: "Дэлхий бас Ангараг", correct: false},
          {text: "Ангараг бас Санчир", correct: true}
    ]
  }, 
  {
    question: "Бархасбадь гарагийн нэг өдөр хэдэн цагтай тэнцэх вэ?",
    zur: "../zurag/ju.jpg",
    answers: [
          {text: "20 цаг", correct: false},
          {text: "10 цаг", correct: true},
          {text: "24 цаг", correct: false},
          {text: "30 цаг", correct: false}
    ]
  }
];