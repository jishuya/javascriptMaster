let num = 2;

// if문
if (num%2 === 0){
    console.log('👍')
} else {
    console.log('👎') 
}

//  삼항연산자
num % 2 === 0? console.log('👍'): console.log('👎') ;

// 삼항연산자 - console.log 중복 제거
let emoji = num % 2 === 0? '👍': '👎';
console.log(emoji)
