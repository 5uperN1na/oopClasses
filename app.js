class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

const myCircle = new Circle(5);

console.log(myCircle);

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);
    }
}