class Animal {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹는당');
    };
    sleep(){
        console.log('잔당');
    }
}

class Dog extends Animal{
    constructor(color, ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀쟝')
    }
    eat(){
        super.eat();
        console.log('강아지가 먹는다');
    }
}
const dog = new Dog('파랑이', '지수');
console.log(dog);
dog.eat();
dog.play();