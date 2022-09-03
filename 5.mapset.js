// Objec - key , Array - index

// map 
const sample = new Map();

// set 메소드 - value 추가
sample.set('name', '문자key ok');
sample.set(123, '숫자key ok');
sample.set(true, '불린key ok');

// get 메소드 - value 조회
console.log(sample.get('name')); // 문자key ok
console.log(sample.get(123)); // '숫자key ok
console.log(sample.get(true)); // 불린key ok

// has 메소드 - value 유무
console.log(sample.has('name')); // true
console.log(sample.has('age')); // false

// size 메소드 - 크기
console.log(sample.size); // 3

// delete 메소드 - value 제거
sample.delete('name');
console.log(sample.has('name')); // false
console.log(sample.size); //2

// clear 메소드 - 모든 요소 제거
sample.clear(); 
console.log(sample.size); // 0


console.clear();


// set 생성
const students  = new Set();

// add 메소드 - value 추가
students.add('hana'); // set(1) {"hana"}
students.add('jiwon'); // set(2) {"hana", "jiwon"}
students.add('heesoo'); // set(2) {"hana", "jiwon", "heesoo"}

// set은 개별 값에 바로 접근할 수 있는 get메소드가 없다
console.log(students);
students.forEach(el => console.log(el))

// has 메소드 - value 유무
console.log(students.has('hana')); // true
console.log(students.has('jishu')); // false

// size 프로퍼티
console.log(students.size); // 3

// delete 메소드
students.delete('hana'); 
console.log(students.size); // 2

// clear 메소드
students.clear();
console.log(students.size); // 0 


const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqueMember = new Set(numbers);
console.log('👨‍👩‍👦‍👦', uniqueMember)