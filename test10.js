// 프로토타입  - 클래스 만들기 이전의 단계
// 클래스 
// 1. 추상화 constructor, function
// 2. 캡슐화, 상속
// 4. 다형성

// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);



// 생성자 함수 만들기
// 생성자 함수만들면 아래처럼 dog1, dog2 안만들어두 됭~
// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 인스턴스 레벨의 함수도 만들 수 있엉~
    // this.printName = () => {
    //   console.log(`${this.name} ${this.emoji}`);
    // }; 
  }

  // 프로토타입 레벨의 함수
  Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
  };
  
  const dog1 = new Dog('뭉치', '🐶');
  const dog2 = new Dog('코코', '🐩');
  console.log(dog1, dog2);
  dog1.printName();
  dog2.printName();

    // 정적 레벨
  // 먼저 생성자(Dog)에 hello 함수 만들어주기 
  Dog.hello = () => {
    console.log('Hello!');
  };
  // dog1.hello()   
  //-> 인스턴스 이름(dog1)으론 접근 불가능 
  Dog.hello();
  // 생성자 이름(Dog)으론 접근 가능
  Dog.MAX_AGE = 20;