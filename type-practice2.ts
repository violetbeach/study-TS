// TS - Type Alias 타입을 명시할 수 있음.
// Type Alias와 interface의 차이는 interface는 같은 이름으로 여러 번 선언을 해도 컴파일 시점에 합쳐짐. - 확장성 좋음.
// union이나 tuple 등이 필요한 경우에만 Type Alias를 사용하는 것이 이상적임. private API같은 외부에 노출할 필요가 없는 경우 사용.

type PersonType = {
    name: string;
    age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
type DeveloperType = PersonType & {
    skills: string[];
};

const person3: PersonType = {
    name: '김사람'
};

const expert3: DeveloperType = {
    name: '김개발',
    skills: ['javascript', 'react']
};

type People = PersonType[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person3, expert3];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'red';
const colors2: Color[] = ['red', 'orange'];