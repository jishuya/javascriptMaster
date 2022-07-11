// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = {name: '엘리'};
const dog = {name: '와우', emoji: '🐶', owner:ellie};
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);