/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
 function Cat(name) {
    this.name = name;
    this.printName = function () {
      console.log(this.name);
    };
  }
  const cat1 = new Cat('냐옹');
  const cat2 = new Cat('미야옹');
  cat1.printName();
  cat2.printName();
  