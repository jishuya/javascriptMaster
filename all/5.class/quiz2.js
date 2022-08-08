class Salary {
    salary = 8000;
    name;
    part;
    period;
    constructor(name, part, period){
        this.name = name;
        this.part = part;
        this.period = period;
    }
    monthSalary(){
        console.log(`${this.name} 월급은: ` , this.period * this.salary)
    }
}

class PartTime extends Salary{};
const partTime = new PartTime('지수', '개발', 30);
console.log(partTime.monthSalary())

class FullTime extends Salary{
    monthSalary(){
        console.log(`${this.name} 월급은: ` , this.period * (this.salary +2000))
    }
};
const fullTime = new FullTime('미영', '영업', 20);
console.log(fullTime.monthSalary())