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

async function fetchEgg(){
    const getChickenn = getChicken();
    const getEgg = fetchEgg();
    const getFry = fryEgg();
    return getChicken, getEgg, getFry
}

fetchEgg(getChickenn, getEgg, getFry)
    .then(console.log(getChickenn, getEgg, getFry))

getChicken()
    .catch(()=>'🐔')
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)