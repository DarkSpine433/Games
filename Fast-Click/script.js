const containerObject = document.getElementById("container-object");

const maxWidth = containerObject.offsetWidth;
const sec = 19;
const mobileOB = 3;
const pcOB = 10;
const numberOfObject = maxWidth > 1000 ? pcOB : mobileOB;
const maxPoint = numberOfObject;
const maxHeight = containerObject.offsetHeight;

// Number of objects
for (let i = 1; i <= numberOfObject; i++) {
  const newObject = document.createElement("button");
  newObject.draggable = true;
  newObject.textContent = "";
  newObject.id = "object-" + i;
  newObject.className = "object";
  newObject.tabIndex = -1;
  newObject.type = "text";
  newObject.addEventListener("click", () => {
    dp(i);
    up();
  });
  newObject.addEventListener("dragend", () => {
    dp(i);
    up();
  });
  containerObject.appendChild(newObject);
}

// Random position

for (let i = 1; i <= maxPoint; i++) {
  const object = document.getElementById("object-" + i);
  const maxValue = maxWidth;
  const minValue = 0;
  const math = Math.floor(Math.random() * (maxValue - +minValue));
  object.style.left = math + "px";

  const mathH = Math.floor(Math.random() * (maxHeight - minValue));
  object.style.top = mathH + "px";
}

// After click respawn
function dp(n) {
  const object = document.getElementById("object-" + n);
  const maxValue = maxWidth;
  const minValue = 0;
  const math = Math.floor(Math.random() * (maxValue - +minValue));
  object.style.left = math + "px";

  const mathH = Math.floor(Math.random() * (maxHeight - minValue));
  object.style.top = mathH + "px";
}

// Counter points
let counter = 0;
const point = document.getElementById("point");
const result = document.getElementById("result");

function up() {
  counter++;
  point.textContent = counter;
  result.innerHTML = `Congratulation Your Score Is: <div>${counter}</div>`;

  if (counter >= 25) {
    point.style.color = "yellow";
    const pointWraper = document.getElementById("point-wraper");
    pointWraper.addEventListener("mouseover", () => {
      point.style.opacity = "20%";
      point.style.color = "red";
    });
    pointWraper.addEventListener("mouseleave", () => {
      point.style.opacity = "100%";
      point.style.color = "yellow";
    });
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
let seconds = sec;
const timer = document.getElementById("timer");
setTimeout(() => {
  const interval = setInterval(() => {
    timer.textContent = `${seconds}s`;
    seconds--;

    if (seconds === -1) {
      clearInterval(interval);
      const afterTimer = document.getElementById("bg-res");
      afterTimer.style.display = "block";
    }
  }, 1000);
}, 1300);

addEventListener("resize", () => {
  location.reload();
});
