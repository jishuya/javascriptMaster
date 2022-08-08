 
let fruit = {
    name : 'apple',
    'price' : 2100,
    3: '300',
    ['hello']: '🖐'
}


fruit.emoji = '👩';
fruit['emoji2'] = '👨';

delete fruit.emoji2;


console.log(fruit);