function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => π₯`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} =>  π³`)
}

function getChicken(){
    return Promise.resolve(`μμ! =>  π`)
    // return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'))
}

// function makeFriedEgg(){
//     return getChicken()
//         .catch(()=>'π')
//         .then(fetchEgg)
//         .then(fryEgg)
//         .then((result)=>{
//             console.log(result);
//             return result;
//         });
// }

// makeFriedEgg();

// μ°λ¦¬λ κ·Έλ₯ νλ²λ§ μΆλ ₯ν κΊΌλκΉ console.logλ‘ μΆλ ₯ν΄λ³΄μ

function makeFriedEgg(){
    return getChicken()
        .catch(()=>'π')
        .then(fetchEgg)
        .then(fryEgg)
}

makeFriedEgg().then(console.log);


async function makeFriedEgg(){
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = 'π';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

makeFriedEgg().then(console.log);