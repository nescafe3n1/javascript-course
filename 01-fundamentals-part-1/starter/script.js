// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===")

// let firstName = "Jonas";
// console.log(firstName);

// let age =30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI)

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

// let ageNow = 25;
// ageNow = 26;


// console.log("=== DATATYPES ===");

// let weight = 45;
// console.log(weight);
// console.log(typeof age);

// let username = "Shem";
// console.log(username);
// console.log(typeof username);

// let javascriptisFun = true;
// console.log(javascriptisFun);
// console.log(typeof javascriptisFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now i am a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// console.log("=== Exercises ===");

// console.log(" Exercise 1 ");

// const nameFirst = "Leueil Shem";
// console.log(nameFirst);

// let myAge = 21;
// console.log(myAge);

// const favNum = 21;
// console.log(favNum)

// const ILikeJavaScript = true;
// console.log(ILikeJavaScript)

///////////////////////////////////////////////

// Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");

//  const now = 2037;
//  const ageJonas = now - 1991;
//  const ageSarah = now - 2018;
//  console.log(ageJonas, ageSarah);

//  console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//  console.log("Math Operations");
//  console.log("Addition:", 10 + 5);
//  console.log("Subtraction:", 20 - 8);
//  console.log("Multiplication:", 4 * 7);
//  console.log("Division:", 15 / 3);
//  console.log("Exponentiation:", 2 ** 3);

//  // String concat

//  const name1 = "Jonas";
//  const name2 = "Doe";
//  console.log(name1 + " " + name2);

//  console.log("hello" + " " + "world" + "!");
//  console.log("I am" + " " + 25 + " " + "years old");

//  // Assignment operators
//  console.log("=== ASSIGNMENT OPERATORS ===");
 
//  let x = 10 + 5;
//  console.log("x starts as:", x);

//  x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// // Increment / Decrement

// x++;
// console.log("x starts as", x);

// x--;
// console.log("x starts as", x);

// ///////////////////////////////////////

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison: ");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= ageJonas);
// console.log(ageJonas < 30);

// console.log("Number comparison:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("sarah is adult", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older");

// console.log("Complex Comparison");

// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);

// Opeartor Precedence

// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// const bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);
// // 2. Create markHigherBMI variable
// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);
// // 3. Log results to console
// console.log(bmiMark, bmiJohn, markHigherBMI);

/////////////////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`this is a regular string`);

const age = 15;
if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young, Wait anotther ${yearsleft} years`);
}

// Truthy and falsy value
console.log(Boolean (0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
    console.log(`dont spend it all`);
} else {
    console.log(`go get a job`);
}

let height = 0;

 if (height) {
    console.log(`YAY your height is defined`);
 } else {
    console.log(`Height is undefined`);
 }

 if (height !== undefined) {
    console.log(`Height is defined`);
 }

 const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is ${BMIMark} and its greater than John's ${BMIJohn} `);
} else {
    console.log(`John's BMI ${BMIJohn} is less than Mark's BMI ${BMIMark}`);
}
 

