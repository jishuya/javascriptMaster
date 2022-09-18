// 비동기 코드를 깔끔하게 쓰는 promise
// 비동기 코드를 동기로 만드는 async await

function runInDelay(seconds){
    return new Promise((resolve, reject)=>{
        if (!seconds || seconds < 0){
            reject(new Error('seconds가 유효하지 않음'))
        } 
        setTimeout(resolve, seconds * 1000);
    })
}

runInDelay(0)
    .then(()=>console.log('타이머 완료!'))
    .catch(console.error)
    .finally(()=>console.log('끝!!'))