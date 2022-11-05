// function loop(){
//     const array = [];
//     // var와 let의 차이점
//     for (let i = 0; i <5; i++){
//         array.push(function(){
//             console.log(i);
//         });
//     }
//     return array;
// }

// const array = loop();
// array.forEach((func)=>func());




var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

{
    var x = 3;
  }
  
  function myFunction() {
    var y = 4;
  }
  
  console.log(x);
//   console.log(y);



function loop(){
    const array = [];
    // var와 let의 차이점
    var i;
    for (i = 0; i <5; i++){
        array.push(function(){
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func)=>func());