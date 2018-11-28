//Class example #1-Basic class
//class Circle {
//constructor function
//constructor(radius) {
// this.radius = radius;
// console.log(this.radius);
//}
//}
//const myCircle = new Circle(5);
//console.log(myCircle);

//Class example #2-The Constructor
//class Shape {
//constructor method to create and initialize an object created with a class
//constructor(width, height) {
//  this.width = width;
//  console.log(this.width);
//  this.height = height;
//  console.log(this.height);
//}
//}

//class Circle extends Shape {
//Circle extends Shape, meaning Shape is the "super class" of Circle
// constructor(radius) {
//  super(2 * radius, 2 * radius);
// }
//}

//const myCircle = new Circle(5);

//Class example #3-Methods and Properties

//class Shape {
// Getter property
// get area() {
//  return this.calculateArea();
//}

// constructor(width, height) {
//  this.width = width;
//  this.height = height;
//}

//method #1
// resize(width, height) {
//  this.width = width;
//  this.height = height;
//  }

//method #2
// calculateArea() {
//  return this.width * this.height;
//}
//}

//class Circle extends Shape {
// constructor(radius) {
//   super(2 * radius, 2 * radius);
//  }

// resize(radius) {
//  super.resize(2 * radius, 2 * radius);
// }

//  calculateArea() {
//    const radius = this.width / 2;

//  return Math.PI * radius * radius;
// }
//}

//const myCircle = new Circle(5);

//console.log(myCircle.area);


//Class example #4-Static Method

class Shape {
    // Getter property
    get area() {
        return this.calculateArea();
    }

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    //static keyword defines a method on a class
    static diameter(circle) {
        return circle.width * 2;
    }

    constructor(radius) {
        super(2 * radius, 2 * radius);
    }

    resize(radius) {
        super.resize(2 * radius, 2 * radius);
    }

    calculateArea() {
        const radius = this.width / 2;

        return Math.PI * radius * radius;
    }
}

const myCircle = new Circle(5);

console.log(myCircle.area);