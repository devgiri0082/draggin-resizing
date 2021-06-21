let box = document.querySelector(".box");

box.addEventListener("mousedown", mouseDownHandler);
box.addEventListener("mouseup", mouseUpHandler);
function mouseUpHandler(e) {
  console.log("mouse up");
  console.log("removing");
  box.removeEventListener("mousemove", mouseMoveHandler);
}
let previousX;
let previousY;
function mouseDownHandler(e) {
  console.log("mouse down");
  previousX = e.clientX;
  previousY = e.clientY;
  console.log(document.body.clientHeight, document.body.clientWidth);
  box.addEventListener("mousemove", mouseMoveHandler);
}

function mouseMoveHandler(e) {
  let dx = e.clientX - previousX;
  let dy = e.clientY - previousY;
  console.log(
    document.body.clientHeight,
    dy + box.offsetTop + 100,
    document.body.clientWidth,
    dy + box.offsetLeft + 100
  );
  let top =
    dy + box.offsetTop < 0
      ? 0
      : document.body.clientHeight < dy + box.offsetTop + 100
      ? document.body.clientHeight - 100
      : dy + box.offsetTop;
  let left =
    dx + box.offsetLeft < 0
      ? 0
      : document.body.clientWidth < dx + box.offsetLeft + 100
      ? document.body.clientWidth - 100
      : dx + box.offsetLeft;
  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  previousX = e.clientX;
  previousY = e.clientY;
}
