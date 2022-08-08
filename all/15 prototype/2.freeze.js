// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '지수얌';
console.log(dog);
console.log("=========")

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
// freeze는 추가, 삭제, 재정의, 수정 모두 안되지만 seal은 수정은 된다
const cat = {...dog};
// Object.assign(cat, dog)
Object.seal(cat);
console.log(cat);
cat.name = '냐아옹~'
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));
console.log("==================")
// 확장 ㄱ금지 : 추가만 안되구 수정, 삭제, 재정의 다 됨
const tiger = { name: '어흥'};
Object.preventExtensions(tiger);
console.log(tiger);
tiger.name = '어흥어흥어흐흐흐흥~~';
console.log(tiger);
delete tiger.name;
console.log(tiger)
tiger.age = 4; 
console.log(tiger);

// 오브젝트를 만들고 객체의 불변성을 위해서 동결, 밀봉, 확장 금지 할 수있다
// Freze는 동결! 수정. 삭제, 추가, 재정의 모두 X
// Seal은 수정만 가능
// PreventExtension은 추가빼고 다가능! 