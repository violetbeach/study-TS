"use strict";
// TS는 생성자에서 필드 생성 가능
var Circle2 = /** @class */ (function () {
    function Circle2(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle2.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle2;
}());
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle2;
}());
var shapes2 = [new Circle2(5), new Rectangle2(10, 5)];
shapes2.forEach(function (shape) {
    console.log(shape.getArea());
});
