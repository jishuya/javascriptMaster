function Animal(name, emoji){
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function(){
  console.log(`${this.name} ${this.emoji}`);
}

// super
function Dog(name, emoji, owner){
  Animal.call(this, name, emoji);
  this.owner = owner;
}

// 상속
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자옹!')
};


function Tiger(name, emoji){
  Animal.call(this, name, emoji)
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () =>{
  console.log('사냥하자.... ㅎㅎ')
}

const dog1 = new Dog('멍멍', '🐶', '슈');
dog1.play();
dog1.printName();

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog)
console.log(dog1 instanceof Animal)
console.log(dog1 instanceof Tiger)