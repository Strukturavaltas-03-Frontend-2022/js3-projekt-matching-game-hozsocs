/* eslint-disable no-use-before-define */
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');
const card7 = document.querySelector('.card7');
const card8 = document.querySelector('.card8');
const card9 = document.querySelector('.card9');
const card0 = document.querySelector('.card0');
const time = document.querySelector('.clock');

const sequence = new Set();
let activecardcounter = 0;
let firstshowingcard = '';
let secondshowingcard = '';
let startdate = new Date();
let fullclick = 0;
let samecardcounter = 0;

const img1 = document.createElement('img');
img1.src = '../images/1.jpg';
img1.classList.add('cardimage');

const img2 = document.createElement('img');
img2.src = '../images/2.jpg';
img2.classList.add('cardimage');

const img3 = document.createElement('img');
img3.src = '../images/3.jpg';
img3.classList.add('cardimage');

const img4 = document.createElement('img');
img4.src = '../images/4.jpg';
img4.classList.add('cardimage');

const img5 = document.createElement('img');
img5.src = '../images/5.jpg';
img5.classList.add('cardimage');

const img6 = document.createElement('img');
img6.src = '../images/1.jpg';
img6.classList.add('cardimage');

const img7 = document.createElement('img');
img7.src = '../images/2.jpg';
img7.classList.add('cardimage');

const img8 = document.createElement('img');
img8.src = '../images/3.jpg';
img8.classList.add('cardimage');

const img9 = document.createElement('img');
img9.src = '../images/4.jpg';
img9.classList.add('cardimage');

const img10 = document.createElement('img');
img10.src = '../images/5.jpg';
img10.classList.add('cardimage');

// random kártyakiválasztás!
const randomizer = () => {
  sequence.clear();
  let index = 0;
  while (sequence.size < 10) {
    index = Math.round(Math.random() * 10);
    if (index < 10) { sequence.add(index); } else index = 0;
  }
};

// Kártyák elrejtése a játék indulásakor
const startgame = () => {
  img10.classList.add('hidden');
  img1.classList.add('hidden');
  img2.classList.add('hidden');
  img3.classList.add('hidden');
  img4.classList.add('hidden');
  img5.classList.add('hidden');
  img6.classList.add('hidden');
  img7.classList.add('hidden');
  img8.classList.add('hidden');
  img9.classList.add('hidden');
};
// kártyák feltöltése képekkel
const cardfill = () => {
  let j = 1;
  let string = '';
  sequence.forEach((value) => {
    switch (j) {
      case 1: string = img1; break;
      case 2: string = img2; break;
      case 3: string = img3; break;
      case 4: string = img4; break;
      case 5: string = img5; break;
      case 6: string = img6; break;
      case 7: string = img7; break;
      case 8: string = img8; break;
      case 9: string = img9; break;
      case 10: string = img10; break;
      default: break;
    }

    switch (value) {
      case 0: { card0.appendChild(string); break; }
      case 1: { card1.appendChild(string); break; }
      case 2: { card2.appendChild(string); break; }
      case 3: { card3.appendChild(string); break; }
      case 4: { card4.appendChild(string); break; }
      case 5: { card5.appendChild(string); break; }
      case 6: { card6.appendChild(string); break; }
      case 7: { card7.appendChild(string); break; }
      case 8: { card8.appendChild(string); break; }
      case 9: { card9.appendChild(string); break; }
      default: break;
    }
    j += 1;
  });
};

// óra
const clock = () => {
  const actualdate = new Date();
  const deltatime = (actualdate - startdate) / 1000;
  const ora = Math.floor(deltatime / (3600));
  const perc = Math.floor((deltatime - ora * 3600) / 60);
  const mp = Math.floor((deltatime - ora * 3600 - perc * 60));
  let p = 0;
  let m = 0;

  if (mp < 10) { m = '0'; } else m = '';
  if (perc < 10) { p = '0'; } else p = '';

  time.innerHTML = `${ora}:${p}${perc}:${m}${mp}`;

  if (samecardcounter < 5) { setTimeout(clock, 1000); }
};

