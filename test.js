function RunInDelay(callback, seconds){
    if(!seconds || seconds < 0){
        throw new Error('seconds가 0보다 작아요')
    }

    setTimeout(callback, seconds*1000)
}

try{
    RunInDelay(()=>{console.log('타이머완료')}, -2)
} catch {
    console.log(error)
}