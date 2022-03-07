//Obtaining HTML elements
const canvas = document.querySelector("canvas");

//Making canvas fullscreen
canvas.height = screen.availHeight;
canvas.width = screen.availWidth;

//Make some art using classes
//Task 1 - Paint a circle to a canvas element
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#00BFFF";
ctx.fill();
ctx.strokeStyle = "white";
ctx.stroke();

// Task 2 - Circle class
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fillStyle = this.fillColor;
    context.fill();
    context.stroke();
  }
}

//Test
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw(ctx);

//Task 3 - Interval drawing
function drawRandomCircle() {
  const minRadius = 5; //random
  const maxRadius = 70; //random
  const circle = new Circle(
    Math.floor(Math.random() * canvas.width),
    Math.floor(Math.random() * canvas.height),
    minRadius + Math.random() * (maxRadius - minRadius),
    0,
    2 * Math.PI,
    `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
  );
  circle.draw(ctx);
}

function drawOnInterval() {
  setInterval(() => {
    drawRandomCircle();
  }, 100);
}

// drawOnInterval();

//Task 4 - Follow the mouse
canvas.addEventListener("pointermove", (e) => {
  const pX = e.clientX;
  const pY = e.clientY;
  const minRadius = 5; //random
  const maxRadius = 70; //random
  const circle = new Circle(
    pX,
    pY,
    minRadius + Math.random() * (maxRadius - minRadius),
    0,
    2 * Math.PI,
    `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
  );
  circle.draw(ctx);
});
