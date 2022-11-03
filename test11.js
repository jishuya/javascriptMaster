class Animal {
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }
    printName(){
        console.log(`Animal: ${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal{
    constructor(name, emoji, owner){
        super(name, emoji),
        this.owner = owner;
    }
    play(){
        console.log('같이 놀자 멍멍~!')
    }
}

class Tiger extends Animal{
    constructor(name, emoji){
        super(name, emoji)
    }
    hunt(){
        console.log('사냥하자.... ㅎㅎ')
    }
}


const dog1 = new Dog('멍멍', '🐶', '슈');
dog1.play();
dog1.printName();


const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Tiger);