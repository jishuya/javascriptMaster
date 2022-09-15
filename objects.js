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

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);


// num이 숫자 인지 아닌지 확인하고 싶다면 이런 if문으로 확인 가능
if(num === Number.NaN) {
}
if (Number.isNaN(num)){

}


// 지수표기법 (매우 크거나 작은 숫자를 표기할 때, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential())

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 절대값
console.log(Math.abs(-999))

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(3));

console.log(Number.EPSILON)// 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자

if (Number.EPSILON > 0 && Number.EPSILON < 1){
    console.log(true);
} 

const num5 = 0.1 + 0.2 - 0.2;
console.log(num5);

// 미세한 차이가 생긴다 ㅎㅎ 아래 함수로 확인
function isEqual(original, expected){
    return original === expected;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));

console.log('------------------')

function isEqual2(original, expected){
    return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));