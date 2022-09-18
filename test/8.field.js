class Member {
    name;
    photo;
    job = 'developer';
    constructor(name, photo) {
        this.name = name;
        this.photo = photo;
    }
    showMember () {
        return `${this.name} is ${this.photo}!`;
    }
}

const jiwon = new Member('jiwon', '👩');
console.log(jiwon.showMember());

console.clear();



// Access Poperty (접근자 프로퍼티)
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.selfIntroduction = `I'm ${this.name}. I'm ${this.age}yaers old.`;
    }

    get selfIntroduction(){
        return `I'm ${this.name}. I'm ${this.age}yaers old :)`;
    }

    set selfIntroduction(value){
        console.log('set', value)
    }

    introduce() {
        return `I'm ${this.name}. I'm ${this.age}yaers old ;)`;
    }
}

// 생성자에서 한번 만들어지고 업데이트 시키고 싶어
const heesu = new Student('heesu', 26);
heesu.age = 30;
console.log(11, heesu.age);
// selfIntroduction - 접근을 하면 get이 호출
console.log(22, heesu.selfIntroduction);
// selfIntroduction - 할당을 하면 set이 호출 
heesu.selfIntroduction = 'siwon';

