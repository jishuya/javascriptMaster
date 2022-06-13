class Salary {
    constructor(name, part, period){
        this.name = name;
        this.part = part;
        this.period = period;
    }
    monthSalary(){
        console.log(this.period * 30)
    }
}

class Fulltime extends Salary{};
const fulltime = Fulltime('지수', '개발', '10000');
