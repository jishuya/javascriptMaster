class Fruit {
    #name;
    #emoji;
    #type =  '과일';
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`)
    };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지';
console.log(apple);