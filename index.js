let apple = {
    name: '사과',
    price: 2000
};

let orange = apple;

console.log(apple)
console.log(orange)

orange.name = '오렌지'
console.log(apple)
console.log(orange)
