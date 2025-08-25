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
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log(`this is a regular string`);

// const age = 15;
// if (age >= 18) {
//     console.log(`Sarah can start driving license`);
// } else {
//     const yearsleft = 18 - age;
//     console.log(`Sarah is too young, Wait anotther ${yearsleft} years`);
// }

// // Truthy and falsy value
// console.log(Boolean (0));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;

// if (money) {
//     console.log(`dont spend it all`);
// } else {
//     console.log(`go get a job`);
// }

// let height = 0;

//  if (height) {
//     console.log(`YAY your height is defined`);
//  } else {
//     console.log(`Height is undefined`);
//  }

//  if (height !== undefined) {
//     console.log(`Height is defined`);
//  }

//  const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI is ${BMIMark} and its greater than John's ${BMIJohn} `);
// } else {
//     console.log(`John's BMI ${BMIJohn} is less than Mark's BMI ${BMIMark}`);
// }

////////////////////////////////////////////////////// Type Conversion and Coercion

// Manual Type Conversion 

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // Auto Type Coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");
// console.log("23" > "18");

// // Guess the output

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// Exercise 1

// console.log("5" + 2);  your guess: 7
// console.log("5" - 2);  your guess: 3
// console.log("5" * 2);  your guess: 10
// console.log("5" / 2);  your guess: 2.5

// const userAge = "25";
// const userScore = 95; 

// my code

// console.log("5" + 2);
// console.log("5" - 2);    
// console.log("5" * 2);
// console.log("5" / 2);
// const userAge1 = "25"; 
// const userScore1 = 95; 

// const ageAsNumber = Number(userAge1);

// const scoreAsString = String(userScore1);

// console.log(ageAsNumber); 
// console.log(scoreAsString); 

// This calculator has a bug - fix it!

// const num3 = prompt("First number:");
// const num4 = prompt("Second number:");

// const sum1 = Number(num3) + Number(num4);

// console.log(`Sum: ${sum1}`);

// my code
// const num1 = Number(prompt("First number:")); 
// const num2 = Number(prompt("Second number:")); 
// const sum = num1 + num2; 
// console.log(`Sum: ${sum}`);

// ////////////////////////////////////
// // Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18); 
// console.log("18" == 18); 
// console.log(18 === 18);

// console.log("0" == 0); 
// console.log(0 == false); 
// console.log("0" == false);
// console.log(null == undefined); 

// console.log("" == 0); 
// console.log("   " == 0); 

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// Test these comparisons - predict first, then run:

// Exercise 1

// console.log(5 === "5"); // Your guess: false
// console.log(5 == "5"); // Your guess: ture
// console.log(true === 1); // Your guess: false
// console.log(true == 1); // Your guess: true
// console.log(false === 0); // Your guess: false
// console.log(false == 0); // Your guess: true

// Exercise 2

// This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");

// // Bugs: using == instead of ===
// if (username == "admin" && password == "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// Fix using strict equality
// Your code here...

// const username1 = prompt("Username:");
// const password2 = prompt("Password:");

// if (username1 === "admin" && password2 === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

////////////////////////////////////
// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision); 
// console.log(!hasDriversLicense);

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const age1 = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age1 >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Exercise 1
// const age2 = 21; 
// const hasID = true; 
// const isVIP = false; 

// if (age2 >= 18 && hasID) {
//   console.log("You are allowed to enter the club");
// } else {
//   console.log("You are not allowed to enter the club"); 
// }

// // Exercise 2

// // Create a weather advisor:
// const temperature = 23;
// const isRaining = false;
// const isWindy = true;

// // Your code here...

// if (temperature >= 20 && !isRaining && isWindy) {
//   console.log("Nice day for a walk");
// } else {
//   console.log("Stay inside");
// }

// ///////////////////////////////////
// // The Conditional (Ternary) Operator

// const age = 23;

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// Ternary in Template Literals (Super Powerful!)

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// When to Use Ternary vs if/else

// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;


// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// }

// Convert these if/else to ternary operators:

// Exercise 1

// 1. Login status
const isLoggedIn = true;
let welcomeMessage;
if (isLoggedIn) {
  welcomeMessage = "Welcome back!";
} else {
  welcomeMessage = "Please sign in";
}
// Ternary version: 

const LoggedIn = true;
const welcomeMess = LoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMess); 

// 2. Price with discount
const isPremium = false;
let price;
if (isPremium) {
  price = 100 * 0.8; // 20% discount
} else {
  price = 100;
}
// Ternary version:
const isPrem = false;
const price1 = isPrem ? 100 * 0.8 : 100;
console.log(price1);

//Exercise 2

// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// Create messages like:
// "Your score: 85 (Passed/Failed)"
// "Weather is sunny (Great for outdoor activities/Stay inside)"
// "Battery: 15% (Low battery warning/Battery OK)"

