// Argument, Paameter


//Parameter
function Greeting(name){
    console.log(`안녕, 나는 ${name}이야`)
}

// Argumnet
Greeting('지수') 

console.clear();

// return -> 반환
// return을 중간에 사용하게 되면 함수를 어떤 조건에 따라 중단 시킬 수 있다

function print(num){
    if (num < 5){
        return;
    }
    console.log(num)
} 

print(10);
print(4);

console.log('------------------------------');


// 함수의 인자 
// 매개변수 정보는 함수 내부에서 접근이 가능한 agument 객체에 저장됨
function sum(a, b){
    console.log(arguments);
    console.log(arguments[1]);
    return a +b;
}

sum(1, 3);


console.clear();

// QUIZ
// 1. paremeter, argument 
// 2. 안녕하세요 저는 장동건입니다.
// 1443년에 태어났습니다.
// 안녕하세요 저는 joy입니다.
// null년에 태어났습니다.
// 안녕하세요 저는 홍길동입니다.
// 2090년에 태어났습니다.
// 3.

function firstWords(){
    let word = '';
    for(let i= 0; i<arguments.length; i++){
        let temp = arguments[i].slice(0,1);
        word = word+temp;
    }
    console.log(word)
}
firstWords('나만', '없어', '고양이');
firstWords('아니', '바나나말고', '라면먹어');
firstWords('만두', '반으로', '잘라먹네', '부지런하다');
firstWords('결국', '자바스크립트가', '해피한', '지름길');


console.clear();

// Rest Parameter vs Spread

// Rest Parameter
function test(a, b, ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

test(1, 2, 3, 4, 5, 6, 7, 8);


// Spread
const letters = ['a', 'b', 'c', 'd'];
console.log(...letters);

const sumNum = (...args) => {
    let sum = 0;
    for (i of args){ 
        sum = sum + i;
    } return sum;
}

console.log(sumNum(1, 2, 3));


console.clear();
  

printTest();

function printTest(){
    console.log('This is test...');
}

console.log( '---------------');

// printTest2();

const printTest2 = function (){
    console.log('This is test2...');
}


console.clear();

let sumTest= (a, b) => a + b;

console.log(sumTest(1,2));


const printName = (name) => ({ Name : name});

console.log(printName('jishu'));



// 즉각적으로 호출하는 함수 - 생성자 함수 
(function sayHi() {
    console.log('Hi');
})();


// 스코프 : 변수에 접근 할 수 있는 범위 
// 1. 함수스코프: 함수가 선언될 때마다 스코프가 생성. 함수 내에서 선언한 변수들은 함수 내에서만 접근 가능 
// 2. 블록스코프: {} 블록이 생성된 때마다 스코프 생성. const, let은 블록 스코프 but var는 함수 스코프


// 기명함수표현식?

let countdown = function printCountDown(n){
    console.log(n);
    if (n === 0) {
        console.log('End!')
    } else {
        printCountDown(n -1);
    }
};

let myFunction = countdown;
countdown = null;

myFunction(5);



console.clear();


// 즉시 실행함수
const firstName = 'jishu';
const lastName = 'Lim';

const greeting = (()=>{
    const fullName = `my name is ${firstName} ${lastName} :)`
    return `Hi, ${fullName}`
})();


// 콜백함수 - 나중에 호출해주는 함수 

// 일급 객체 first class object
// : 함수가 일반 객체처럼 모든 연산이 가능한 수준


// 전달된 action은 콜백함수 이다 

 const add = (a, b) => a + b;
 const multiply = (a, b) => a * b;

 function calulator(a, b, action){
    if (a < 0 || b <0){
        return;
    }
    let result = action(a, b);
    console.log(result);
    return result;
 }

 calulator(1, -2, add);
 calulator(1, 2, multiply);


 console.clear();
 
 // 주어진 숫자만큼 0부터 순회하는 함수
 // 순회하면서 특정한 일을 수행해야 함
 // 5, 순회하는 숫자를 다 출력하고 싶음
 // 5, 순회하는 숫자의 두배 값을 다 출력하고 싶음



 function iterate(max, action){
    let i = 0; 
    while (i < max) {
        let result = action(i)
        console.log('result: ', result)
        i += 1;
    }
 }

 function double(i){
    const double = i * 2;
    console.log(i)
    return double;
 }

 iterate(10, double);


 console.clear()


 // 함수에서 전달받은 인자를 변경하는 건 좋지 않다 
 function printNum(num) {
    num = 3;
    return num; 
 }

 const value = 5;
 console.log(printNum(value));


 function printObj(obj) {
    obj.job = 'developer';
    return obj;
 }

 const friend = { job: 'student'};
 console.log(printObj(friend))      // { job: 'developer' }


 console.clear();

 function changeJob(obj) {
    return {...obj, job: 'developer'};
 }

 const collegue = { name: 'hana', job : 'teacher', age: 25};
 console.log(changeJob(collegue))



 const sayHi = [
    function() {
        console.log('Hi😉')
    },
 ];

 sayHi[0]();

 const sayHello = {
    greeting : 'Hi',
    printHello : function(){
        console.log('Hi😉');
    }
 }

 sayHello.printHello();


function sayCheese() {
    return function sayHi() {
        console.log('Hi😉');
    }
 }

 const cheese = sayCheese(); 
 cheese();