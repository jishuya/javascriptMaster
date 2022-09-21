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


let items2 =['🍌', '🥝', '🍇', '🥝', '🥝'];

let items3 = ['🍌', '🥝', '🍇'];

let items4 = ['🍌', '🍓', '🍇', '🍓'];

function match(input, output){
    let result = []
    for(let i =0; i<input.length; i++){
        if(output.includes(input[i])){
            result.push(input[i])
        }
    }

    return result
}

console.log(match(items3, items4))

function getPrint(){
    return function () {
        console.log('Hi')
    };
};

const sayHi = getPrint();

sayHi();

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12