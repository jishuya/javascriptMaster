const fruits = ['🍈', '🍉', '🍊'];


console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

console.log(fruits.indexOf('🍈'));
console.log(fruits.includes('🍈'));

let length = fruits.push('🥝');
console.log(fruits);
console.log(length);

length = fruits.unshift('🥝');
console.log(fruits);
console.log(length);


let item = fruits.pop();
console.log(fruits);
console.log(item);

item = fruits.shift();
console.log(fruits);
console.log(item);


console.clear()

console.log(fruits)

// let deleted = fruits.splice(1, 1);
// console.log(fruits);
// console.log(deleted);


fruits.splice(1, 0, '🍕');
console.log(fruits);


// unshift, push
// shift, pop
// splice(1, 0), splice(1, 0, 'f')
