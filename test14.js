let num = 1
switch(number){
    case 1:
        console.log('hi')
    break;
    default:
        console.log('Hello!')
    break;

    
}

for (let i = 0;  i < 5; i++){
    if(i === 3){
        break;        
    }
    console.log(i)
}



for (let i = 0;  i < 6; i++){
    if(i === 3){
        continue;   
    }
    console.log(i)
}



// // while 문 : 조건이 false가 될 때까지 코드 반복
let num = 5;
while(num >= 4){
    console.log(num);
    num--;
    
};


let limit = 0;
do{
    console.log('❤', limit)
    limit++
} while(limit < 3){
    console.log(limit, '이제 끝')
}