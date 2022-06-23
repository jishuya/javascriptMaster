console.log(new Date());
console.log(new Date('June 5, 2022'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));