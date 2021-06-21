let line = document.querySelector(".line");
let left = document.querySelector(".left");
let activated = false;
let container = document.querySelector(".container");

line.addEventListener("mousedown", mouseDownHandler);
line.addEventListener("mouseup", mouseUpHandler);
container.addEventListener("mousemove", mouseMoveHandler);

function mouseUpHandler() {
  line.removeEventListener("mousemove", mouseMoveHandler);
  activated = false;
}

function mouseDownHandler(e) {
  activated = true;
}

function mouseMoveHandler(e) {
  if (!activated) return;
  console.log(e.clientX);
  if (e.clientX < 70) return;
  left.style.width = `${e.clientX}px`;
}
