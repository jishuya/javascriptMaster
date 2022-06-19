let items1 = ['🍌', '🍓', '🍇', '🍓'];

let items2 =['🍌', '🥝', '🍇', '🥝', '🥝'];

let items3 = ['🍌', '🥝', '🍇'];

let items4 = ['🍌', '🍓', '🍇', '🍓'];


// 1
items1.forEach(el => {
    if(el === '🍓'){
        el = '🥝'
    }
})

console.log(items1);

//2 
let cnt = 0;
items2.forEach(el => {
    if(el === '🥝'){
       cnt ++;
    }
})
console.log("cnt: ", cnt);


