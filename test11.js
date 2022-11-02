// 객체지향 프롷그래밍의 가장 큰 장점: 상속을 통한 코듸의 재 사용성!

// Dog -> Animal을 상속해서 Animal애 있는 name과 emoji를 지정하고, Animal에 있는 Printname 함수 쓰기


// html파일 만들고 script연결해서 live server로 열기

// Dog.ptorotype = Object.create(Animal.prototype)


class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    printName(){
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal{
    play(){
        console.log('같이 놀자규')
    }
}
class Tiger extends Animal{
    hunt(){
        console.log('사냥하자규~~')
    }
}
const dog1 = new Dog('멍멍', '🐶')
const tiger1 = new Tiger('어흥', '🐯')

dog1.printName();
tiger1.printName();
dog1.play();
tiger1.hunt();


// 상속도를 확인할 때는  instance 0f 함수를 쓴다
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Tiger);


// 원래 상속받는 부모, 프로토타입은 단 하나야 
// 근데 여러가지를 상속받고 싶다면 mixin을 사용하면됑

// Dog 에서 play와 sleep을 둘다 상속 받고 싶다면 assign을 사용한면된다