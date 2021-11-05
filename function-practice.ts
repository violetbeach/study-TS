// 정해진 파라미터, 정해진 리턴타입만 가능

// 반환 타입이 없다면 void로 설정

function sum(x: number, y: number): number {
    // return '1'; 에러 발생
    return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc+ current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
    console.log('I am just saying hello world');
}