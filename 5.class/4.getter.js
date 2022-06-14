class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lasttName = lastName;
        // this.fullName = `${this.lasttName} ${this.firstName}`;
    }
    get fullName(){
        return `${this.lasttName} ${this.firstName}`;
    }
    set fullName(value){
        console.log('set', value);
    }
}

const student = new Student('지수', '임');
student.firstName = '안나';
console.log(111, student.firstName);
console.log(222, student.fullName);
student.fullName = '김철수';