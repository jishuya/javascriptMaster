const number = 123;

console.log(number);
console.log(number.toString());

const text = 'tex t';
console.log(text);
console.log(text.length);
console.log(text.trim());


console.log(this);
console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

console.clear();

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.34'));
console.log(parseInt('12.34'));
console.log(parseInt('11'));

const URL = 'https://네이버com';
// URI를 전달 할 때 문제가 없도록 인코딩
// encodeURI() : 인터넷 주소에서 사용하는 :, ;, /, =, ?, & 등을 제외하고 인코딩하는 함수입니다.
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(URL);
console.log(decoded);

const part = '다음.com';
console.log(encodeURIComponent(part));


console.clear();

const isTrue = new Boolean(true);
console.log(111, isTrue.valueOf)

/**
 *  Falsy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */