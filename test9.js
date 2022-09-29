// 주어진 배열에서 중복을 제거하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

function removeDuplication(array){
    return [...new Set(array)];
}

console.log(removeDuplication(fruits));


// 주어진 두 세트의 공통된 아이템만 담고 있는 세틀를 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2){
    const array = [...set1].filter((el)=>{set2.has(el)});
    return new Set(array); 
}

console.log(findIntersection(set1, set2))


// 잠깐 Array 복습 

// forEach, map
// forEach는 리턴 값이 없고, map은 리턴 값이 있다. 

const firstNames = ['hana,', 'hyena', 'minseo', 'uvin', 'heebin'];
const lastNames = ['Kim', 'Park', 'Lee', 'kang', 'choi'];

firstNames.forEach((el, idx, arr)=>{
    console.log(`My name is ${el} ${lastNames[idx]}😉`);
})

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const fullName = firstNames.map((el, idx) => el + lastNames[idx]);
console.log(fullName);

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

// filter, find
// 조건에 맞는 여러개를 배열에 담는다 => 새로운 배열을 리턴, 조건에 맞는 단 하나를 리턴 = >가장 첫번째 요소를 리턴

// every, some


/** 새로운 배열을 리턴 */
// 1. 자르기 : slice(시작인덱스, 끝인덱스 -1(자기자신 미포함))
const food = ['🍕', '🍔', '🌭', '🍩'];
let newArr = food.slice();
let newArr2 = food.slice(1, 3);
let newArr3 = food.slice(1);    // 종료 인덱스 안주면 시작인덱스 ~ 끝까지
let newArr4 = food.slice(-2);
console.log(food);
console.log(newArr);        //  [ '🍕', '🍔', '🌭', '🍩' ]
console.log(newArr2);       //  ['🍔', '🌭' ]
console.log(newArr3);       //  [ '🍔', '🌭', '🍩' ]
console.log(newArr4);       //  [ '🌭', '🍩' ]

// 2. 붙이기 : contact 
const arr1 = ['H', 'E'];
const arr2 = ['L', 'L', 'O'];
const concatArr = arr1.concat(arr2);
console.log(concatArr);          // [ 'H', 'E', 'L', 'L', 'O' ]

// 3. 순서 뒤집기 : reverse
const reverseArr = concatArr.reverse();
console.log(reverseArr);        // [ 'O', 'L', 'L', 'E', 'H' ]

// 4. 중첩배열 펼치기 : flat
const sample = [ [1, 2,], 3, [4, [5, 6]]];
const flatArr = sample.flat();
const flatArr2 = flatArr.flat();
console.log(flatArr);           // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flatArr2);          // [ 1, 2, 3, 4, 5, 6 ]


/** 새로운 배열을 리턴 */
// 1. 자르기 : slice(시작인덱스, 끝인덱스 -1(자기자신 미포함))
const food = ['🍕', '🍔', '🌭', '🍩'];
let newArr = food.slice();
let newArr2 = food.slice(1, 3);
let newArr3 = food.slice(1);    // 종료 인덱스 안주면 시작인덱스 ~ 끝까지
let newArr4 = food.slice(-2);
console.log(food);
console.log(newArr);        //  [ '🍕', '🍔', '🌭', '🍩' ]
console.log(newArr2);       //  ['🍔', '🌭' ]
console.log(newArr3);       //  [ '🍔', '🌭', '🍩' ]
console.log(newArr4);       //  [ '🌭', '🍩' ]

// 2. 붙이기 : contact 
const arr1 = ['H', 'E'];
const arr2 = ['L', 'L', 'O'];
const concatArr = arr1.concat(arr2);
console.log(concatArr);          // [ 'H', 'E', 'L', 'L', 'O' ]

// 3. 순서 뒤집기 : reverse
const reverseArr = concatArr.reverse();
console.log(reverseArr);        // [ 'O', 'L', 'L', 'E', 'H' ]

// 4. 중첩배열 펼치기 : flat
const sample = [ [1, 2,], 3, [4, [5, 6]]];
const flatArr = sample.flat();
const flatArr2 = flatArr.flat();
console.log(flatArr);           // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flatArr2);          // [ 1, 2, 3, 4, 5, 6 ]