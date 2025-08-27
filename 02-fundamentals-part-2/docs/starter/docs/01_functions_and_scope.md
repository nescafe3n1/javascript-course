## 🎯 What You'll Learn Today

By the end of this hour, you'll be able to:

- Create function declarations and expressions
- Use parameters and arguments to make functions flexible
- Return values from functions for reusable calculations
- Understand function scope and variable accessibility
- Build your first function-based calculator
- Apply functions to solve real-world challenges

## 🔄 Quick Review: Part 1 Foundation

Before we start, make sure you remember:

- Variables: `let`, `const`, data types
- Operators: math, comparison, logical
- Conditionals: if/else statements
- Template literals: backticks and `${}`
- Console and browser debugging

**Ready to organize your code like a professional? Let's learn functions!**

## 🛠️ Setup Your Part 2 Environment

### Step 1: Add Part 2 to Your Course

1. **Download Part 2 zip file** (provided by instructor)
2. **Extract the contents** to get `02-fundamentals-part-2` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   └── 02-fundamentals-part-2/     (new Part 2 folder)
   ```

### Step 2: Open Part 2 in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/02-fundamentals-part-2/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..

# Add the new Part 2 folder
git add 02-fundamentals-part-2/
git commit -m "feat: add Part 2 starter files and documentation"
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
02-fundamentals-part-2/
└── starter/
    ├── index.html
    ├── script.js
    ├── README.md
    └── docs/
        ├── 01_functions_and_scope.md
        ├── 02_arrays_and_data_manipulation.md
        ├── 03_objects_and_data_structures.md
        └── 04_dom_manipulation_and_interactivity.md
```

### Step 5: Test Your Setup

**Add this to `script.js`:**

```javascript
console.log("Part 2: Functions ready!");
```

**Verify it works:**

- Open `index.html` in browser
- Press F12 for Developer Tools
- Check Console tab
- Should see: "Part 2: Functions ready!"

## 📦 Functions: Your Reusable Code Blocks

Think of functions as custom tools in your toolkit. Instead of writing the same code over and over, functions let you write it once and use it everywhere!

### Function Declarations

```javascript
////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function declaration
function logger() {
  console.log("My name is Jonas");
}

// Calling / running / invoking the function
logger();
logger();
logger();
```

**Key Points:**

- `function` keyword creates a new function
- `logger` is the function name
- Parentheses `()` mean "run this function"
- You can call it multiple times - that's the power!

### Functions with Parameters

```javascript
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
```

**Understanding Parameters:**

- **Parameters** make functions flexible
- `apples` and `oranges` are like variables inside the function
- `return` sends a value back to whoever called the function
- You can store the returned value in variables

### Why Functions Matter

**Without functions - repetitive code:**

```javascript
const juice1 = `Juice with 5 apples and 0 oranges.`;
const juice2 = `Juice with 2 apples and 4 oranges.`;
const juice3 = `Juice with 3 apples and 2 oranges.`;
```

**With functions - reusable code:**

```javascript
const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
```

**Benefits:**

- **DRY Principle** - Don't Repeat Yourself
- **Reusability** - write once, use everywhere
- **Flexibility** - parameters make functions adaptable

## 🎯 Your Turn: Practice Basic Functions

### Exercise 1: Personal Greeting

```javascript
// Create your own function:
// 1. Function name: greetStudent
// 2. Parameter: studentName
// 3. Return: 'Hello [name], welcome to JavaScript!'
// 4. Call it with your name and log the result

// Your code here...
```

### Exercise 2: Simple Calculator

```javascript
// Create these functions:
// 1. addNumbers(a, b) - returns a + b
// 2. multiplyNumbers(a, b) - returns a * b
// 3. Test them with different values

// Your code here...
```

## 🔧 Function Expressions & Advanced Concepts

### Function Expressions

```javascript
////////////////////////////////////
// Function Expressions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge(1991);
console.log(age1);
```

**Key Differences:**

- Function stored in a variable
- Anonymous function (no name after `function` keyword)
- Must be defined before use

### Parameters vs Arguments

```javascript
function calcAge(birthYear, currentYear) {
  // Parameters
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge(1991, 2037); // Arguments
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);
```

**Remember:**

- **Parameters** - placeholders in function definition
- **Arguments** - actual values you pass when calling

### Handling Missing Parameters

```javascript
function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
console.log(introduce("Sarah")); // Missing parameters become undefined
```

## 🎯 Your Turn: Practice Function Expressions

### Exercise: Restaurant Bill Calculator

```javascript
// Create function expressions for:
// 1. calculateTip(bill, tipPercent) - returns tip amount
// 2. getTotal(bill, tip) - returns bill + tip
// 3. Chain them together

// Test with: Bill $100, tip 15%
// Expected: Tip $15, Total $115

// Your code here...
```

---

## 🔄 Return Values & Function Scope

### Understanding Return

```javascript
////////////////////////////////////
// Return Values and Scope

function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); // Using one function inside another!
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
```

**Return Value Rules:**

- Return stops function execution immediately
- Functions can call other functions
- Return values can be used in calculations
- Conditional returns handle different scenarios

