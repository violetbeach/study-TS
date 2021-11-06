"use strict";
// TS - Type Alias 타입을 명시할 수 있음.
// Type Alias와 interface의 차이는 interface는 같은 이름으로 여러 번 선언을 해도 컴파일 시점에 합쳐짐. - 확장성 좋음.
// union이나 tuple 등이 필요한 경우에만 Type Alias를 사용하는 것이 이상적임. private API같은 외부에 노출할 필요가 없는 경우 사용.
var person3 = {
    name: '김사람'
};
var expert3 = {
    name: '김개발',
    skills: ['javascript', 'react']
};
var people = [person3, expert3];
var color2 = 'red';
var colors2 = ['red', 'orange'];
