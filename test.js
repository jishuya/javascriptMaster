// 콜백 
// 비동기 콜백? 동기 콜백?
// 비동기 코드를 깔끔하게 쓰는 promise
// 비동기 코드로 만드는 async, await

// 자바스크립트 실행순서 (콜스택)


 // 자바스크립트에서 동적으로 객체를 생성하는 경우 Memory Heap에 저장된다
 // 자바스크립트는 씽글쓰레드 - 한번에 하나의 일만 처리할 수있다 

// 그리고 기본적으로 동기적으로 진행
// 호출 순서가 콜백에 저장된 

// 자바스크립트 언어 자체는 동기적으로 작성
// 런타임 환경에서 제공해주는, 호스트 환경에서 제공해주는 다양한 API가 있다 
// 브라우저라면 웹 API가 있다 
// 요런 웹API는 멀리쓰레드 환경에서 작동하기 때문에 동시에 여러가지 일을 수행 가능하다


function runInDelay(callback, seconds){
    if(!callback){
        console.log('callBack 주세용')
        return;
    } else {
        if (seconds < 0) {
            throw new Error('0보다 작은 시간은 안되용')
        } else {
            setTimeout(()=>{
                callback()
                console.log('히힛')
            }, seconds)
        }
    }
}



try {
    // runInDelay(()=>{
    //     console.log(999)
    // }, 2000);
    runInDelay(()=>{
        console.log('헤헤')
    }, -4);
} catch (err){
    console.log(err)
}


try {
    const response = await fetch('https://learn.codeit.kr/api/menus');
    const menus = await response.json();
    const menu = await pick(menus);
    console.log(`Today's lunch is ${menu.name}~`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Random Menu candidates change everyday');
  }
}

getRandomMenu();
