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
    }
    introduce() {
        return `I', ${this.name}. I'm ${this.age}yaers old.`;
    }
}

const hyena = new Student('hyena', 25);
console.log(hyena.introduce);