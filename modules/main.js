// import { increase as increase1, getCount } from './counter.js';
import * as counter from './counter.js';

counter.increase()
counter.increase()
counter.increase()

console.log(counter.getCount);

// console.log(count);

// increase();
// console.log(count);

counter.getCount = -10;
console.log(counter.getCount)