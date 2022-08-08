let arr = ['🍌', '🍓', '🍇', '🍓'];

// arr.forEach((value, idx, array)=>{
//     console.log(value)
//     console.log(idx)
//     console.log(array)
// })



const  items1 = {name: '🧂', price: 2};
const  items2 = {name: '🍪', price: 3};
const  items3 = {name: '🍙', price: 1};
const products = [items1, items2, items3, items2];
const found= products.findIndex((value)=> value.name === '🍪');

console.log(found)

const result= products.some((item) => item.name === '🍪')
console.log(result);

const result2 = products.every((item)=> item.name === '🍪');
console.log(result2);


const result3 = products.filter((item)=>item.name === '🍪' )
console.log(result3);