// kártyák visszaforgatása hibás választás után
const movebackcards = () => {
  firstshowingcard.firstChild.classList.add('hidden');
  secondshowingcard.firstChild.classList.add('hidden');
  activecardcounter = 0;
};

const nothing = () => {
  this.children[0].display = 'none';
};

// Egyezés esetén a teendők
const samecards = () => {
  firstshowingcard.children[0].style.display = 'none';
  secondshowingcard.children[0].style.display = 'none';
  firstshowingcard.removeEventListener('click', nothing);
  secondshowingcard.removeEventListener('click', nothing);
  firstshowingcard.style = 'background-color: aqua';
  secondshowingcard.style = 'background-color: aqua';
  activecardcounter = 0;
};

// játéktér úrjrarajzolása
const redrawtable = () => {
  card0.style.backgroundColor = 'aliceblue';
  card1.style.backgroundColor = 'aliceblue';
  card2.style.backgroundColor = 'aliceblue';
  card3.style.backgroundColor = 'aliceblue';
  card4.style.backgroundColor = 'aliceblue';
  card5.style.backgroundColor = 'aliceblue';
  card6.style.backgroundColor = 'aliceblue';
  card7.style.backgroundColor = 'aliceblue';
  card8.style.backgroundColor = 'aliceblue';
  card9.style.backgroundColor = 'aliceblue';
  img1.style.display = '';
  img2.style.display = '';
  img3.style.display = '';
  img4.style.display = '';
  img5.style.display = '';
  img6.style.display = '';
  img7.style.display = '';
  img8.style.display = '';
  img9.style.display = '';
  img10.style.display = '';
};
// kattintásfigyelés
const clicklistener = () => {
  card0.addEventListener('click', () => cardshower(card0));
  card1.addEventListener('click', () => cardshower(card1));
  card2.addEventListener('click', () => cardshower(card2));
  card3.addEventListener('click', () => cardshower(card3));
  card4.addEventListener('click', () => cardshower(card4));
  card5.addEventListener('click', () => cardshower(card5));
  card6.addEventListener('click', () => cardshower(card6));
  card7.addEventListener('click', () => cardshower(card7));
  card8.addEventListener('click', () => cardshower(card8));
  card9.addEventListener('click', () => cardshower(card9));
};

// játék újraindítása

const restart = () => {
  samecardcounter = 0;
  activecardcounter = 0;
  firstshowingcard = '';
  secondshowingcard = '';
  fullclick = 0;
  time.innerHTML = '00:00:00';

  // clicklistener();
  redrawtable();
  randomizer();
  cardfill();
  startgame();
};

// Játék vége
const gameover = () => {
  if (samecardcounter > 4) {
    setTimeout(restart, 5000);
  }
};

// egyezés vizsgálata
const checkcard = () => {
  if (firstshowingcard.children[0].src === secondshowingcard.children[0].src) {
    setTimeout(samecards, 2000);
    samecardcounter += 1;
    gameover();
  } else { setTimeout(movebackcards, 2000); }
};

// kártya mejelenítése kattintásra
const cardshower = (cardname) => {
  const activeimage = cardname.children[0];

  if (fullclick === 0) {
    startdate = new Date();
    clock();
  }
  fullclick += 1;

  if (activeimage.style.display === 'none') {} else {
    if (activecardcounter < 2) {
      setTimeout(activeimage.classList.remove('hidden'), 3000);
    }

    if (activecardcounter === 0) { firstshowingcard = cardname; } else if
    (activecardcounter === 1) {
      secondshowingcard = cardname;
      checkcard();
    }

    activecardcounter += 1;
  }
};

clicklistener();
randomizer();
cardfill();
startgame();
