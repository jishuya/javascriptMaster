// 함수의 순서 -> 콜스택
// 외부의 변수를 참조하는 방법

// 메모리 힙, 콜스택 => 하나의 실긍  컨텍스트 스택 = 실행 컨텍스트 스택 
// 메모리힙, 콜스택, 테스크큐 이벤트루트를 돌면서 해당이벤트를 하면 콜스택에 하나씩 쌓이는 거야

// 전역스코프


const text = 'hello';
function func(){
    console.log(text)
}
func();



function outer(){
    const x = 0;
    function inner(){
        console.log(`inside inner: ${x}`)
    }
    return inner;
}

const func1 = outer();
func1();


// 내부 정보를 은닉하고, 공개함수를 통한 데이터 조작을 위해 
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일


function makeCOunter(){
    let count = 0;
    function increase(){
        count++;
        console.log(count);
    }
    return increase;
}

const increase = makeCOunter();
increase();
increase();
increase();



// 클래스를 사용하기 

class Counter{
    #count = 0;
    increase(){
        this.#count++;
        console.log('❤',this.#count)
    }
}
const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();

