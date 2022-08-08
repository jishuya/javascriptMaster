// function RunInDelay(callback, seconds){
//     if(!seconds || seconds < 0){
//         throw new Error('seconds가 0보다 작아요')
//     }

//     setTimeout(callback, seconds*1000)
// }

// try{
//     RunInDelay(()=>{console.log('타이머완료')}, -2)
// } catch {
//     console.log(error)
// }


function runInDelay(seconds){
    return new Promise((resolve, reject)=>{
        if(!seconds || seconds < 0){
            reject(new Error( 'seconds가 0보다 작음'))
        }
        setTimeout(resolve, seconds *1000)
    });
}

runInDelay(2)
    .then(()=>console.log('타이머 완료!'))
    .catch(console.error)
    .finally(()=>console.log('끝났다'))