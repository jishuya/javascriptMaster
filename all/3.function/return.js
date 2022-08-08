// function add(a, b){
//     return a + b;
// } 

// const result = add(1, 2);
// console.log(result);

function print(num) {
    if(num <0){
        return;
    }
    console.log(num);
}

print(12);
print(-12);

function add(a=1, b=1){
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
};


function sum (a, b, ...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1,2,3,4,5,6);