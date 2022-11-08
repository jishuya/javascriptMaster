// // const aa = 4;

// // module.exports.x = aa;

// // console.log(this);
// // console.log(globalThis);

// // 'use strict'

// function fun(){
//   console.log(this);
// }

// fun();

// console.clear();


function Cat(name){
  this.name = name
  this.printName = ()=>{
    console.log(`고양이 이름: ${this.name}`)
  };
  // this.printName = this.printName.bind(this)
}


function Dog(name){
  this.name = name
  this.printName = ()=>{
    console.log(`강아지 이름: ${this.name}`)
  }
  // this.printName = this.printName.bind(this)
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');

// cat.printName()
// dog.printName()

// dog.printName = cat.printName;
// 이제 cat도 강아지 이름으로 바뀜
cat.printName = dog.printName;

dog.printName();
cat.printName();


function printMonitoring(printName){
  console.log('모니터 준비하고 콜백을 실행')
  printName();
}

printMonitoring(cat.printName);