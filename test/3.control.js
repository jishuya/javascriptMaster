let order = 'pizza';
if (order ===  'pizza'){
    console.log('🍕')
} else {
    console.log('🍔')
}

// 삼항연산자로 변환하기
order === 'pizza' ? console.log('🍕🍕') : console.log('🍔🍔')



let num = 2; 
let result = (num % 2) === 0? '짝수': '홀수'
console.log(result);


console.clear();

let test = 40;

switch(test){
    case 40:
    case 50:
        console.log('더 공부하세요')
    break;
    case 80:
        console.log('잘했어요')
    default:
        console.log('점수 몰라요')
}



console.clear();


for (let i=0; i <5; i++){
    if(i === 3){
        console.log('조건 만족!')
        break;
    }
    console.log(i)
}

for (let i=0; i <5; i++){
    if(i === 3){
        console.log('조건 만족!')
        continue
    }
    console.log(i)
}


console.clear();

let count = 5;
while(count >= 1) {
    console.log(count);
    count --;
    if(count === 3){
        console.log('조건만족')
        break;
    }
}

console.log('------------------------')

let temp = '';
let i = 1;
do {
    console.log(i)
    i++
} while (i < 5) {
    console.log(i, '종료')
}