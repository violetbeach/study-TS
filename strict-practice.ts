// strict 모드에서 허용되지 않는 문법
"use strict";

// 1. x의 타입이 정의되지 않음.
//x = 3.14;

// 2. 변수나 객체의 삭제 
// var x = 3.14;
// delete x;

// 3. 함수 파라미터에 중복된 이름
// function x(p1, p1){};

// 4. 8진수
// var x = 010;

// 5. 이스케이프 문자
// var x = \010;

// 6. 읽기전용 프로퍼티에 값 설정
// 추가 - Object.defineProperty(obj, prop,descriptor) 속성을 정의할 객체, 새로 정의하거나 수정하려는 속성의 이름, 새로 정의하거나 수정하려는 속성을 기술하는 객체
// var obj = {};
//Object.defineProperty(obj, "x", {value:0, writeable:false});

// 7. 조회 전용 프로퍼티에 값 설정
// var obj = {get x() {return 0}};
// obj.x = 3.14;

// 8. eval, arguments
// var eval = 3.14;
//var arguments = 3.14;

// 9. with
// with (Math){x = cos(2)};

// 10. eval() 에 정의된 변수사용
// eval("var x = 2");
// alert(x);