// Bubbling up, Propagating 🧼
// 최종호춯한 사람한테까지 전파되는 걸 에러 버블링 이라고 한다

function a() {
    throw new Error('error!');
  }
  
  function b() {
    //   a();
    try{
        a();
    }catch(err){
        // console.log('B에서 에러잡음!')
        console.log('B에서 에러잡지 못했다고 가정하고 에러 터뜨리자')
        throw new Error('Error!')
    }
  }
  
  function c() {
    b();
  }
  

try{
    c();
} catch(err){
    console.log('C에서 에러잡음!')
}

console.log('모두 출력 끝!')



fetch('http~~~')
  .then((res)=> res.text())
  .then((result)=>console.log(result))


// async, await 로 변경
async function fetchAndPrint(){
  const response = await fetch('http~~~');
  const result = await response.text()
  console.log(result);
}

fetchAndPrint()
