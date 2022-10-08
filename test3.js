function feelGood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('😄');
        }, 1000);
    })
}

function feelAngry(){
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('😡')
        }, 2000)
    })
}

function feelDizzy(){
    return Promise.reject(new Error("I'm awake"))
}

feelGood()
    .then((good)=>
        feelAngry()
            .then((angry)=> [good, angry])
    )
    .then(console.log);