// Your code here...
const scoreMessage = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
console.log(scoreMessage);

const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
console.log(weatherMessage); 

const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;
console.log(batteryMessage);

// FInal Challenge

////////////////////////////////////// Coding Challenge #4
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
const totalValue2 = bill2 + tip2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${totalValue2}`);

const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;
const totalValue3 = bill3 + tip3;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${totalValue3}`);

// JavaScript Fundamentals - Hour 4

////////////////////////////////////////////////////// Type Conversion and Coercion

// Manual Type Conversion 

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // Auto Type Coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");
// console.log("23" > "18");

// // Guess the output

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// Exercise 1

// console.log("5" + 2);  your guess: 7
// console.log("5" - 2);  your guess: 3
// console.log("5" * 2);  your guess: 10
// console.log("5" / 2);  your guess: 2.5

// const userAge = "25";
// const userScore = 95; 

// my code

// console.log("5" + 2);
// console.log("5" - 2);    
// console.log("5" * 2);
// console.log("5" / 2);
// const userAge1 = "25"; 
// const userScore1 = 95; 

// const ageAsNumber = Number(userAge1);

// const scoreAsString = String(userScore1);

// console.log(ageAsNumber); 
// console.log(scoreAsString); 

// This calculator has a bug - fix it!

// const num3 = prompt("First number:");
// const num4 = prompt("Second number:");

// const sum1 = Number(num3) + Number(num4);

// console.log(`Sum: ${sum1}`);

// my code
// const num1 = Number(prompt("First number:")); 
// const num2 = Number(prompt("Second number:")); 
// const sum = num1 + num2; 
// console.log(`Sum: ${sum}`);

// ////////////////////////////////////
// // Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18); 
// console.log("18" == 18); 
// console.log(18 === 18);

// console.log("0" == 0); 
// console.log(0 == false); 
// console.log("0" == false);
// console.log(null == undefined); 

// console.log("" == 0); 
// console.log("   " == 0); 

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// Test these comparisons - predict first, then run:

// Exercise 1

// console.log(5 === "5"); // Your guess: false
// console.log(5 == "5"); // Your guess: ture
// console.log(true === 1); // Your guess: false
// console.log(true == 1); // Your guess: true
// console.log(false === 0); // Your guess: false
// console.log(false == 0); // Your guess: true

// Exercise 2

// This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");

// // Bugs: using == instead of ===
// if (username == "admin" && password == "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// Fix using strict equality
// Your code here...

// const username1 = prompt("Username:");
// const password2 = prompt("Password:");

// if (username1 === "admin" && password2 === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

////////////////////////////////////
// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision); 
// console.log(!hasDriversLicense);

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const age1 = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age1 >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Exercise 1
// const age2 = 21; 
// const hasID = true; 
// const isVIP = false; 

// if (age2 >= 18 && hasID) {
//   console.log("You are allowed to enter the club");
// } else {
//   console.log("You are not allowed to enter the club"); 
// }

// // Exercise 2

// // Create a weather advisor:
// const temperature = 23;
// const isRaining = false;
// const isWindy = true;

// // Your code here...

// if (temperature >= 20 && !isRaining && isWindy) {
//   console.log("Nice day for a walk");
// } else {
//   console.log("Stay inside");
// }

// ///////////////////////////////////
// // The Conditional (Ternary) Operator

// const age = 23;

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// Ternary in Template Literals (Super Powerful!)

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// When to Use Ternary vs if/else

// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;


// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// }

// Convert these if/else to ternary operators:

// Exercise 1

// 1. Login status
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }
// // Ternary version: 

// const LoggedIn = true;
// const welcomeMess = LoggedIn ? "Welcome back!" : "Please sign in";
// console.log(welcomeMess); 

// // 2. Price with discount
// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8; // 20% discount
// } else {
//   price = 100;
// }
// // Ternary version:
// const isPrem = false;
// const price1 = isPrem ? 100 * 0.8 : 100;
// console.log(price1);

// //Exercise 2

// // Create smart responses using ternary in template literals:
// const score = 85;
// const weather = "sunny";
// const battery = 15; // percentage

// // Create messages like:
// // "Your score: 85 (Passed/Failed)"
// // "Weather is sunny (Great for outdoor activities/Stay inside)"
// // "Battery: 15% (Low battery warning/Battery OK)"

// // Your code here...
// const scoreMessage = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
// console.log(scoreMessage);

// const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// console.log(weatherMessage); 

// const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;
// console.log(batteryMessage);

// // FInal Challenge

// ////////////////////////////////////// Coding Challenge #4
// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const totalValue = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);

// const bill2 = 40;
// const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
// const totalValue2 = bill2 + tip2;
// console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${totalValue2}`);

// const bill3 = 430;
// const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;
// const totalValue3 = bill3 + tip3;
// console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${totalValue3}`);
