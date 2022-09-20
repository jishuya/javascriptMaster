
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


/**원본 배열 직접 변경*/

// 채우기 : fill(채울값, 시작인덱스, 끝인덱스-1(자기자신 미포함))
const nullArray = [null, null, null, null, null];
nullArray.fill(0);
console.log(nullArray);         // [ 0, 0, 0, 0, 0 ]
nullArray.fill('❤', 1, 3)
console.log(nullArray);         // [ 0, '❤', '❤', 0, 0 ]

// 배열의 요소를 문자로 합치기 
const joinArr = ['안녕', '하세요', '😉']
console.log(joinArr.join());            // 안녕,하세요,😉
console.log(joinArr.join(''));          // 안녕하세요😉
console.log(joinArr.join('&&'));        // 안녕&&하세요&&😉

