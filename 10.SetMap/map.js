const map = new Map([
    ['key1', '๐'],
    ['key2', '๐']
]);
console.log(map);

// ์ฌ์ด์ฆ ํ์ธ
console.log(map.size);

// ์กด์ฌํ๋ ์ง ํ์ธ
console.log(map.has('key1'));
console.log(map.has('key4'));

// ์ํ
map.forEach((value, key) => console.log('key; ', key, ', value: ', value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.clear();

// ์ฐพ๊ธฐ
console.log(map.get('key1'))
console.log(map.get('key4'))

// ์ถ๊ฐ
map.set('key3', '๐ฅ');
console.log(map);

// ์ญ์ 
map.delete('key3');
console.log(map);


console.clear();

// ์ค๋ธ์ ํธ์์ ํฐ ์ฐจ์ด์  
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '๋ง์๋ ์ฐ์ ' };
// 1. ์ค๋ธ์ ํธ ๋ง๋ค๊ธฐ
const obj = {
    [key] : milk,
}
console.log(obj);

// 2. map ๋ง๋ค๊ธฐ
const map2 = new Map([[key, milk]]);
console.log(map2);

console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));
