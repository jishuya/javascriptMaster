// Argument, Paameter


//Parameter
function Greeting(name){
    console.log(`안녕, 나는 ${name}이야`)
}

// Argumnet
Greeting('지수') 

console.clear();

// return -> 반환
// return을 중간에 사용하게 되면 함수를 어떤 조건에 따라 중단 시킬 수 있다

function print(num){
    if (num < 5){
        return;
    }
    console.log(num)
} 

print(10);
print(4);

console.log('------------------------------');

// 매개변수 정보는 함수 내부에서 접근이 가능한 agument 객체에 저장됨