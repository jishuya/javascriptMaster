function feelGood() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('😄');
      }, 1000);
    });
  }
  
  function feelBad() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('😡');
      }, 2000);
    });
  }
  
  function feelSoso() {
    return Promise.reject(new Error('So so...🤨'));
  }
  

  // 1. Promise를 사용했을 때
  // function whatFeeling(){
  //   return feelGood() //
  //   .then((good) =>
  //   feelBad() //
  //       .then((bad) => [good, bad])
  //   )
  // };
  
  // whatFeeling()
  // .then((result)=> console.log('1 + 2초 후: ', result));


  //2. Async를 사용했을 떄
async function HowFeeling(){
  const good = await feelGood()
  const bad = await feelBad()
  const soso = await feelSoso()
  return [good, bad, soso]
}

// HowFeeling()
//   .then((result)=> console.log('1 + 2초 후: ', result));

// 3. Async 사용 시 에러 잡을 떄 
try{
  HowFeeling()
    .then((result)=> console.log('1 + 2초 후: ', result));
}catch(error){
  console.error(error)
}

