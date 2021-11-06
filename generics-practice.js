"use strict";
// any는 타입이 무엇이 있는지 알 수 없다는 것. (타입 추론 실패)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ...문법을 사용해서 기존의 값을 복사
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
// 타입 추론 성공
function wrap(param) {
    return {
        param: param
    };
}
// interface에서 제너릭 사용
// 문자열 배열, 숫자 배열, 객체 배열 등 하나의 interface만 사용해서 다양한 타입의 배열을 사용할 수 있음.
var wrapped = wrap(10);
var items = {
    list: ['a', 'b', 'c']
};
// 제너릭을 이용한 큐 구현
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
