function getBook(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('📗')
        }, 1000)
    })
}

function goSchool(){
    return new Promise((resolve)=>{
         setTimeout(()=>{
            resolve('🏤')
         }, 3000)
    });
}

function goSwimming(){
    return Promise.reject(new Error('🏊‍♀ no ~~~'))
}

getBook()
    .then((book)=>
        goSchool()
            .then((school) => [book, school])
    )
    .then(console.log);