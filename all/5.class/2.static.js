class Fruit {
    static Max_FRUITS = 4;
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    static makeRandomFruit(){
        return new Fruit('banana', '🍌');
    } 
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.Max_FRUITS);

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
// console.log(apple.name);
// console.log(apple.emoji);
// apple.display();