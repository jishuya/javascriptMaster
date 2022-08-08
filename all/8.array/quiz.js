
const multiple = {
    [Symbol.iterator](){
        
    }
}

for (const num of multiple){
    console.log(num)
}