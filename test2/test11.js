// null 또는 undefined를 체크할 때 사용하는 optional chaning Operator
// ES11 (ECMASCript 2020)


// let item = {price : 1};
// // const price = item && item.price;
// const price = item?.price;
// console.log(price);


// 아래의 members같이 중첩된 객체의 프로퍼티에 접근할 때는 점 표기법을 사용하면 된다. 
// members. department.dev
// 그러나 중첩된 프로퍼티에 접근하기 전에 그것이 null or undefined가 아니라는 것을 먼저 검증하고 접근해야 에러를 방지 할 수 있다.
// 검증을 위해서는 if문을 사용할 수도 있지만 일반적으로는 로지컬연산자인 AND연산자(&&)나 OR연산자(||)를 이용해왔다.
// 그러나 이마저도 프로퍼티의 이름이 길어지게됨에 따라 가독성이 떨어진다는 문제가 나왔다.
// 이를 해결하게 위해 나온 것이 ES!!(ECMAScript2011)의 옵셔널 체이닝(Obtional Chaining)이다.
// 옵쳐널 체이닝 연산자는 물음표와 마침표를 붙여서 사용하기만 하면 끝!
// 만약 옵셔녈 체이닝 연산자의 왼쪽 프로퍼티가 있으면 그 다음 프로퍼티를 리턴하고
// 왼쪽 프로퍼티가 undefined or null이 이면 undefind를 리턴한다.

const petMom = {
    name: 'hana',
    pet: {
      kind: 'Dog',
      name: 'dodo',
    }
  }
console.log(petMom.pet?.name);
console.log((petMom.pet === null || petMom.pet === undefined) ? undefined : petMom.pet.name);
  


let members = {name: 'peter', age: 30, department: {dev : 'frontend'}};

// 로지컬 연산자 사용
let name = members && members.name;
console.log('logical:', name);
function logicalJob(mem){
    let job = mem && mem.department && mem.department.dev;
    console.log('logical:', job);
}
logicalJob(members);


// 옵셔널 체이닝 사용
name = members?.name;
console.log('optional:', name)

function optionalJob(mem){
    let job = mem?.department?.dev;
    console.log('optional:', job);
}
optionalJob(members);


console.log("----------------------------");


let lastname = null;
console.log(lastname || '모름?!');  // 모름!?
console.log(lastname ?? '모름?!');  // 모름?!
// lastname || '모름?!'에서는 lastname falsy한 경우, 오른쪽 값을 출력한다.
// lastname ?? '모름?!'에서는 lastname이 null or undefined인 경우 오른쪽 값을 출력한다.

let meter = 0;
console.log(meter || 10); // 10
console.log(meter ?? 10); // 0
//'meter || 10'에서는 meter(0)을 falsy 한 값으로 평가해서, 오른쪽 값을 출력한다. 
// 반면 'meter ?? 10'에서는 meter가 정확히 null이나 undefined일 아니기때문에, 왼쪽 값을 출력한다.

// 이런 특징 때문에 길이, 높이, 몸무게 등 처럼 0이 할당될 수 있는 변수를 사용하는 경우에는, ||보다 ??가 적합하다