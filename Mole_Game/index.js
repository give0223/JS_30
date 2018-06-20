var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var lastHole;

function randomTime(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  var idx = Math.floor(Math.random() * holes.length);
  var hole = holes[idx];
  if(hole === lastHole){
    console.log('got same hole');
    return randomHole(holes);
  }
  // console.log(hole);
  lastHole = hole;
  return hole;
}

function peep() {
  var time = randomTime(200,1000);
  var hole = randomHole(holes);

}