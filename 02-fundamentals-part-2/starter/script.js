 // console.log("Fundamentals Part 2");

// Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// Function Declaration 
// function logger () {
//     console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor (5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor (2, 4);
// console.log(appleOrangeJuice);

// // DRY - Dont Repeat Yourself

////////////////////////////////////////////////////////////////////////
// Function Expressions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age1 = calcAge(2004);
// console.log(age1);

// Parameters

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

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function countPassing(grades, passingGrade) {
//   let count = 0;
//    for (let i = 0; i <grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

/////////////////////////////////////////////////////////////////

// Part 2 - Hour 3

// The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);

// // Objects - Creation with Object Literal Syntax
// console.log("=== OBJECTS ===");

// Object literal syntax - curly braces create objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   46,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonasObject = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// // Dot notation - clean and readable
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// // Bracket notation - uses strings
// console.log(jonas["firstName"]);
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // Both notations work for modification
// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// // Objects can grow - add properties after creation
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);

// Exercise 1

// Create your own objects:
// 1. Create a 'book' object with title, author, pages, and isRead properties
// 2. Create a 'playlist' object with name, creator, songs array, and genre
// 3. Access and log different properties using both dot and bracket notation
// 4. Add a new property to each object
// 5. Modify an existing property in each object

// Your code here...

// const book = {
//   title: "The Hitchhiker's Guide to the Galaxy",
//   author: "Douglas Adams",
//   pages: 192,
//   isRead: true,
// };

// const playlist = {
//   name: "Chill Lo-Fi Beats",
//   creator: "MusicLover123",
//   songs: ["Song A", "Song B", "Song C"],
//   genre: "Lo-Fi",
// };

// console.log(`Book Title (dot notation): ${book.title}`);
// console.log(`Playlist Creator (bracket notation): ${playlist["creator"]}`);
// console.log(`Book Pages (dot notation): ${book.pages}`);
// console.log(`Playlist Songs (dot notation): ${playlist.songs}`);
// console.log(`Book isRead (bracket notation): ${book["isRead"]}`);

// book.publisher = "Pan Books";
// playlist["durationInMinutes"] = 60;

// console.log(`Book Publisher: ${book.publisher}`);
// console.log(`Playlist Duration: ${playlist.durationInMinutes} minutes`);

// book.pages = 200; 
// playlist.songs.push("New Song D");

// console.log(`Updated Book Pages: ${book.pages}`);
// console.log(`Updated Playlist Songs: ${playlist.songs.join(", ")}`);

// // Use Arrays for: 
// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Use Objects for:
// // Named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// // Object and Array Combinattion
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// ////////////////////////////////////
// // Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // Method - function inside object
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// // Call methods using dot notation
// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge(jonas.birthYear));

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge()); 
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

// // Exercise 2
// // Create a 'calculator' object:
// // 1. Properties: num1, num2, operator
// // 2. Methods: add(), subtract(), multiply(), divide()
// // 3. Method: calculate() that uses the operator to perform the right operation
// // 4. Method: getResult() that returns a formatted string
// // 5. Use 'this' to access the object's own properties

