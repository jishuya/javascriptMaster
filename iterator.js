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



    


    // for of -> 이터러블 프로토콜을 따라야합니다 
    // 객체 안에 Symbol.iterator 만들면 된다 

    const multiple = {
        [Symbol.iterator]() {
            const max = 10;
            let num = 0;
            return {
                next() {
                    return { value: num++ *2, done : num > max};
                }
            }
        }
    }


    for (let item of multiple){
        console.log(item);
    }

console.clear()

function makeIterable(initialValue, maxValue, callback){
    return {
        [Symbol.iterator](){
            let num = initialValue;
            return {
                next() {
                    return {value: callback(num++), done: num > maxValue};
                }
            }
        }
    }
}

const multiple2 = makeIterable(0, 5, (n)=> n*2);
for (const num of multiple2){
    console.log(num.value);
}







    // 키워드 찾기
    // 1. value, maxValue, callback n*2


    /** GENERATOR : Iterator를 생성해주는 것*/
