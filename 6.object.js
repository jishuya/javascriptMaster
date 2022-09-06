
// 자바스크립트의 데이터 타입
// 1. 단일데이터 = 원시데이터: Sting, number, boolean symbolm, null, undefined
// 2. 복합데이터 = 객채 : object, function


// let apple 
// apple.namme


// key 문자, 숫자, 문자열, 대괄호안에 적인 문자열 가능 
let student = {
    name : 'hana',
    0 : 8282,
    'class' : 'a',
    ['grade'] : '👍' 
}

// console.log(student.name);  // hana
// console.log(student.class);     // a
// console.log(student.grade);     // 👍
// console.log(student['grade'])     // 👍
// console.log(student[0]);    // 8282

student.email = 'aaa@naver.com';
console.log(student);
delete student.email;
console.log(student);

console.clear();

const member = {
    name : 'jiwon',
    age: 30
}

function readMember(obj, key){
    console.log(obj[key]);
    return true;
}
readMember(member, 'name');     // jiwon


function addMember(obj, key, value){
    return obj[key] = value;
}
console.log(addMember(member, 'class', 'A'));   // A
console.log(Object.keys(member).length);    // 2


function deleteMember(obj, key){
    return delete obj[key];
}
console.log(deleteMember(member, 'class'));     // true
console.log(Object.keys(member).length);    // 2