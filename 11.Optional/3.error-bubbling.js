function a() {
    throw new Error('error닷!');
}

function b() {
    try{ 
        a();
    } catch(error) {
        console.log(' b Catched!!!')
        throw error;
    }
}

function c() {
    b();
}

try {
    c();
} catch(error) {
    console.log('C Catched!')
} 

console.log('done!')