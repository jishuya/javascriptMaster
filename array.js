let array = new Array(3);
console.log(array)

array = new Array(1, 2, 3)
console.log(array);



// var , let , const 
// 재선언, 재할당 

array = Array.of(8)
console.log(array);
const array2 = [1, 2, 3, 4, 5]
console.log(array2);

const array3 = Array.from('text');
console.log(array3);

array = Array.from({
    0: '안',
    1: '녕',
    length : 2
})
console.log(array);