// 객체 : 프로퍼티 네임, 이름이 있는 여러값을 묶을 때 사용 - MAP
// 배열: indext, 순서가 있는 여러값을 묶을 때 사용  - SET


// MAP
// 객체 할당연산자, 점표기법, 대괄호표기법
// map.set(key, value);
// map.get(key);
// map.has(key);
// map.delete(key);
// map.clear();
// map.size

// map 생성
const kvMap = new Map();

// set 메소드 - value 추가
kvMap.set('hi', '문자key ok!');
kvMap.set(123, '숫자key ok!');
kvMap.set(true, '불린key ok!');

// get 메소드 - value 조회
console.log(kvMap.get('hi')); // 문자key ok
console.log(kvMap.get(123)); // '숫자key ok
console.log(kvMap.get(true)); // 불린key ok
console.log(kvMap.keys());  // { 'hi', 123, true }
console.log(kvMap.values());  // { '문자key ok!', '숫자key ok!', '불린key ok!' }
console.log(kvMap.entries());   // [ 'hi', '문자key ok!' ], [ 123, '숫자key ok!' ], [ true, '불린key ok!' ]

// has 메소드 - value 유무
console.log(kvMap.has('hi')); // true
console.log(kvMap.has('Hello')); // false

// size 메소드 - 크기
console.log(kvMap.size);    // 3

// delete 메소드 - value 제거
kvMap.delete('hi');
console.log(kvMap.size);    // 2

// clear 메소드 - 모든 요소 제거
kvMap.clear();
console.log(kvMap.size);    // 0


console.clear();



// SET
// set.add(value);
// set.has(value);
// set.clear();
// set.size();

// set 생성
const vSet = new Set();

// add 메소드 - value 추가
vSet.add('apple'); // set(1) {"apple"}
vSet.add('banana'); // set(2) {"apple", "banana"}
vSet.add('orange'); // set(3) {"apple", "banana", "orange"}


// 💥 set은 개별 값에 바로 접근할 수 있는 get메소드가 없다
console.log(vSet); // set(3) {"apple", "banana", "orange"}
vSet.forEach(el => console.log(el)) // apple banana orange
for (const v of vSet) {
    console.log('value: ', v);
}

// has 메소드 - value 유무
console.log(vSet.has('apple')); // true
console.log(vSet.has('melon')); // false

// size 프로퍼티
console.log(vSet.size); // 3

// delete 메소드
vSet.delete('apple'); 
console.log(vSet.size); // 2

// clear 메소드
vSet.clear();
console.log(vSet.size); // 0



const members = new Set();

members.add('지훈');
members.add('보라');
members.add('나희');
members.add('신애');

for (const mem of members){
    console.log(mem);
}


const nums = [1, 2, 3, 4, 5, 6, 5, 3, 4, 2, 1,7,8];
const numbers = new Set(nums);

console.log(numbers);



const apple = { item : '🍎', price : 1000};
const kiwi = { item : '🥝', price : 500};
const grape = { item : '🍇', price : 2000};

const objSet = new Set([apple, kiwi, grape]);

apple.price = 800;
objSet.add(apple);
console.log(objSet);

const kiwi2 = { item : '🥝', price : 500};
objSet.add(kiwi2);
console.log(objSet);



console.clear();


const key = {item: 'key', id: 100};
const value = {item: 'value', id:200, description: 'study'};

const obj = {
    
}

