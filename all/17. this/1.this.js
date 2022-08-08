console.log(this);
const x =0;
module.exports.x = x;
console.log(this);
console.log(globalThis);

'use strict'
function fun(){
  console.log(this)
}

fun()

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();
// 호출한 사람 dog라서 this는 dog, printName함수에 cat.PrintName바인딩해줘서 '고양이 이름을 출력한다옹'
// cat.printName();


function printOn(printName){
  console.log('모니터 준비하고 전달된 콜백 실행해줘!')
  printName();
}

printOn(cat.printName);