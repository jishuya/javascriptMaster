const add = (a, b) => a + b;
const multiply = (a, b) => a * b;


function calculator(a, b, action){
    if(a < 0 || b <0){
        return;
    }
    let result = action(a, b);
    console.log(result);
    return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);
calculator(-1, 2, multiply);
calculator(-1, -2, multiply);