// func(...iterable)
//[...iterable]
// {...obj}
// EcmaScript 2018

function add(a, b, c) {
    return a + b + c;
}

const num = [1, 2, 3];
console.log(add(num[0], num[1], num[2]));

console.log(add(...num))


function sum(first, second, ...nums){
    console.log(nums);
}

sum(1, 2, 3, 4, 5, 6);


// Array concat
const fruits1 = ['🥝', '🍇', '🍈'];
const fruits2 = ['🍉', '🍊', '🍋', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);

let arr2 = [...fruits1, 'gg', ...fruits2];
console.log(arr2);


// Object
const jishu = {name: 'jisu', age: 20, home: {address: 'home'}};
const updated = {
    ...jishu,
    job: 'deveoper',
}

jishu.home.address = 'house';
console.log(updated);


