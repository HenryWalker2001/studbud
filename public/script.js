
// listening for constants used in the timer html document
const focusTimeInput = document.querySelector("#study");
const breakTimeInput = document.querySelector("#break");
const pauseBtn = document.querySelector(".hold");

focusTimeInput.value = localStorage.getItem("study");
breakTimeInput.value = localStorage.getItem("break");

// assigning the variables to local storage to be accessed later in the code
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("study", focusTimeInput.value);
  localStorage.setItem("break", breakTimeInput.value);
});

// Listening for repeat button by user
document.querySelector(".repeat").addEventListener("click", () => {
  pressStart.style.transform = "scale(1)";
  clearTimeout(firstTime);
  setProgress(0);
  minutesBox.textContent = 0;
  secondsBox.textContent = 0;
});

// Listening to pause button by user
pauseBtn.addEventListener("click", () => {
  if (holtTimer === undefined) {
    return;
  }
  if (holtTimer) {
    holtTimer = false;
    firstTime = setTimeout("timerDecrease()", 60);
    pauseBtn.textContent = "pause";
    pauseBtn.classList.remove("continue");
  } else {
    clearTimeout(firstTime);
    pauseBtn.textContent = "continue";
    pauseBtn.classList.add("continue");
    holtTimer = true;
  }
});










