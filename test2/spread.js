
// Spread 사용하기 

// 1. Array

// 1). 함수의 인자 
function sum(a, b, c, d){
    return a + b + c + d;
}

const numbers = [1, 2, 3, 4];
// 기존방법
console.log(sum(numbers[0], numbers[1], numbers[2], numbers[3]));
// Spread 사용
console.log(sum(...numbers));


function introduce(a, b, c){
    return `${a}, my ${b} is ${c}`;
};

const mina = ['Hi', 'name', 'mina'];
console.log(introduce(...mina));


// 함수의 인자 Rest Parameter
function nums(first, second, ...others){
    console.log('first: ', first);
    console.log('second: ', second);
    console.log('others: ', others);
};

nums(1, 2, 3, 4, 5, 6, 7);


// 2. Array 합차기 
const test1= [1, 2, 3];
const test2= [4, 5];

const link = [test1, test2];
const link2 = [test1, '😁', test2];
console.log('link1: ', link);
console.log('link2: ', link2);


//  Array의 concat 메소드도 사용가능
const result = test1.concat(test2);
console.log('concat Result: ', result);





// 2. Object
const member = {name: 'minsu', age: 40, department: {development: 'backend'}}

const add = {
    ...member,
    birthday: '1983-01-01'
};

console.log('member: ', member);
console.log('add: ', add);

// member안에 department 오브젝트트 shallow copy된거라 원본object의 주소를 참조하고 있기때문에 원본이 바뀌면 바뀐다
member.department.dev = 'frontend';
console.log('add: ', add);