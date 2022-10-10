function getChicken(){
    return Promise.resolve(`시작! =>  🐓`)
    // return Promise.reject(new Error('치킨을 가지고 올 수 없음!'))
}

function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => 🥚`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} =>  🍳`)
}


// Promise를 사용하기

// function makeFriedEgg(){
//     return getChicken()
//         .catch(()=>'🐔')
//         .then(fetchEgg)
//         .then(fryEgg)
//         .then((result)=>{
//             console.log(result);
//             return result
//         })
// }


// function makeFriedEgg(){
//     return getChicken()
//         .catch(()=>'🐔')
//         .then(fetchEgg)
//         .then(fryEgg)
// }


// makeFriedEgg().then(console.log)

async function makeFriedEgg(){
    let chicken;
    try{
        chicken = await getChicken();
        
    } catch{
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    const fry = await fryEgg(egg);
    console.log(fry)
}

makeFriedEgg()



const ellie = {
    name: 'ellie',
    age: 20,
    eat: () => {
      console.log('eat');
    },
  };


  const json = JSON.stringify(ellie);
  console.log(json);
  const obj = JSON.parse(json)
  console.log(obj)
  