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
  if(localStorage.garag==="3"){
    window.location.href="../html/bugdiigdavsan.html"
  }else if(localStorage.garag==="2"){
    window.location.href="../html/goldmars-jup-davsan.html"
  }else{
    window.location.href="../html/golmarsdavsan.html"
  }
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
  if(localStorage.garag==="3"){
    window.location.href = '../html/bugdiigdavsan.html';
}else if(localStorage.garag==="2"){
  window.location.href="../html/goldmars-jup-davsan.html"
}else{
  window.location.href="../html/golmarsdavsan.html"
}
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
      question: "Далай ван гараг хэдэн сартай вэ?",
      zur: '../zurag/neptune-moon.jpg',
      answers: [
            {text: "30", correct: false},
            {text: "21", correct: false},
            {text: "13", correct: true},
            {text: "3", correct: false}
      ]
    },
    {
      question: "Далай ван гараг дах дундаж хэм",
      zur: '../zurag/neptune-temp.jpg',
      answers: [          
          {text: "-214 целс", correct: true},
          {text: "-300 целс", correct: false},
          {text: "-100 целс", correct: false},
          {text: "-1000 целс", correct: false}
      ]
    },
    {
      question: "Далай ван гараг нь Нарыг тойрход хэр уддаг вэ?",
      zur: '../zurag/neptune-toir.jpg',
      answers: [
            {text: "30 жил", correct: false},
            {text: "165 жил", correct: true},
            {text: "215 жил", correct: false},
            {text: "300 жил", correct: false}
      ]
    },
    {
      question: "Далай ван гараг нь дэлхийгээс хэд дахин том вэ?",
      zur: '../zurag/neptune-com.png',
      answers: [
            {text: "36", correct: false},
            {text: "78", correct: false},
            {text: "100", correct: false},
            {text: "58", correct: true}
      ]
    },
    {
      question: "Далай ван гараг хэр хугацаанд тэнхлэгээ 1 бүтэн эргэх вэ?",
      zur: '../zurag/goy.jpg',
      answers: [
            {text: "24 цаг", correct: false},
            {text: "16 цаг", correct: true},
            {text: "30 цаг", correct: false},
            {text: "40 цаг", correct: false}
      ]
    }
  ];