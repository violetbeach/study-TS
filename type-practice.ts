let count = 0;
count += 1;
// count = '문자열'; 숫자로 선언했으므로 에러 발생

const str: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1,2,3];

// numbers.push('1'); 숫자 배열이므로 에러 발생

let mightBeUndefined: string | undefined = undefined; // 자료형이 문자열일수도 있고, undefined일수도 있음.
let nullableNumber: number | null = null; // number일수도 있고, null일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; 지정된 값이 아니므로 에러 발생