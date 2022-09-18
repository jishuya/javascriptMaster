// 프로미스 체이닝
// a
function getLeaves(꽃) {
    return Promise.resolve(`${flower} => 🍂`);
    }
    
//b
function getFlower(bud) {
return Promise.resolve(`${bud} => 🌹`);
}

// c
function getSprout() {
return Promise.reject(new Error('에러발생'));
// return Promise.resolve(`start => 🌱`);
}

getSprout()
.catch(() => '🍃')
.then(getFlower)
.then(getLeaves)
.then(console.log);