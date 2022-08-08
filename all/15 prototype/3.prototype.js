
// 생성자 함수 만들기
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
  
  // // 오버라이딩
  // // 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
  // // 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
  dog1.printName = function () {
    console.log('안녕!!');
  };
  dog1.printName();
  
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
  