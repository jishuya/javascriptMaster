
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


const x = 0;
const y = 0;
const coordinate = { x,  y };
console.log(coordinate);

function maskeObject(x, y){
    return {x, y}
}
console.log(maskeObject(x, y));

const weather = {
    when : 'today',
    show : function () {
        console.log(`${this.when}: 🌞`)
    }
};

weather.show();


// 생성자 함수 : 특정한 탬플렛대로 오브제트를 만들어주는 함수
// 1. 생성자함수는 대문자로 시작한다.
// 2. 함수 안에서 this를 사용하면 객체자신을 가르킬 수 있다

function showWhether(when, emoji){
    this.when = when;
    this.emoji = emoji;
    this.printWhether = () => {
        console.log(`${this.when}: ${this.emoji}`)
    };
}

const tomorrow = new showWhether('tomorrow', '🌨');
const today = new showWhether('today', '🌪');
console.log(tomorrow);
console.log(today);
tomorrow.printWhether();
today.printWhether();