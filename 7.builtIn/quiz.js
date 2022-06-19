//1. 문자열 퀴즈
const text = 'Hello World!';
for (let i = 0; i < text.length; i++){
    console.log(text[i]);
}

// 2. id 배열로
const ids ='user1, user2, user3, user4';  
console.log(ids.split(', '));


// 1초에 한번씩 시계 출력
setInterval(()=>{
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);
