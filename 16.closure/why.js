function makeCounter() {
    let counter = 0;
    function increase() {
        counter++;
        console.log(counter);
    }
    return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}
const counte = new Counter();
counte.increase();