const fruits = ['🍉', '🍊', '🍋', '🍌'];

console.log(fruits[0]);
const [first, second, ... others] = fruits;
console.log(first);
console.log(second);
console.log(others);


const point = [1, 2, 8];
const [y, x, z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple', '🍎'];
}
const array = createEmoji();
console.log(array);

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);


// Object
// const jishu = {name: 'jisu', age:20, job: 'developer'};
// function display(person) {
//     console.log('이름', person.name )
//     console.log('나이', person.age )
//     console.log('직업', person.job )
// }

// display(jishu);

// function display2({name, age, job}) {
//     console.log('이름', name )
//     console.log('나이', age )
//     console.log('직업', job )
// }

// display2(jishu);

const jishu = {name: 'jisu', age:20, job: 'developer'};
const {name, age, job:occupation, pet='강아지'} = jishu;
console.log(name)
console.log(age)
console.log(occupation)
console.log(pet)