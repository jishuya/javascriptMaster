/** 
 * 순회가 가능하게 하기 위해 따라야하는 규칙
 * spread, for of 쓸 수 있음
 * array, map, set, String
 */


const array = [1, 2, 3];
for (const item of array.values()){
    console.log(item);
};


// const obj = {0 : 1, 1 : 2};
// for (const item in obj){
//     console.log(item);
// }


const iterator = array.values()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



while(true){
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}



// 5이상의 큰 숫자들의 평균

const nums = [3, 16, 25, 4, 34, 21];

function Test(arr){
    let count = 0;
    let sum = 0;
    arr.forEach((el, idx) => {
        if(el >= 5) {
            sum += el;
            count++
            console.log('el: ', el, 'sum: ', sum, 'count: ', count)
        }
    });
    return sum / count;
}

const result = Test(nums);
console.log(result);




const result2 = nums
    .filter(el=> el >= 5)
    .reduce((avg, num, _, array)=> avg + num /array.length, 0)

    console.log(result2);
    
