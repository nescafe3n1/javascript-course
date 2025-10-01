// 'use strict';

// console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// console.log('Starting program');

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// const globalVar = 'I am global';

// function anyFunction() {
//   console.log(globalVar);
// }

// function myFunction() {
//   const functionVar = 'I am function-scoped';
//   console.log(functionVar);
// }
// // console.log(functionVar); 

// if (true) {
//   let blockVar = 'I am block-scoped';
//   const alsoBlockVar = 'Me too';
//   var notBlockScoped = 'I leak out'; // var ignores block scope
// }

// // console.log(blockVar); // Error: not accessible
// // console.log(alsoBlockVar); // Error: not accessible
// console.log(notBlockScoped); // Works! var leaks out

// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, /* blockConst not here */functionVar);
// }

// demoScope();

// const name = 'GlobalName';

// function a() {
//   const name = 'FunctionName';
//   function b() {
//     console.log(name);
//   }
//   b();
// }

// a();


// console.log(varX); 

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(varX); // 1
// console.log(letX); // 2
// console.log(constX); // 3

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3)); 
// // console.log(addArrow(2, 3)); 

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// console.log(addDecl(2, 3)); 
// console.log(addExpr(2, 3)); 
// console.log(addArrow(2, 3)); 

// const apiUrl = 'https://example.com';
// console.log(apiUrl);

// // console.log(title);
// let title = 'Behind the Scenes';

// function outer() {
//   const label = 'outer';
//   function inner() {
//     console.log('scope:', label);
//   }
//   inner();
// }
// outer();

// function one() {
//   two();
// }
// function two() {
//   console.log('stack: two');
// }
// one();

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();

// const personn = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// const greetFunction = person.greet;
// greetFunction();

// const button = document.querySelector('button');
// button.addEventListener('click', person.greet);

// button.addEventListener('click', () => person.greet());

// button.addEventListener('click', person.greet.bind(person));

// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',

//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },

//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },
// };

// user.printHobbiesBad();
// user.printHobbiesGood();

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// const userCard = {
//   name: 'Sarah',

//   setupEvents() {
//     console.log('Event setup for:', this.name);
//   },
// };

// userCard.setupEvents();

// const calculator = {
//   numbers: [1, 2, 3, 4, 5],
//   multiplier: 2,

//   processNumbers() {
//     return this.numbers.map(num => num * this.multiplier);
//   },
// };

// console.log('Processed numbers:', calculator.processNumbers());

// PRIMITIVES IN STACK
let age = 30;
let oldAge = age; 
age = 31;

console.log('age:', age); 
console.log('oldAge:', oldAge);

// OBJECTS IN HEAP
const me = { name: 'Jonas', age: 30 };
const friend = me; 

friend.age = 27;

console.log('me:', me);
console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson); 
console.log('updated:', updatedPerson); 
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies); 
console.log('copy hobbies:', shallowCopy.hobbies);


const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const userManager = {
  users: [],

  addUser: function (userData) {
    const deepCopy = JSON.parse(JSON.stringify(userData));
    this.users.push(deepCopy);
  },

  getUsers: function () {
    return [...this.users];
  },
};

const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]);