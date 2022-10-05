const pencil = {item: '✏', price: 1000 };
const scissors = {item: '✂', price: 3000 };
const book = {item: '📕', price: 5000};

const student1 = [pencil, scissors];
const student2 = Array.from(student1);

console.log('hana: ', student1);
console.log('nahee: ', student2);

student1.push(book);
console.log('hana: ', student1);
console.log('nahee: ', student2);

pencil.price = 4000;
console.log('hana: ', student1);
console.log('nahee: ', student2);


console.clear();


let items1 = ['🍌', '🍓', '🍇', '🍓'];

items1.forEach((x, idx) => {
    if (x === '🍓'){
        items1[idx] = '🥝'
    };
})
console.log(items1)



let items2 =['🍌', '🥝', '🍇', '🥝', '🥝'];

let count = 0

for (let x of items2){
    if(x === '🥝'){
        count ++;
    }
}
console.log(999, count)



let items3 = ['🍌', '🥝', '🍇'];

let items4 = ['🍌', '🍓', '🍇', '🍓'];


items4.forEach(a => {
    items3.forEach(b=>{
        if(a === b){
            console.log(a)
        }
    })
})

console.clear();

function getPrint(){
    return function () {
        console.log('Hi')
    };
};

const sayHi = getPrint();

sayHi();


console.clear();


const fruits = ['🍌', '🥝', '🍇', '🍅', '🍇'];

fruits.forEach((item, idx, array)=>{
    console.log(item, idx, array)
})

const hena = {id: '🧑', score: 10 };
const nawon = {id: '🎅', score: 60 };
const heesu = {id: '👳‍♂️', score: 90};
const students = [hena, nawon, heesu];

const result = students.find(item => item === '🍇')
console.log(result);