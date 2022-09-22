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

const hena = {id: '🧑', score: 50 };
const teaho = {id: '👲', score: 30 };
const nawon = {id: '🎅', score: 20 };
const heesu = {id: '👳‍♂️', score: 90};
const students = [hena, teaho,nawon, heesu];

const result = students.find(student => student.score < 50);
console.log(result);

const result2 = students.findIndex(student => student.score < 30);
console.log(result2);

// every vs some 

console.clear();

const num = [2, 4, 6, 7, 8, 10];

const someReturn = num.every( element => (element % 2) === 0);
console.log(someReturn);        // true


const someReturn2 = num.every((element, idx, array ) => {
    console.log(idx);       // 0 1
    return element % 2 === 0;
});
console.log(someReturn2);       // true



console.clear()




const numbers = [1, 2, 3];

numbers.forEach((el, idx, arr) => {
  console.log(el);// 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});


const number = [1, 2, 3];
const mapNumber = number.map((el, idx, arr)=>{
    return el *3;
})

console.log(mapNumber);         // [ 3, 6, 9 ]


let users = [
    {firstName : "suji", lastName: "park"},
    {firstName : "minwoo", lastName: "lee"},
    {firstName : "jinwon", lastName: "kim"}
  ];

  let fullName = users.map(el=>{
    return `My name is ${el.lastName} ${el.firstName}.`
  });

  console.log(fullName);    // [ 'My name is park suji.', 'My name is lee minwoo.', 'My name is kim jinwon.']