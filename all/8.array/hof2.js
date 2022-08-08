const nums = [1, 2, 3, 4, 5];
const result = nums.map((item)=> item *2)
console.log(result);

// 짝수만 두배

const result2 = nums.map((item)=>{
    if(item % 2 ===0){
        return item *2
    } else 
        return item;
})

console.log(result2);

result3 = nums.map((item)=> [1, 2])
console.log(result3);

result4 = nums.flatMap((item)=> [1, 2])
console.log(result4);


result5 = [ 'dream', 'coding'].map((text)=> text.split(''))
console.log(result5)

result6 = [ 'dream', 'coding'].flatMap((text)=> text.split(''))
console.log(result6)


const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort((a, b)=> a-b);
console.log(numbers);


result7 = [1, 2, 3, 4, 5].reduce((sum , value)=> (sum += value), 0)
console.log(777, result)