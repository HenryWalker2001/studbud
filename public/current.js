// creating constant for the circle animation
const circle = document.querySelector(".elapsedTimeSpiral");
const radius = circle.r.baseVal.value;

// calculating circumference using the circle formula
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

// function to show the progress of the circle completed
function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
