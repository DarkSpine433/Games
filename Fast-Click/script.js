const containerObject = document.getElementById("container-object");
const maxWidht = containerObject.offsetWidth;
//game seting
const sec = 19;
const numberOfObject = maxWidht > 1000 ? 7 : 3;
const maxPoint = numberOfObject;
const maxHeight = containerObject.offsetHeight;

// Number of objects
for (let i = 1; i <= numberOfObject; i++) {
  const newObject = document.createElement("button");
  newObject.textContent = "";
  newObject.id = "object-" + i;
  newObject.className = "object";
  newObject.addEventListener("click", () => {
    dp(i);
    up();
  });
  containerObject.appendChild(newObject);
}

// Random position
function Rposition() {
  for (let i = 1; i <= maxPoint; i++) {
    const object = document.getElementById("object-" + i);
    const maxValue = maxWidht;
    const minValue = 0;
    const math = Math.floor(Math.random() * (maxValue - minValue));
    object.style.left = math + "px";

    const maxValueH = maxHeight;
    const mathH = Math.floor(Math.random() * (maxValueH - minValue));
    object.style.top = mathH + "px";
  }
}
Rposition();
window.addEventListener("resize", Rposition);
// After click respown
function dp(n) {
  const object = document.getElementById("object-" + n);
  const maxValue = maxWidht;
  const minValue = 0;
  const math = Math.floor(Math.random() * (maxValue - minValue));
  object.style.left = math + "px";

  const maxValueH = maxHeight;
  const mathH = Math.floor(Math.random() * (maxValueH - minValue));
  object.style.top = mathH + "px";
}
// Counter points
let counter = 0;
const point = document.getElementById("point");
const result = document.getElementById("result");

function up() {
  counter++;
  point.textContent = counter;
  result.innerHTML = "Congratulation Your Score Is: <div>" + counter + "</div>";

  if (counter >= 25) {
    point.style.color = "yellow";
  }

  if (counter >= 50) {
    point.style.color = "red";
  }
}

// Restart page
function rel() {
  location.reload();
}

// Timer
// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("object")) {
let seconds = sec;
const timer = document.getElementById("timer");
setTimeout(() => {
  const interval = setInterval(() => {
    timer.innerHTML = seconds + "s";
    seconds--;

    if (seconds === -1) {
      clearInterval(interval);
      const afterTimer = document.getElementById("bg-res");
      afterTimer.style.display = "block";
    }
  }, 1000);
}, 1300);

// document.removeEventListener("click", arguments.callee);
//   }
// });
