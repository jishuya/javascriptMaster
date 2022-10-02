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
// 조건이 truthy 일때, &&  무언가를 해야할 경우
// 조건이 falsy 일떄, || 무언가를 해야할 경우

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

console.log("------------------------");





// function changeOwner(pet){
//     if (!pet.owner) {
//         throw new Error('주인이 없어');
//     }
//     pet.owner = '바뀐주인!';
// }

// 새로 바뀌는 주인이 있으면(true) → 주인바꾸는 함수 호출
// 새로 바뀌는 주인이 주인이 없으면(false) → 기존주인 함수 
// petMom1.owner && changeOwner(petMom1)

// console.log(petMom1)
// petMom2.owner && changeOwner(petMom1)



const petMom1 = {pet : '🐶'};
const petMom2 = {pet : '🐱', owner: '👩'};


// 주인이 있는 경우, 주인을 바꿔주는 함수
// 주인이 없으면 에러난다
function changeOwner(pet) { 
    if (!pet.owner) {
        console.log(11111)
        throw new Error('주인이 없어서 바꿀 수 없엉');
    }
    pet.owner = '😲주인이 바꿔었어요!';
};

// 주인이 없는 경우, 새로운 주인을 할당하는 함수
// 주인이 있으면 에러난다. 
function makeNewOwner(pet) {
    if (pet.owner) {
        throw new Error('주인이 있어서 새주인 못줭!');
    }
    pet.owner = '😁새 주인이 왔어요!';
};



// changeOwner - 기존에 주인 있으면 바뀜
petMom1.owner && changeOwner(petMom1);  // petMom1.owner = false여서 첫번째가 실행됨
console.log(1, petMom1);
petMom2.owner && changeOwner(petMom2);  // // petMom1.owner = true여서 두번째가 실행됨
console.log(2, petMom2);


// makeNewOwner - 기존에 주인이 없으면 새 주인 할당
petMom1.owner || makeNewOwner(petMom1);  // petMom1.owner = false여서 두번째가 실행됨
console.log(3, petMom1);
petMom2.owner || makeNewOwner(petMom2);  // // petMom1.owner = true여서 첫번째가 실행됨
console.log(4, petMom2);






console.log("========================================");

// 조건이 Truethy할 때만 실행하고 싶어요♥ => && 오른쪽 실행
// 조건이 Falsy할 때만 실행하고 싶어요♥ => || 왼쪽 실행

let kid1 = {name : 'hajun', meal: '🍙'};    
let kid2 = {name : 'hayoon'};


// 밥을 먹은 경우(조건 true), 사탕을 주는 함수(결과)
function eatCandy(kid) { 
    kid.meal = '🍭🍭';
};

kid1.meal && eatCandy(kid1);  // kid1.meal = ture라서 오른쪽 함수 실행
kid2.meal && eatCandy(kid2);  // kid2.meal = false라서 아무것도 실행 X
console.log(kid1);              // { name: 'hajun', meal: '🍭🍭' }
console.log(kid2);              // { name: 'hayoon' }


console.log("----------------------------------------------");

kid1 = {name : 'hajun', meal: '🍙'};
kid2 = {name : 'hayoon'};

// 밥을 안먹은 경우(조건 Falsy), 밥을 먹이는 함수(결과)
function eatMeal(kid){
    kid.meal = '🍙';
}

kid1.meal || eatMeal(kid1); // kid1.meal = ture라서 아무것도 실행 X
kid2.meal || eatMeal(kid2); // kid1.meal = false라서 오른쪽 함수 실행
console.log(kid1);          // { name: 'hajun', meal: '🍙' }
console.log(kid2);          // { name: 'hayoon', meal: '🍙' }


// // 주인이 없는 경우, 새로운 주인을 할당하는 함수
// // 주인이 있으면 에러난다. 
// function makeNewOwner(pet) {
//     if (pet.owner) {
//         throw new Error('주인이 있어서 새주인 못줭!');
//     }
//     pet.owner = '😁새 주인이 왔어요!';
// };



// // changeOwner - 기존에 주인 있으면 바뀜
// petMom1.owner && changeOwner(petMom1);  // petMom1.owner = false여서 첫번째가 실행됨
// console.log(1, petMom1);
// petMom2.owner && changeOwner(petMom2);  // // petMom1.owner = true여서 두번째가 실행됨
// console.log(2, petMom2);


// // makeNewOwner - 기존에 주인이 없으면 새 주인 할당
// petMom1.owner || makeNewOwner(petMom1);  // petMom1.owner = false여서 두번째가 실행됨
// console.log(3, petMom1);
// petMom2.owner || makeNewOwner(petMom2);  // // petMom1.owner = true여서 첫번째가 실행됨
// console.log(4, petMom2);


console.log("========================================");

let book;
let pencil = {item: '✏', price : 1000}; 


// pencil 있으면 ⇒ true이면, price에 item.price에 접근해서 단축평가 한다 = 할당한다
let price = pencil && pencil.price; 
console.log(pencil.price);
// book이 없으면 ⇒ false이면, price에 item의 값인 undefined를 할당한다.
price = book && book.price; 
// console.log(book.price);



console.log("========================================");


// '' or undefind 처리하기
// // 조건이 truthy 일때, &&  무언가를 해야할 경우
// 조건이 falsy 일떄, || 무언가를 해야할 경우

function msgPrint(value) {
    console.log('📩', value);
    const msg = value || 'wrong message..';
    console.log('😊', msg);
};

msgPrint('Hi');         // 📩 Hi            😊 Hi
msgPrint();             // 📩 undefined     😊 wrong message..
msgPrint(null);
msgPrint(0);


console.log("----------------------------------------------");

function defaultMsgPrint(value = 'default message!') {
    console.log('📩', value);
};

defaultMsgPrint('Hi');          // 📩 Hi            
defaultMsgPrint();              // 📩 undefined     
defaultMsgPrint(null);          // 📩 null
defaultMsgPrint(0);             // 📩 0