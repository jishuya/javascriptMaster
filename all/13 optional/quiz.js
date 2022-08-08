
function runInDelay(callback, seconds){
    if(!callback){
        throw new Error('콜백함수 없음')
    }
    
    if(!seconds || seconds < 0 ){
        throw new Error('seconds는 0보다 커야함')
    } 
    
    setTimeout(callback, seconds * 1000)    
};


function car(){
    console.log('🚓')
}

try {
    runInDelay(car, -3);
} catch(error) {
    console.log(error)
}
