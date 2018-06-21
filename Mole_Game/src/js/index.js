const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;
let lastHole;
let timeup = false;

function randomTime(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  let idx = Math.floor(Math.random() * holes.length);
  let hole = holes[idx];
  if(hole === lastHole){
    // console.log('got same hole');
    return randomHole(holes);
  }
  // console.log(hole);
  lastHole = hole;
  return hole;
}

//執行cat動作
function peep() {
  let time = randomTime(200,1000);
  let hole = randomHole(holes);
  // console.log(time,hole);
  hole.classList.add('up');
  //執行循環,如果timeup不為true則繼續執行peep並移除css標籤
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeup){
      peep();
    }
  }, time);
}

//開始遊戲
function startGame() {
  scoreBoard.textContent = 0;
  timeup = false;
  score = 0;
  peep();
  //設定遊戲時間10秒
  setTimeout(() => {
    timeup = true;
  }, 10000);
}
//點擊function
function bonk(e) {
  if(!e.isTrusted){//是否有點擊到cat
    return;
  }
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

//綁定cat點擊function
moles.forEach(mole =>{
  mole.addEventListener('click',bonk)
});
