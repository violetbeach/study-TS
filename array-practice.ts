// 읽기 전용 배열을 생성할 때는 ReadonlyArray
let arr: ReadonlyArray<number> = [1,2,3];
// arr.splice(0,1); error
// arr.push(4); error
// arr[0] = 100; error