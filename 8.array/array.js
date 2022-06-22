let array = new Array(3);

console.log(array);

array = new Array(1, 2, 3, 4);

console.log(array);

array = Array.of(7);
console.log(array);

const anotherArray = [1, 2, 3, 5, 7];
console.log(anotherArray);

array = Array.from('text');
console.log(array);

array = Array.from({
    0: '안',
    1: '녕',
    length: 2
})

console.log(array);