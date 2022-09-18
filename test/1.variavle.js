// 원시데이터: 단일데이터 
// 객체: 복합데이터  - 관계가 있는 데이터를 같이 모아서 보관이 가능하다 


// code, data, stack, heap
// 원시데이터는 code, data에 저장
// 객체는 heap 영역에 저장 

let apple = { //data에 저장??
    name: '사과', 
    price: 2000 // heap에서 주소를 바라본다 
}

// object는 값이 아니라 참조 !


let a = 1;
let b = a;
b = 2;
console.log(a)
console.log(b) 

const item = {
    name : '사과'
}
let orange = item;
item.name = 'orange';
console.log(item.name)
console.log(orange.name)

let banana = {
    name: 'Hi'
}

item = banana