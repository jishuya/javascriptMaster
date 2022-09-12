class Employee {

    constructor(name, department, pay){
        this.name = name;
        this.department = department;
        this.pay = pay; 
    };

    calculatePay(){
        console.log(`${this.name}의 월급은 ${this.pay * 30}입니다.`);
    }
};

class PartTimeJob extends Employee{
    static pay_rate = 10000;
    constructor(name, department){
        super(name, department, PartTimeJob.pay_rate);
    };
};

class FullTimeJob extends Employee{
    static pay_rate = 5000;
    constructor(name, department){
        super(name, department, FullTimeJob.pay_rate)
    }
}


// 먼저 출력 계획을 세우자 
const jishu = new FullTimeJob('jishu', 'developer');
const hana = new PartTimeJob('hana', 'designer');
jishu.calculatePay();
hana.calculatePay();