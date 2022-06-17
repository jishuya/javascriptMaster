const textObj = new String('Hello World!')
const text = 'hello world!'
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text[3]);
console.log(text.charAt(0));
console.log(text.length);

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.includes('h'));
console.log(text.includes('re'));


console.log(text.startsWith('He'));
console.log(text.startsWith('he'));
console.log(text.endsWith('he'));
console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(3,6));
console.log(text.slice(2));
console.log(text.slice(-2));


const space = '                 space   ';
console.log(space.trim())

const longText = 'Get to the point';
console.log(longText.split(' '))
console.log(longText.split(' ', 2))