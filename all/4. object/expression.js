// const fruit ={
//     name : 'apple',
//     price : 20000,
//     display : function() {
//         console.log(`${this.name} : 🍎`)
//     }
// }

// fruit.display();

function makeFruit(name, emoji){
    this.name = name;
    this.emoji = emoji;
    this.display = ()=>{
        console.log(`${this.name}: ${this.emoji}`)
    }
}

const apple = new makeFruit('apple', '🍎');
const orange = new makeFruit('orange', '🍊');

console.log(apple.name)
console.log(orange.name)

apple.display();
orange.display();