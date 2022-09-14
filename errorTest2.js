function a() {
    console.log('a');
    throw new Error('Error 발생!')
}

function b() {
    console.log('b');
    try{
        a();
    } catch(error){
        console.log('b catched!')
    }
    
}

function c() {
    console.log('c');
    b();
}

try {
    c();
} catch (error) {
    console.log('catched!')
}
console.log('done')