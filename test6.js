// scope : 변수를 식별할 수 있는 유효한 범위
// 식별자(변수, 함수 , 클래스 이름)가 유효한 범위 


// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
    const a = 'a';
}
//   console.log(a);
  const b = 'b';
  
  // 함수 외부에서는 함수 내부의 변수를 참조 ❌
  function print() {
    const message = 'Hello World';
    console.log(message);
  }
//   console.log(message);
  
  // 함수 외부에서는 함수의 매개변수를 참조 ❌
  function sum(a, b) {
    console.log(a, b);
  }
//   console.log(a, b);


{
    const x = 1;
    {
      const y = 2;
      console.log(x); 
    }
    console.log(x);
    // console.log(y) - App crushed;
  }
  
  const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
  {
    const text = 'inside block1'; // 지역 변수(로컬변수), 지역 스코프(로컬스코프)
    {
      const text = 'inside block2';
      console.log(text) // indside bock2;
    }
  }


  // 가비지 컬렉터가 사용하지 않는 힙역역의 것은 주기적으로 검사해서 발견하면 지워
  /** 글로벌 변수는 앱이 종료할 때까지 유지 되지만 
   * 블럭내부에서만 존재하는 건 블럭이 끝나면 자동적으로 소멸된다
   * 블럭내부에서만 존재하고 블럭이 끝나면 자동 소멸
   * 함수내부에서도 블럭안에서 만 사용
   */

  /** 
   * 콜스택
   */