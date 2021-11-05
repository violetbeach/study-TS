"use strict";
// 정해진 파라미터, 정해진 리턴타입만 가능
// 반환 타입이 없다면 void로 설정
function sum(x, y) {
    // return '1'; 에러 발생
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
