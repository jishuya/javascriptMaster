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
    return Promise.reject(new Error('So so...'));
  }
  
  // 바나나와 사과를 같이 가지고 오기
  feelGood() //
    .then((good) =>
    feelBad() //
        .then((bad) => [good, bad])
    )
    .then((result)=> console.log('1 + 2초 후: ', result));
  
//   // Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([feelGood(), feelBad()])
  .then((feeling)=> console.log('Promise.all, 2초 후:', feeling))
  
  // Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([feelGood(), feelBad()])
  .then((feeling) => console.log('Promise.race, 1초 후:' , feeling))
  
  Promise.all([feelGood(), feelBad(), feelSoso()]) //
    .then((feeling) => console.log('Promise.all-error:', feeling))
    .catch(console.log);
  
    Promise.allSettled([feelGood(), feelBad(), feelSoso()]) //
    .then((feeling) => console.log('Promise.all-error:', feeling))
    .catch(console.log);