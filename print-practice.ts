// TS는 JS로 컴파일되서 JS를 사용한다. 따라서, JS의 장점은 가져가면서, 약점인 약한 타입을 강한 타입 시스템을 적용함으로써 보완한다.

// "use strict"를 사용하면  strict모드로 설정됨.
// strict 모드는 쓰기금지 프로퍼티의 정의, getter 전용 프로터피, 존재 하지 않는 프로퍼티, 존재하지 않는 변수, 존재하지 않는 객체에 대해 에러를 발생

const message: string = 'hello world';
console.log(message);