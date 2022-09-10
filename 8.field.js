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



class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.selfIntroduction = `I'm ${this.name}. I'm ${this.age}yaers old.`;
    }
    get selfIntroduction(){
        return `I'm ${this.name}. I'm ${this.age}yaers old.`;
    }
    set selfIntroduction(value){
        console.log('set', value)
    }
    introduce() {
        return `I'm ${this.name}. I'm ${this.age}yaers old.`;
    }
}

const hyena = new Student('hyena', 25);
// console.log(hyena.introduce());
// 생성자가 생성된 다음에 속성 바꾸기
// selfIntroduction에 접근할 때마다 업데이트 된 걸로 접근하고 싶다면? 
// get을 사용한다. 
hyena.age = 30;
console.log(111, hyena.age);
console.log(222, hyena.selfIntroduction);

// set
hyena.selfIntroduction = 'siwon';

