// 프로미스는 콜백을 대체하여 쓸 수 있는 것으로 깔끔
// 프로미스는 비동기적으로 실행한 무엇인가가 끝난것을 알려준다.

// Producer : 어떤 기능을 수행해서 원하는 결과를 만들어냄 => promise object
// Consumer : 만들어진 데이터를 소비함


// function runInDelay(seconds){
//     return new Promise((resolve, reject)=>{
//        if (!seconds || seconds < 0) {
//         reject(new Error('secondes가 0보다 작음'))
//        }
//        setTimeout(()=>{
//             resolve(); // setTimeOut이 잘 되면 resolve 함수를 호출 
//         }, seconds*1000)
//     });
// };

// runInDelay(2)
//     .then(()=>{
//         console.log('타이머 완료!')
//     })
//     .catch((error)=>{console.error(error);})
//     .finally(()=> {console.log('끝났다')})



// Promise chaining 

// 프로미스 체이닝
// c
function getLeaves(flower) {
    return Promise.resolve(`${flower} => 🍂`);
}
    
// b
function getFlower(bud) {
    // return Promise.resolve(`${bud} => 🌹`);
    return Promise.resolve(
        setTimeout(()=>{return `${bud} => 🌹`}, 1000)
    )
}

// a
function getSprout() {
    // return new Promise((resolve, reject)=>{
    //     resolve(`start => 🌱`)
    // })
    return Promise.resolve(`start => 🌱`);
    // return Promise.reject(new Error('에러발생'))
}

getSprout()
    .catch(() => '🍃')
    .then(getFlower)
    .then(getLeaves)
    .then(console.log)



// const user = '안녕';
// function printUser(user){
//     console.log(test)
// };


// user.printUser()
// user.printUser()
// user.printUser()
// user.printUser()



function fetchFruits(){
    return getBanana()
        .then((banana)=>
            getApple()
            .then((apple)=> [banana, apple])
        )
}

fetchFruits()
    .then((fruits)=> console.log(fruits))