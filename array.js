let array = new Array(3);
console.log(array)

array = new Array(1, 2, 3)
console.log(array);



// var , let , const 
// 재선언, 재할당 

array = Array.of(8)
console.log(array);
const array2 = [1, 2, 3, 4, 5]
console.log(array2);

const array3 = Array.from('text');
console.log(array3);

array = Array.from({
    0: '안',
    1: '녕',
    length : 2
})
console.log(array);

console.clear();

// 마지막에 추가하기 
const food = ['🍕', '🍔', '🌭', '🍩', '🥨'];
console.log(food.length);
food[food.length] = '🥪'
console.log(food);

// 삭제할 때 인덱스를 바로 사용하게 되면 중간에 배열이 비어버려서 좋지 않다
delete food[1];
console.log(food);

//  배열 자체를 변경할 수 있는 함수는 ?
array = Array.of(8)
console.log(array);
const array2 = [1, 2, 3, 4, 5]
console.log(array2);

const array3 = Array.from('text');
console.log(array3);

array = Array.from({
    0: '안',
    1: '녕',
    length : 2
})
console.log(array);

console.clear();

// 마지막에 추가하기 
const food = ['🍕', '🍔', '🌭', '🍩', '🥨'];
console.log(food.length);
food[food.length] = '🥪'
console.log(food);

// 삭제할 때 인덱스를 바로 사용하게 되면 중간에 배열이 비어버려서 좋지 않다
delete food[1];
console.log(food);


/** 배열 자체를 수정 */

// 추가하기
// 1. unshift : 맨 앞
let length = menu.unshift('🥗');      
console.log(menu);      // [ '🥗', '🍕', '🍔', '🍿', '🌭' ]
// 2. push : 맨 뒤
length = menu.push('🍖');
console.log(menu);      // [ '🥗', '🍕', '🍔', '🍿', '🌭', '🍖' ]


// 제거하기
// 1. shift : 맨 앞
let removedMenu = menu.shift();      
console.log(removedMenu);       // 🥗
console.log(menu);      // [ '🍕', '🍔', '🍿', '🌭', '🍖' ]
// 2. pop : 맨 뒤 
removedMenu = menu.pop();
console.log(removedMenu);       // 🍖   
console.log(menu);      // [ '🍕', '🍔', '🍿', '🌭' ]
// 3. splice(몇번째부터 자를지, 몇개 자를지, 추가한다면 추가할 요소) : 중간요소 제거/추가
menu.splice(2, 1); 
console.log(menu);      // [ '🍕', '🍔', '🌭' ]
menu.splice(1, 1, '🍘', '🍛');      
console.log(menu);      // [ '🍕', '🍘', '🍛', '🌭' ]