### Function Scope

```javascript
// Global scope
const globalVar = "I am global";

function testScope() {
  // Function scope
  const localVar = "I am local";
  console.log(globalVar); // Can access global
  console.log(localVar); // Can access local
}

testScope();
// console.log(localVar); // Error! Can't access local from outside
console.log(globalVar); // Works fine
```

### Practical Scope Example

```javascript
const userName = "Jonas"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; // Local to function
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));
// console.log(message); // Error - message is local to function
```

**Scope Rules:**

- **Global variables** - accessible everywhere
- **Local variables** - only accessible inside their function
- **Functions can access global variables**
- **Outside code cannot access function variables**

## 🎯 Your Turn: Practice Return Values and Scope

### Exercise: Temperature Converter System

```javascript
// Build a temperature converter:
// 1. celsiusToFahrenheit(celsius) - returns fahrenheit
// 2. fahrenheitToCelsius(fahrenheit) - returns celsius
// 3. describeTemperature(temp, unit) - returns description:
//    - 'Hot' (>30°C or >86°F)
//    - 'Warm' (20-30°C or 68-86°F)
//    - 'Cool' (10-20°C or 50-68°F)
//    - 'Cold' (<10°C or <50°F)

// Test with different temperatures and units
// Your code here...
```

## 🏆 Coding Challenge #1: Function Calculator

Time for your first real function challenge! You'll build a gymnastics team competition calculator using professional functions.

### The Challenge

**Back to the two gymnastics teams, the Dolphins and the Koalas! There's a new gymnastics discipline.**

Each team competes 3 times, and the average of the 3 scores is calculated. A team only wins if it has at least **DOUBLE** the average score of the other team. Otherwise, no team wins!

**Your Tasks:**

1. Create a function `calcAverage` to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function `checkWinner` that determines the winner
4. Use your functions to determine the winner for different test data

**Test Data 1:** Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49  
**Test Data 2:** Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

### Your Solution Space

```javascript
////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  // Your code here
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  // Your code here
  // Remember: team needs DOUBLE the score to win
  // Use template literals for nice output
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
```

### Expected Output Examples

- "Dolphins win (60.0 vs. 56.0)"
- "Koalas win (84.7 vs. 60.0)"
- "No team wins! Dolphins: 50.5, Koalas: 55.2"

## ✅ Your Complete Hour 1 Code

By the end of Hour 1, your `script.js` should include:

```javascript
// JavaScript Fundamentals Part 2 - Hour 1
```

## 📊 Save Your Progress with Git

Time to commit your function mastery!

```bash
git add .
git commit
```

**📝 Copy this commit message:**

```
feat: add functions with parameters and return values

- Implement function declarations and expressions
- Add parameters and arguments for flexible functions
- Create return values for reusable calculations
- Establish function scope and variable accessibility
- Complete gymnastics team calculator challenge with professional function organization
```

```bash
git push origin main
```

Your function skills are now in your portfolio!

## 🔧 Troubleshooting

### Function not defined error?

- Check spelling of function name
- Make sure function is declared before calling it
- For function expressions, define before use

### Return vs console.log confusion?

- `console.log` displays value (for debugging)
- `return` sends value back (for using in other code)
- Use `return` when you want to use the result elsewhere

### Scope errors?

- Variables inside functions can't be accessed outside
- Global variables can be accessed inside functions
- Each function has its own local scope

### Parameters not working?

- Check that you're passing the right number of arguments
- Missing arguments become `undefined`
- Parameters are like local variables inside the function

## 🎯 Check Your Understanding

Before moving to Hour 2, make sure you can:

- [ ] Create function declarations and expressions
- [ ] Use parameters to make functions flexible
- [ ] Return values from functions
- [ ] Understand the difference between global and local scope
- [ ] Call functions and use their return values
- [ ] Complete the gymnastics challenge successfully

### Quick Quiz:

1. What's the difference between parameters and arguments?
2. What happens when you don't provide all arguments to a function?
3. Can you access a variable declared inside a function from outside it?
4. What does the `return` statement do to function execution?
5. Why are functions better than repeating the same code?

## 🚀 Next Up: Hour 2

Get ready for Hour 2 where you'll learn:

- Creating and accessing arrays
- Array methods for adding and removing elements
- Looping through arrays with your new function skills
- Building a student grade management system

**You're now thinking in terms of reusable functions - that's real developer thinking!**

## 📚 Key Concepts Summary

| Concept                  | Purpose                         | Example                    |
| ------------------------ | ------------------------------- | -------------------------- |
| **Function Declaration** | Create reusable code blocks     | `function name() {}`       |
| **Parameters**           | Make functions flexible         | `function calc(a, b)`      |
| **Arguments**            | Values passed to functions      | `calc(5, 10)`              |
| **Return**               | Send values back from functions | `return result;`           |
| **Function Expression**  | Store function in variable      | `const fn = function() {}` |
| **Scope**                | Where variables can be accessed | Global vs Local            |

**Remember: Functions are the building blocks of professional JavaScript. You're now writing code like a real developer!**
