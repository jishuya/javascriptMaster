function getBanana() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('🍌');
        }, 1000)
    });
}

function getApple(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('🍎')
        }, 3000);
    })
}

function getOrange(){
    return Promise.reject(new Error('no orange'))
}

getBanana()
    .then((banana) => 
        getApple()
            .then((apple) => [banana, apple])
    )
    .then(console.log)

Promise.all([getBanana(), getApple(), getOrange()])
    .then((fruits)=> console.log('all-error', fruits))
    .catch(console.log)


// Promise.race([getBanana(), getApple()])
//     .then((fruits)=> console.log('race ', fruits))

Promise.allSettled([getBanana(), getApple(), getOrange()])
.then((fruits)=> console.log('all-settle', fruits))
.catch(console.log)