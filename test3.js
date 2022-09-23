const nums = [1, 2, 3, 4, 5];

const result = nums.map((item) => [1,2]);
console.log(111, result);


const result2 = nums.flatMap(item => [1, 2]);
console.log(2222, result2);


const text = ['Hello', 'World'];

const mapText = text.map(item=> item.split(''));
console.log(mapText);

const flatMapText = text.flatMap(item => item.split(''));
console.log(flatMapText);


// console.clear();

const sequence = ['e', 'a', 'd', 'b', 'c'];
const sortTest = sequence.sort();
console.log(sortTest);

const numbers = [1, 2, 30, 10, 50, 100];
const sortTest2 = numbers.sort();
console.log(sortTest2);

// 오름차순 
const sortTest3 = numbers.sort((a, b)=> a-b);
console.log(sortTest3);

// 내림차순
const sortTest4 = numbers.sort((a, b)=> b-a);
console.log(sortTest4);

const reverseTest = sortTest4.reverse()
console.log('reverse: ', reverseTest)


// reduce
const evenNum = [2, 4, 6, 8];
outcome = evenNum.reduce((sum, value) =>{
    sum += value;
    return sum;
}, 0);
console.log(outcome);

// 줄여서
outcome = evenNum.reduce((sum, value) => sum += value, 0);
console.log(outcome);

