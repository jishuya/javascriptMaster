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
// null, undefined, NaN, 0, ''는 모두 falsy


// AND & OR의 연산방식
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true);  // true
console.log(false && false);   // false


console.log(true || false);     // true
console.log(false || true);     // true
console.log(true || true);      // true
console.log(false || false);    // false

console.log('-------------------------------------');


console.log(null && 123);    // null
console.log(NaN && false);   // NaN
console.log('' || true);     // true
console.log(0 && 1);         // 0
console.log([] || 123)       // []



console.log('==================================');

// '' or undefind 처리하기

function msgPrint(value) {
    console.log('📩', value);
    const msg = value || 'wrong message..';
    console.log('😊', msg);
};

msgPrint('Hi');         // 📩 Hi            😊 Hi
msgPrint();             // 📩 undefined     😊 wrong message..




console.log('==================================');


// Q> 로지컬 연산자는 언제 사용하나요?
// 1. 조건문 '안'에서는 일반 연산자로 사용된다

const obj1 = {name : 'hana'};
const obj2 = {name : 'heesu', photo: '👩'};

if (obj1 && obj2){
    console.log('둘 다 true이면 if문 실행)')
};

if (obj1 || obj2){
    console.log('둘 중 하나 true이면 if문 실행)')
};

// 2. 조건문 '밖'에서는 로지컬 연산자로 사용된다 → 단축평가

let outSide = obj1 && obj2;
console.log('&&: ', outSide);
outSide = obj1 || obj2;
console.log('||: ', outSide);

let quiz = false && false;
console.log(quiz);