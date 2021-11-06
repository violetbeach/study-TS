// any는 타입이 무엇이 있는지 알 수 없다는 것. (타입 추론 실패)

// ...문법을 사용해서 기존의 값을 복사

function merge(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });

// 타입 추론 성공
function wrap<T>(param: T) {
    return {
        param
    }
}

// interface에서 제너릭 사용
// 문자열 배열, 숫자 배열, 객체 배열 등 하나의 interface만 사용해서 다양한 타입의 배열을 사용할 수 있음.
const wrapped = wrap(10);

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
};

// 제너릭을 이용한 큐 구현
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}