// 단축평가 : short-circuit evaluation

const obj1 = { name: '🐶'};
const obj2 = { name: '🐱', owner: 'Jishu'};

if (obj1 && obj2){
    console.log('둘다 true')
}

if (obj1 || obj2){
    console.log('둘다 true')
}

let result = obj1 && obj2;
console.log(result);

let result2 = obj1 || obj2;
console.log(result2);


function changeOwner(animal){
    // if(!animal.owner){
    //     throw new Error('주인이 없엉');
    // }
    animal.owner = '바뀐주인!'
}

obj1.owner && changeOwner(obj1); // false
obj2.owner && changeOwner(obj2); // true
console.log(1111, obj1)
console.log(2222, obj2)

function makeNewOwner(animal){
    animal.owner = '새로운 주인!';
}
obj1.owner || makeNewOwner(obj1); //false
obj2.owner || makeNewOwner(obj2);   // true
console.log(333, obj1)
console.log(444, obj2)


// null 또는 undefined 인걸 확인할 때,
// let item = { price: 1 };
let item;
const price = item && item.price;
console.log(price);