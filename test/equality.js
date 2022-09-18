console.log(1 == '1');
console.log(1 === '1');

console.log(true == 1);
console.log(false == 0);

console.log('---------------')

const student1 = {
    name : 'hana',
    age : 20 
}

const student2 = {
    name: 'hana',
    age: 20
}

console.log(student1 == student2);
console.log(student1 === student2);
console.log(student1.name == student2.name);
console.log(student1.name === student2.name);



const fruit = 'apple';

let emoji = fruit === 'apple'? '🍎': '🍊'
console.log(emoji)