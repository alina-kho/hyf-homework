console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumference() {
    return Math.PI * this.radius * 2;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circleOne = new Circle(10);
console.log(circleOne.getDiameter());
console.log(circleOne.getCircumference());
console.log(circleOne.getArea());

const circleTwo = new Circle(15);
console.log(circleTwo.getDiameter());
console.log(circleTwo.getCircumference());
console.log(circleTwo.getArea());
