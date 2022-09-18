// Extends 확장, 상소

// class Developer {
//     constructor(job){
//         this.job = job;
//     }
//     develop(){
//         console.log('개발~');
//     };
//     getToWork(){
//         console.log('출근~');
//     };
//     getOffWork(){
//         console.log('퇴근~');
//     };
// };

// class Designer {
//     constructor(job){
//         this.job = job;
//     };
//     design(){
//         console.log('디자인~');
//     };
//     getToWork(){
//         console.log('출근~');
//     };
//     getOffWork(){
//         console.log('퇴근~');
//     };
// }

class Employee {
    constructor(job){
        this.job = job;
    };
    getToWork(){
        console.log('출근~');
    };
    getOffWork(){
        console.log('퇴근~');
    };

}

// class Developer extends Employee{}
// const developer = new Developer('개발자');
// console.log(developer);
// developer.getToWork();
// developer.getOffWork();


class Developer extends Employee{
    develop(){
        console.log('개발~');
    };
}

const developer = new Developer('개발자');
console.log(developer);
developer.getToWork();
developer.getOffWork();

class Desiner extends Employee{
    constructor(job, name){
        super(job);
        this.name = name;
    }
    design(){
        console.log("디자인~");
    }
    getToWork(){
        console.log('디자이너가 출근한다!')
    }
}

const desiner = new Desiner('디자이너', '희수');
console.log(desiner);
desiner.design();
desiner.getToWork();




// 0 이상의 값으로 초기화한 취 하나씩 숫자를 증가할 수있는 카운터 만들기??

class Counter {
    #value
    constructor(num){
        if(isNaN(num) || num < 0){
            this.#value = 0;
        } else {
            this.#value = num;
        }
    }
    // 외부에서 value를 볼 수만(읽을 수만) 있기 떄문에 
    // getter를 이용해서 value에 접근하면 내부에 있는 #value를 리턴해준다
    get value(){
        return this.#value;
    }

    incremnet(){
        this.#value++;
    }
}

const counter = new Counter(0);
counter.incremnet(); // 1
counter.incremnet(); // 2
console.log(counter.value); 



console.clear();
