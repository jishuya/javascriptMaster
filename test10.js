// Symbol
// 유일한 Key를 생성할 수 있다 

const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');
// console.log(map.get(key2));
// console.log(key1 === key2);

// Symbol 만들어보기 
const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, 'Hi');
console.log(map.get(key4));
console.log(key3 === key4);


const key5 = Symbol.for('key');         // true
const key6 = Symbol.for('key');         // true
console.log(key5 === key6);

console.log(Symbol.keyFor(key5));
console.log(Symbol.keyFor(key6));

const obj = { [key3]: 'Hellow', [Symbol('key')]: 1};
console.log(obj);                   // { [Symbol(key)]: 'Hellow', [Symbol(key)]: 1 }
console.log(obj[key3]);             // Hollow
console.log(obj[Symbol('key')]);    // undefined



console.clear();

// And , OR의 연산방식
// ANd : 왼쪽 값이 true이면 오른쪽 값출력, falsy이면 왼쪽 값출력

// OR: 왼쪽값이 true이면 왼쪽값 출력, falsy이면 오른쪽 값 출력

// 우리가 공부했던 falsy
// {} []는 모두  true
// null, undefined, NaA, 0, ''는 모두 falsy