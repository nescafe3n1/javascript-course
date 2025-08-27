// // console.log("Fundamentals Part 2");

// // // Functions - Declarations and Expressions
// // console.log("=== FUNCTIONS ===");

// // // Function Declaration 
// // function logger () {
// //     console.log("This function is working");
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor (5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor (2, 4);
// // console.log(appleOrangeJuice);

// // // DRY - Dont Repeat Yourself

// // ////////////////////////////////////////////////////////////////////////
// // // Function Expressions

// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // };

// // const age1 = calcAge(2004);
// // console.log(age1);

// // // Parameters

// // function calcAge2(birthYear, currentYear) {
// //     const age = currentYear - birthYear;
// //     return age;
// // }

// // const myAge = calcAge2(2004, 2025);
// // const someonesAge = calcAge2(2005, 2025);

// // console.log(`I am ${myAge} years old`);
// // console.log(`His age is ${someonesAge} years old`)

// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46));
// // console.log(introduce("Sarah")); 
// // // Missing parameters become undefined

// // function calcAge3 (birthYear) {
// //     return 2037 - birthYear;
// // }

// // function yearsUntilRetirement (birthYear, firstName) {
// //     const age = calcAge3(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years`;
// //     } else {
// //         return `${firstName} has already retired`;
// //     }
// // }

// // console.log(yearsUntilRetirement (2004, "Shem"));
// // console.log(yearsUntilRetirement (2004, "Leueil"));

// // const globalVar = `I am global`;

// // function testScope () {
// //     const localVar = `I am local`;
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();
// // // console.log(localVar);
// // console.log(globalVar);

// // const userName = "Jonas"; 

// // function createWelcomeMessage(user) {
// //   const message = `Welcome back, ${user}!`; 
// //   const timestamp = new Date().toLocaleTimeString();

// //   return `${message} Current time: ${timestamp}`;
// // }

// // console.log(createWelcomeMessage(userName));

// // // Challenge

// // function calcAverage(score1, score2, score3) {
// //     const calcScoreAve = (score1 + score2 + score3) / 3;
// //     return calcScoreAve; 
// // };

// // function checkWinner(aveDolph, aveKoala) {
// //     if (aveDolph > 2 * aveKoala) {
// //         return `Dolphin Wins! (${aveDolph} vs ${aveKoala})`;
// //     } else if (aveDolph < 2 * aveKoala) {
// //         return `Koala  Wins! (${aveKoala} vs ${aveDolph})`;
// //     } else {
// //         return `No team wins! Dolphins: ${avgDolph}, Koalas: ${avgKoala}`;
// //     }
// // }


// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// const studentGrade = 85;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// console.log(`=== ARRAYS ===`);

// const mixed = [`Jonas`, 27, true]
// console.log(mixed);

// const year = new Array (1991, 1994, 2008, 2020);
// console.log(year);

// // access array elements
// console.log(grades[0]);
// console.log(grades[3]);

// console.log(grades.length);

// console.log(grades[0]);
// grades[0] = 99;
// console.log(grades);
// console.log(grades[0]);
// console.log(grades[0]);

// const calcAge = function(birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);
// ages[1] = calcAge (1950);
// console.log(ages);

// // array methods - add elements
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // add items to first
// friends.unshift("John");
// console.log(friends);

// // remove elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf(`Michael`));
// console.log(friends.indexOf(`John`));

// console.log(friends.includes(`Michael`));
// console.log(friends.includes(`John`));

// // Array Iteration - loops

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// const years = [1991, 2007, 1969, 2020];
// // const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // for each

// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade:${average.toFixed(2)}`);

// let passCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passCount++;
// });
// console.log(`${passCount} out of ${grades.length} students passed`);

// Coding Challeng #2

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

function countPassing(grades, passingGrade) {
  let count = 0;
   for (let i = 0; i <grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);