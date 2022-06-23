// console.log(globalThis);
// console.log(this);


console.log(globalThis);
console.log(Infinity)
console.log(NaN)
console.log(undefined)


eval('const num=4; console.log(num)');

console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.56'));
console.log(parseInt('12.56'));
console.log(parseInt('11'));

const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);


const decoded = decodeURI(encoded);
console.log(decoded);


const part = '드림코딩';
console.log(encodeURIComponent(part));