// // Create a 'calculator' object
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     if (this.num2 === 0) {
//       return "Error: Division by zero is not allowed.";
//     }
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     switch (this.operator) {
//       case "+":
//         return this.add();
//       case "-":
//         return this.subtract();
//       case "*":
//         return this.multiply();
//       case "/":
//         return this.divide();
//       default:
//         return "Error: Invalid operator.";
//     }
//   },

//   getResult: function () {
//     const result = this.calculate();
//     // Return a formatted string
//     return `${this.num1} ${this.operator} ${this.num2} = ${result}`;
//   },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// calculator.operator = "-";
// calculator.num1 = 50;
// calculator.num2 = 25;
// console.log(calculator.calculate());
// console.log(calculator.getResult());

// calculator.operator = "*";
// calculator.num1 = 4;
// calculator.num2 = 7;
// console.log(calculator.calculate());
// console.log(calculator.getResult());

// calculator.operator = "/";
// calculator.num1 = 100;
// calculator.num2 = 10;
// console.log(calculator.calculate());
// console.log(calculator.getResult());


// calculator.num1 = 20;
// calculator.num2 = 0;
// console.log(calculator.calculate());
// console.log(calculator.getResult());

// ////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   addFriend: function (name, status = "active") {
//     this.friends.push({ name: name, status: status });
//     return this.friends.length;
//   },

//   getActiveFriends: function () {
//     const activeFriends = this.friends.filter(friend => friend.status === 'active');
//     return activeFriends.length;
//   },

//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   getSummary: function () {
//     const activeFriendsCount = this.getActiveFriends();
//     const activeStatus = this.isActive ? 'online' : 'offline';
//     const interestsList = this.interests.join(", ");

//     this.calcAge();

//     return `
//     Name: ${this.firstName} ${this.lastName}
//     Age: ${this.age} years old
//     Location: ${this.location}
//     Status: ${activeStatus}
//     Interests: ${interestsList}
//     Friends: ${this.friends.length} total (${activeFriendsCount} active)
//     `;
//   },
// };


// console.log(user.getSummary());

// user.addFriend("Alex", "active");
// console.log(`New friend count: ${user.addFriend("Jess", "inactive")}`);
// console.log(`Active friends count: ${user.getActiveFriends()}`);
// user.toggleStatus();
// console.log(`New status: ${user.isActive ? 'active' : 'inactive'}`);

// console.log(user.getSummary());

// console.log("JavaScript Fundamentals Part 2 - Hour 3 - End");

// Dom Manipulation and interactivity

// querySelector - Most Versatile Method
// const message = document.querySelector(".message");
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);

// document.querySelector(".className");
// document.querySelector("#idName");
// document.querySelector("tagName"); 
// document.querySelector('[type="text"]');
// document.querySelector("div p");

// getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// Exercise 1 Element Selection
// Practice selecting elements:
// 1. Select the element with class 'guess' and log it
// 2. Select the element with ID 'btn' using both querySelector and getElementById
// 3. Select all span elements and log the collection
// 4. Select the first span element and log its textContent
// 5. Experiment with different CSS selectors

// Your code here...

//Method 1: querySelector
// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// const buttonQuery = document.querySelector("#btn");
// // Method 2: getElementById
// const buttonById1 = document.getElementById("btn");
// console.log("Are the two button selections the same?", buttonQuery === buttonById1);
// const allSpans = document.querySelectorAll("span");
// console.log("All span elements:", allSpans);

// const firstSpan = document.querySelector("span");
// console.log("Text content of the first span:", firstSpan.textContent);

// console.log("\n--- More Selector Examples ---");

// const dataInfoElement = document.querySelector("[data-info]");
// console.log("Element with data-info attribute:", dataInfoElement);

// const combinedSelector = document.querySelector(".container#main-container");
// console.log("Element with both class and ID:", combinedSelector);

// const lastListItem = document.querySelector("ul li:last-child");
// console.log("Last list item:", lastListItem);

// // MOdify Element Content
// const message1 = document.querySelector(".message");

// console.log(message1.textContent);
// message1.textContent = "Hello from JavaScript!";

// message1.innerHTML = "<strong>Bold text from JS!</strong>";

// console.log(message1.innerText);

// Input elements use .value property, not textContent
// const input1 = document.querySelector(".guess");

// console.log(input1.value);
// input1.value = "Default text";
// input1.placeholder = "Type here";

// Changing element styles with the style property
// const heading1 = document.querySelector("h1");

// heading1.style.color = "red";
// heading1.style.backgroundColor = "yellow";
// heading1.style.fontSize = "3rem";
// heading1.style.padding = "20px";
// heading1.style.borderRadius = "10px";

// Exercise 2 Content and Style Practice
// Practice content and style manipulation:
// 1. Change the h1 text to your name
// 2. Make the button's background color blue and text white
// 3. Set a placeholder text in the input field
// 4. Change the message text to include HTML bold formatting
// 5. Make the score display larger and a different color

// Your code here...

// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// heading.textContent = "Your Name Here";

// button.style.backgroundColor = "blue";
// button.style.color = "white";
// button.style.padding = "10px 20px";
// button.style.border = "none";
// button.style.borderRadius = "5px";

// input.placeholder = "Type something cool...";

// message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "green";
// scoreValue.style.fontWeight = "bold";

// Click Events
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// // event listener
// element.addEventListener("eventType", function () {
// });

// // w statement:
// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // fire every time user types

// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// // keyboard events

// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// Exercise 3 Event Handling Practice
// Practice event listeners:
// 1. Add a click event to the h1 that changes its color
// 2. Create an input event that displays character count as user types
// 3. Add a keydown event that responds to the spacebar
// 4. Make the button change its text when hovered (mouseover event)
// 5. Create a double-click event that does something special

// Your code here...
// Practice event listeners:
// 1. Add a click event to the h1 that changes its color
// 2. Create an input event that displays character count as user types
// 3. Add a keydown event that responds to the spacebar
// 4. Make the button change its text when hovered (mouseover event)
// 5. Create a double-click event that does something special

// Your code here...
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// // 1. Click event on h1
// heading.addEventListener("click", function () {
//   heading.style.color = "purple";
// });

// // 2. Character count display
// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// // 3. Spacebar response
// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// // 4. Hover effect
// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// // 5. Double-click event
// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });

// Code here

// const player1ScoreEl = document.querySelector("#score-1");
// const player2ScoreEl = document.querySelector("#score-2");
// const addBtns = document.querySelectorAll(".btn-add");
// const resetBtn = document.querySelector("#btn-reset");
// const winningScoreInput = document.querySelector("#winning-score");
// const targetScoreEl = document.querySelector(".target");
// const winnerMessageEl = document.querySelector(".winner");
// const winnerNameEl = document.querySelector(".winner-name");
// const playerEls = document.querySelectorAll(".player");
// const gameState = {
//   scores: [0, 0],
//   winningScore: 5,
//   gameActive: true,
// };

// function updateDisplay() {
//   player1ScoreEl.textContent = gameState.scores[0];
//   player2ScoreEl.textContent = gameState.scores[1];
//   targetScoreEl.textContent = gameState.winningScore;
// }

// function checkWinner() {
//   const [score1, score2] = gameState.scores;
//   if (score1 >= gameState.winningScore || score2 >= gameState.winningScore) {
//     gameState.gameActive = false;
//     showWinner();
//   }
// }

// function showWinner() {
//   const [score1, score2] = gameState.scores;
//   winnerMessageEl.classList.remove("hidden");

//   if (score1 > score2) {
//     winnerNameEl.textContent = "Player 1";
//     playerEls[0].classList.add("winner");
//     playerEls[1].classList.add("loser");
//   } else {
//     winnerNameEl.textContent = "Player 2";
//     playerEls[1].classList.add("winner");
//     playerEls[0].classList.add("loser");
//   }
// }

// function resetGame() {
//   gameState.scores = [0, 0];
//   gameState.gameActive = true;
//   updateDisplay();
//   winnerMessageEl.classList.add("hidden");
  
//   playerEls.forEach((playerEl) => {
//     playerEl.classList.remove("winner", "loser");
//   });
// }

// function addPoint(playerIndex) {
//   if (gameState.gameActive) {
//     gameState.scores[playerIndex]++;
//     updateDisplay();
//     checkWinner();
//   }
// }

// addBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => addPoint(index));
// });

// resetBtn.addEventListener("click", resetGame);

// winningScoreInput.addEventListener("input", function (event) {
//   const newWinningScore = parseInt(event.target.value);
//   if (!isNaN(newWinningScore) && newWinningScore > 0) {
//     gameState.winningScore = newWinningScore;
//     updateDisplay();
//     resetGame();
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "1") {
//     addPoint(0);
//   } else if (event.key === "2") {
//     addPoint(1);
//   } else if (event.key === "r") {
//     resetGame();
//   }
// });

// updateDisplay();

// JavaScript Fundamentals Part 2 - Hour 4 - End