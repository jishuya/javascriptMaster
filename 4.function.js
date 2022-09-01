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

