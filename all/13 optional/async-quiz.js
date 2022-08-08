function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => 🥚`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} =>  🍳`)
}

function getChicken(){
    return Promise.resolve(`시작! =>  🐓`)
    // return Promise.reject(new Error('치킨을 가지고 올 수 없음!'))
}

// function makeFriedEgg(){
//     return getChicken()
//         .catch(()=>'🐔')
//         .then(fetchEgg)
//         .then(fryEgg)
//         .then((result)=>{
//             console.log(result);
//             return result;
//         });
// }

// makeFriedEgg();

// 우리는 그냥 한번만 출력할꺼니까 console.log로 출력해보자

function makeFriedEgg(){
    return getChicken()
        .catch(()=>'🐔')
        .then(fetchEgg)
        .then(fryEgg)
}

makeFriedEgg().then(console.log);


async function makeFriedEgg(){
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

makeFriedEgg().then(console.log);