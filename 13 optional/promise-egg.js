function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => π₯`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} =>  π³`)
}

function getChicken(){
    // return Promise.resolve(`μμ! =>  π`)
    return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'))
}


getChicken()
    .catch(()=>'π')
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)