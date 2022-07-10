'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워트 사용시 기본적으로 엄격 모드임

//이렇게 지울 수 없음
// var x = 1;
// delete x;

function add(x) {
  var a = 2;
  // b 앞에 선언 꼭 해야함
  var b = a + x;
  // 함수 내부에서 this출력 불가
  console.log(this);
}
add(1);


// for문에서 num 선언 꼭 해야함
const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
