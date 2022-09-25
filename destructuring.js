// Destructuring Assignment

// 1. Array

const nums = [1, 2, 3, 4, 5, 6];
console.log(nums[0], nums[1], nums[2]);
// 의미 있는이름으로 받아오기
const [first, second, ...others] = nums;
console.log('first: ', first);
console.log('second: ', second);
console.log('others: ', others);

// 기본 값 설정도 가능하다
let game = ['✊', '🖐', '✌'];
// game = ['✊', '🖐'];
const [rock, paper, scissors = '👋'] = game;
console.log(rock);
console.log(paper);
console.log(scissors);


// 값을 교환하는 것도 가능
let orange = '🍊';
let kiwi = '🥝'; 
console.log('orange: ', orange, 'kiwi: ', kiwi);

[orange, kiwi] = [kiwi, orange];
console.log('orange: ', orange, 'kiwi: ', kiwi);


// 2. Function
function getFruit(){
    return ['🍒', '🍅', '🍋', '🍌'];
}

// 기존방법
const arr = getFruit();
console.log('arr: ', arr);
const [cherry, tomato, ...some] = getFruit();
console.log(cherry)
console.log(tomato)
console.log(some)


function order(...arg){
    const [pizza, hamberger, hotdog] = arg;
    console.log(`first menu is ${pizza}`);
    console.log(`second menu is ${hamberger}`);
    console.log(`third menu is ${hotdog}`);
}

function order2(pizza, hamberger, hotdog, ...rest){
    console.log(`first menu is ${pizza}`);
    console.log(`second menu is ${hamberger}`);
    console.log(`third menu is ${hotdog}`);
}

const food = ['🍕', '🍔', '🌭', '🥓'];

order(food);
order2(food);