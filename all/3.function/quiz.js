

function iterate(max, action){
    for (let i = 0; i <max; i++){
        action(i)
    }
}

function log(num){
    console.log(num)
}

function double(num){
    console.log(num * 2)
}

// iterate(3, log);
// iterate(3, double);

iterate(3, (num)=>{console.log(num)})
iterate(3, (num)=>{console.log(num * 2)})