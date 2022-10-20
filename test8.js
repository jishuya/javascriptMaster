const dog = { name: '와우', emoji: '🐶' };


console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog)
console.log(dog.hasOwnProperty('name'))

const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
    value: '멍멍',
    writable: false,
    enumerable: false,
    configurable: false,
})

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};

Object.defineProperties(student, {
    firstName: {
        value: '영희',
        writable: true,
        enumerable: true,
        configurable: true,
      },
      lastName: {
        value: '김',
        writable: true,
        enumerable: true,
        configurable: true,
      },
      fullName: {
        get() {
          return `${lastName} ${firstName}`;
        },
        set(name) {
          [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true,
      },

})
console.log(student);




//잠깐 클래스 복습하기 
/** 
 * 클래스 
 * 추상화, 캡슐화, 상속, 다형성
 * 
 */

// 고전적인 방법
function creatUser(email, birth){
  const user = {
    email,
    birth,
    buy(item){
      console.log(`${this.email} buy ${item}`)
    }
  }
  return user;
}


const user1 = creatUser('aaa@naver.com', '2020-01-01');


// 고전적인 방법
function User(email, birth){
    this.email,
    this.birth,
    this.buy= function(item){
      console.log(`${this.email} buy ${item}`)
    }
}


const user2 = new User('aaa@naver.com', '2020-01-01');

console.clear();

class Fruit{
  static MAX_FRUITS = 4;
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
    
  }
  static makefruits(){
    // 클래스 레벨의 메서드는 this를 참조할 수 없다
    return new Fruit('banana', '🍌')
  }
  display(){
    console.log(`${this.name}, ${this.emoji}` )
  }
}

const apple = new Fruit('apple', '🍎' )
console.log(apple)

const banana = Fruit.makefruits();
console.log(banana)
console.log(Fruit.MAX_FRUITS);


// 클래스 복습하기 
