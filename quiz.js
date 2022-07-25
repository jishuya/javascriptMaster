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

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Tiger);
