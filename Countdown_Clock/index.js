var timerDisplay = document.querySelector('.display_time-left');
var endTime = document.querySelector('.display-end-time');
var buttons = document.querySelectorAll('[data-time]');
var countdown;
function timer(seconds) {
  //清除所有存在的計時工作
  clearInterval(countdown);
  var now = Date.now();
  var then = now + seconds * 1000;  
  displayTimeLeft(seconds);
  displayendTime(then);
  
  countdown = setInterval(() =>{
    var secondsLeft = Math.round((then - Date.now()) / 1000);
    //檢查時間小於0,即停止計時
    if(secondsLeft < 0){
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  },1000);

}
//顯示倒數時間
function displayTimeLeft(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainderSeconds = seconds % 60;
  var display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}
//計算結束時間後的時間
function displayendTime(timestamp) {
  var end = new Date(timestamp);
  var hour = end.getHours();
  var minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

//執行計時按鈕
function startTime() {
  var seconds = parseInt(this.dataset.time);
  timer(seconds);
  
}

//計時按鈕
buttons.forEach(button =>{
  button.addEventListener('click',startTime);
});
//取得輸入框內的時間,傳給計時器
document.customForm.addEventListener('submit',function(e){
  e.preventDefault();
  var mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});

