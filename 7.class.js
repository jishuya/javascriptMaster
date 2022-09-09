// 생성자 함수 : 특정한 탬플렛대로 오브제트를 만들어주는 함수, 비슷한 객체를 계속 만들어야할 때 사용한다
// 1. 생성자함수는 대문자로 시작한다.
// 2. 함수 안에서 this를 사용하면 객체자신을 가르킬 수 있다

function ShowWhether(when, emoji){
    this.when = when;
    this.emoji = emoji;
    this.printWhether = () => {
        console.log(`${this.when}: ${this.emoji}`)
    };
		// return this; 생략가능
}

const tomorrow = new ShowWhether('tomorrow', '🌨');
const today = new ShowWhether('today', '🌪');
console.log(tomorrow);
console.log(today);
tomorrow.printWhether();
today.printWhether();

console.clear();


// 객체를 손쉽게 만들 수 있는 템플릿 
// 1. 생성자 함수
// 2. 클래스 

// stattic 정적프로퍼티, 메소드
class Forecast {
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수 
    static DEFAULT_WHETHER = '🌤';
    constructor (when, emoji) {
        this.when = when;
        this.emoji = emoji;
    }
    // 클래스 레벨의 메서드
    static printWhether () {
        return new Forecast('yesterday', '🌩');
    }
}

const yesterday = Forecast.printWhether();
console.log(yesterday);
console.log(Forecast.DEFAULT_WHETHER);


// sunny, rainny는 Forcast 클래스의 인스턴스이다 
const sunny = new Forecast('today', '🌞');
const rainny = new Forecast('tomorow', '🌧');

console.log(sunny);
console.log(rainny);
console.log(sunny.when);
console.log(rainny.emoji);
// sunny.printWhether();