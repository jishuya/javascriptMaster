const text = 'Hello World';


console.log(text.substring(0,1))

for (let i =0; i< text.length; i++){
    console.log(text.substring(i,i+1))
}


const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '))


setInterval(() => {
   console.log(new Date()) 
}, 1000);