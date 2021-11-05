// TS는 생성자에서 필드 생성 가능

interface Shape{
    getArea(): number;
}

class Circle2 implements Shape {

    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle2 implements Shape {

    constructor(private width: number, private height: number) {
      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

const shapes2: Shape[] = [new Circle2(5), new Rectangle2(10, 5)];

shapes2.forEach(shape =>{
    console.log(shape.getArea());
});