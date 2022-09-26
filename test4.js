const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사해 주세요.
const mySnacks = [...snacks]
const myDrinks = [...drinks]

mySnacks.splice(2, 3);
myDrinks.splice(1);

// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당해 주세요.
const myChoice = [...mySnacks, myDrinks]

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요.
printArguments(...myChoice);





// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요.
const numbers = [1, 2, 3];
const [one, two, three] = [...numbers];


// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요.
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
const [livingRoom, ...kitchen] = [...products];


// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요.
let firstName = 'Kang';
let lastName = 'Young';

[firstName, lastName] = [lastName, firstName]; 



// 테스트 코드
console.log(one);
console.log(two);
console.log(three);
console.log(livingRoom);
console.log(kitchen[1]);
console.log(firstName);
console.log(lastName);



console.log('----------------------------------');






// 함수 

function getstationery(){
  let stationery = ['✂', '📏', '✏', '📒']
  return stationery;
}

const array = getstationery();
console.log(array);

const [scissors, ruler] =getstationery();
console.log(scissors);
console.log(ruler);


console.clear();


function printStationery(...arg){
  const [book, pen, ...others ] = [...arg]
  console.log(`printStationery: ${book}, ${pen}, ${others}`);
}

printStationery('📒', '🖍', '📌', '📏');    // printStationery: 📒, 🖍, 📌,📏


function printStationery2(book, pen, ...others){
  console.log(`printStationery2: ${book}, ${pen}, ${others}`);
}

printStationery2('📒', '🖍', '📌', '📏');   // printStationery: 📒, 🖍, 📌,📏



// Object 
const member = {name: 'hana', age: 30, job:'developer'};
function printMember(mem){
  console.log(`이름: ${mem.name}, 나이:${mem.age}, 직업:${mem.job}`);
}

printMember(member);    // 이름: hana, 나이:30, 직업:developer


function printMember2({name, age, job}){
  console.log(`이름: ${name}, 나이:${age}, 직업:${job}`);
}

printMember2(member);   // 이름: hana, 나이:30, 직업:developer



const  heesu= {name: 'heesu', age: 20, job:'maketer', 'e-mail': 'heesu@gogle.com'};
// Object는 Array와 다르게 {}로 감싸줘야한다. 대신에 대입할 땐 []없이! 
const {name, age, job, phone='010111222', 'e-mail':Email} = heesu
// Key변경 가능, 예를 들면 'e-mail'이란 Key는 중간에 하이픈이 있어서 변수로 쓸 수 없으므로 Email로 Key를 변경
console.log(name);      // heesu
console.log(age);       // 20
console.log(job);       // maketer
console.log(콜);      // 010111222
console.log(Email);       // heesu@gogle.com



const book = {
  title: 'Tom&Jerry',
  emoji: '📕',
  writer: 'kim'
}

function getBook1(book){
  console.log(`title: ${book.title}, emoji: ${book.emoji}, writer: ${book.writer}`);
}


function getBook2(book){
  const {title, emoji, writer} = book;
  console.log(`title: ${title}, emoji: ${emoji}, writer: ${writer}`);
}


function getBook3({title, emoji, writer}){
  console.log(`title: ${title}, emoji: ${emoji}, writer: ${writer}`);
}


getBook1(book);       // title: Tom&Jerry, emoji: 📕, writer: kim
getBook2(book);       // title: Tom&Jerry, emoji: 📕, writer: kim
getBook3(book);       // title: Tom&Jerry, emoji: 📕, writer: kim



const btn = document.querySelector('#btn');

btn.addEventListener('click', (event)=>{
  event.target.classList.toggle('checked');
})



const btn = document.querySelector('#btn');

btn.addEventListener('click', ({target})=>{
  target.classList.toggle('checked');
})


const btn = document.querySelector('#btn');

btn.addEventListener('click', ({target})=>{
  const classList = target;
  classList.toggle('checked');
})