// tracking state of Simple timer on or off
var active = false;

function begin_time() {
  if (active) {
    var timer = document.getElementById("simple_timer").innerHTML;
    var arr = timer.split(":");
    var hour = arr[0];
    var minute = arr[1];
    var second = arr[2];

    if (second == 59){
      if (minute == 59) {
        hour++;
        minute = 0;
        if (hour < 10) hour = "0" + hour;
      } else {
        minute++;
      }
      if (minute < 10) minute = "0" + minute;
      second = 0;
    } else {
      second++;
      if (second < 10) second = "0" + second;
    }

    document.getElementById("simple_timer").innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(begin_time, 1000);
  }
}

function newTime() {
  if (active == false) {
    active = true;
    begin_time();
    console.log("Timer has began");
    document.getElementById("switch").innerHTML = "PAUSE";
  } else {
    active = false;
    console.log("Timer is paused");
    document.getElementById("switch").innerHTML = "START";
  }
}

function restart() {
  document.getElementById("simple_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
  console.log("Timer has restarted");
}








const timerBox = document.querySelector(".timer");
const endSound = document.querySelector("audio");

const minutesBox = document.querySelector(".timerMinutes");
const secondsBox = document.querySelector(".timerSeconds");

const pressStart = document.querySelector(".begin");
localStorage.setItem("timerButton", "study");



let firstTime, countSecs, progression, holtTimer, minutes, secs;

pressStart.addEventListener("click", () => {
  let timerButton = localStorage.getItem("timerButton");

  if (timerButton === "study") {
    minutes = +localStorage.getItem("study") || 1;
  } else {
    minutes = +localStorage.getItem("break") || 1;
  }

  secs = minutes * 60;
  countSecs = minutes * 60;
  setTimeout(timerDecrease(), 60);
  pressStart.style.transform = "scale(0)";
  holtTimer = false;
});

function timerDecrease() {
  minutesBox.textContent = Math.floor(secs / 60);
  secondsBox.textContent = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`;
  if (circle.classList.contains("alert")) {
    circle.classList.remove("alert");
  }

  if (secs > 0) {
    progression = Math.ceil(((countSecs - secs) / countSecs) * 100);
    setProgress(progression);
    secs--;
    firstTime = window.setTimeout("timerDecrease()", 1000);
    if (secs < 10) {
      circle.classList.add("alert");
    }
  } else {
    minutes = 0;
    secs = 0;
    endSound.play();
    let timerButton = localStorage.getItem("timerButton");

    if (timerButton === "study") {
      pressStart.textContent = "start break";
      pressStart.classList.add("break");
      localStorage.setItem("timerButton", "break");
    } else {
      pressStart.classList.remove("break");
      pressStart.textContent = "start study";
      localStorage.setItem("timerButton", "study");
    }
    pressStart.style.transform = "scale(1)";
  }
}