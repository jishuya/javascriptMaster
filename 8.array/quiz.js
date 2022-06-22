let items1 = ['🍌', '🍓', '🍇', '🍓'];

let items2 =['🍌', '🥝', '🍇', '🥝', '🥝'];

let items3 = ['🍌', '🥝', '🍇'];

let items4 = ['🍌', '🍓', '🍇', '🍓'];


function replace (arr, from, to){
    const replaced = Array.from(arr);
    for(let i=0; i<replaced.length; i++){
        if(replaced[i] === from){
            replaced[i]= to
        }
    }
    return replaced;
}

const result = replace(items1, '🍓', '🥝')
console.log(result);


// 요소가 몇개 있는지 카운트 하기
let cnt = 0;
function counter(arr, item){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === item){
            cnt ++;
        }
    }
    return cnt;
}

const result2 = counter(items2, '🥝')
console.log(result2);




// dk