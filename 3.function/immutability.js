function display(num){
    num = 5;
    console.log(num);
}

const value = 4;
// display(value);
// console.log("value: ", value);


// function displayObj(obj){
//     obj.name = 'jisoooo';
//     console.log(obj);
// }


function changeName(obj){

    return {... obj, name: 'jisooooo'} 
}

const person = { name: 'jishu' };
changeName(person);
console.log("person: ", person);