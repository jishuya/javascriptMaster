const dog = { name: 'μμ°', emoji:'πΆ' }

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'))

const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(111, descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(222 ,desc);

Object.defineProperty(dog, 'name', {
    value: 'λ©λ©',
    writable: false,
    enumerable: false,
    configurable: false,
  });
  


console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);


const student = {};
Object.defineProperties(student, {
  firstName: {
    value: 'μν¬',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'κΉ',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);