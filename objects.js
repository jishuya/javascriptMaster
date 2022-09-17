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

console.clear()

// 수학관련 함수들 Math
console.log(Math.E); 
console.log(Math.PI); 

// Static method
// 절대값
console.log(Math.abs(-10));
//올림
console.log(Math.ceil(1.4));
// 내림
console.log(Math.floor(1.4));
// 반올림
console.log(Math.round(1.4));
// 정수만 반환
console.log(Math.trunc(1.2323))
// 최대 최솟값을 찾기 
console.log(Math.max(1,3,5));
console.log(Math.min(2,3,5));   
// 제곱근
console.log(Math.sqrt(9));
// 0~1사이 랜덤값을 반환
console.log(Math.random());
console.log(Math.round(Math.random() * 10 +1));

 
console.clear();

// 문자열 함수들 
const textObj = new String('Hello World');
const text = 'Hello World';
console.log(textObj);
console.log(text);


console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text.charAt(0))
console.log(text.length)
console.log(text.indexOf('o'))
console.log(text.lastIndexOf('l'))
console.log(text.includes('W'))
console.log(text.includes('y'))
console.log(text.startsWith('He'))
console.log(text.endsWith('He'))
console.log(text.toUpperCase())
console.log(text.toLowerCase())

console.log(text.substring(0, 2));
console.log(text.slice(-2));

const space = '          s   pace   ';
console.log(space.trim())

const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));


console.clear(); 

// 날짜관련 함수들
console.log(new Date());
console.log(new Date('Jun 5, 2022'));

