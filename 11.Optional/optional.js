let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐱', owner: {name: 'Jishu'}};
function printName(obj){
    const ownerName = obj?.owner?.name
    console.log(ownerName);
}
printName(obj);