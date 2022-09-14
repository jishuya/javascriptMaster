// 래퍼 객체
// 원시 값(Number, String,.. )을 필요에 따라서 관련된 빌트인객체(자바스크립트 엔진에 내장된 객체)로 변환한다. 

const number = 123; 
console.log(number);
console.log(number.toString());


console.log(this);
console.log(globalThis);


console.clear();

// Number
const num = 123;
const num2 = new Number(456);
console.log(num);
console.log(num2);
console.log(typeof(num));
console.log(typeof(num2));