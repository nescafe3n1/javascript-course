## 🎯 What You'll Learn Today

By the end of this hour, you'll be able to:

- Create beautiful strings with template literals (backticks)
- Make intelligent decisions with if/else statements
- Understand truthy and falsy values in JavaScript
- Upgrade your BMI calculator with smart messages
- Build programs that respond to different conditions

## 🔄 Quick Review: Hour 2

Before we start, make sure you remember:

- Math operators: `+`, `-`, `*`, `/`, `**`
- Assignment shortcuts: `+=`, `++`, `--`
- Comparisons: `>`, `<`, `>=`, `<=`
- BMI Calculator working

**Ready to make your programs talk and think? Let's go!**

## 🔤 From Messy Strings to Beautiful Templates

### The Old Way: String Concatenation (Painful!)

```javascript
////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
```

**Problems with the old way:**

- Lots of `+` signs everywhere
- Managing spaces is annoying
- Quotes get confusing
- Parentheses needed for calculations

### The Modern Way: Template Literals (Beautiful!)

```javascript
// The modern way - ES6 Template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
```

**Why template literals are amazing:**

- Use backticks (`) instead of quotes
- Variables inside `${variable}` placeholders
- No more `+` signs or space management
- Much cleaner and readable!

### Template Literal Superpowers

```javascript
// Any expression works inside ${}
console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`); // true

// You can use backticks for any string
console.log(`Just a regular string...`);
```

### Multiline Strings Made Easy

```javascript
// Old way - painful
console.log(
  "String with \n\
multiple \n\
lines"
);

// New way - natural
console.log(`String
multiple
lines`);
```

**🔑 Key Points:**

- **Backticks (`)** are above the Tab key
- **${expression}** can contain any JavaScript expression
- **Multiline strings** work naturally
- **Professional and modern** approach

## 🎯 Your Turn: Practice Template Literals

### Exercise 1: Personal Introduction

```javascript
// Create variables for:
const myName = ""; // Your name
const myAge = 0; // Your age
const myJob = ""; // Your job/student status
const currentYear = 2024;

// Use template literals to create:
// "Hi, I'm [name], a [age] year old [job]!"
// Log it to the console
```

### Exercise 2: Math in Templates

```javascript
// Create a template literal that:
// 1. Calculates your birth year: currentYear - myAge
// 2. Shows a calculation: 10 * 5
// 3. Includes a comparison: myAge >= 18
// Example: "Born in ${}, 10*5 = ${}, Adult: ${}"
```

## 🤔 Making Decisions with if/else

Programs become intelligent when they can make decisions based on conditions!

### Basic if/else Structure

```javascript
////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
```

**How it works:**

1. `if` keyword starts the decision
2. Condition in parentheses (must be true/false)
3. Code block in curly braces `{}`
4. `else` is optional - alternative path

### Variable Assignment with Decisions

```javascript
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); // 21
```

### Real-World Decision Making

```javascript
const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}
```

**🔑 Key Points:**

- **Control structures** change program flow
- **Boolean conditions** must evaluate to true/false
- **Block scope** - variables inside `{}` have limited scope
- **Real-world applications** - age verification, permissions, games

## 🎯 Your Turn: Practice if/else

### Exercise 1: Grade Calculator

```javascript
// Create a grade calculator:
const testScore = 78; // Change this to test different scores

// Use if/else to determine:
// 90+: "Excellent! Grade A"
// 80-89: "Good job! Grade B"
// 70-79: "Not bad! Grade C"
// 60-69: "You passed! Grade D"
// Below 60: "You failed! Study harder"

// Your code here...
```

### Exercise 2: Age Verification

```javascript
// Create an age verification system:
const userAge = 20; // Change this to test

// Rules:
// - 18+: "Welcome! You can access all content"
// - 13-17: "Welcome! Restricted content only"
// - Under 13: "Sorry, you're too young"

// Your code here...
```

## ✨ Truthy and Falsy Values (JavaScript's Secret!)

JavaScript has a secret: not everything that looks true or false is actually true or false!

### The 5 Falsy Values

**In JavaScript, only 5 values are falsy:**

```javascript
////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)
```

**Everything else is truthy!**

### Practical Applications

```javascript
const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

// Test with money = 0 - what happens?
```

### Common Gotcha - Be Careful!

```javascript
let height = 0; // This is a valid height!
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); // This runs even though height IS defined!
}

// Better approach for checking if defined:
if (height !== undefined) {
  console.log("Height is defined");
}
```

**🔑 Key Points:**

- **Falsy values:** `0`, `''`, `undefined`, `null`, `NaN` - memorize these!
- **Everything else is truthy**
- **Common bugs:** `0` and `''` are valid but falsy
- **Be explicit** when you need to check for specific values

## 🎯 Your Turn: Practice Truthy/Falsy

### Exercise: Truth Detector

```javascript
// Test these values with Boolean() and if statements:
const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// For each value, log:
// 1. The value itself
// 2. Boolean(value)
// 3. Whether it passes an if statement

// Example for first value:
console.log("Value:", 0);
console.log("Boolean:", Boolean(0));
if (0) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}
```

## 🏆 Coding Challenge #2: BMI Comparison

Time to upgrade your BMI calculator! Now it will intelligently tell users who has the higher BMI.

### The Challenge

**Use the BMI example from Challenge #1, and improve it:**

1. **Print a nice output to the console, saying who has the higher BMI.**
   The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. **Use a template literal to include the BMI values in the outputs.**
   Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

**HINT: Use an if/else statement 😉**

### Your Solution Space

```javascript
////////////////////////////////////
// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
```

## ✅ Your Complete Hour 3 Code

By the end of Hour 3, your `script.js` should include:

```javascript
// JavaScript Fundamentals - Hour 3
// Insert your complete code here
```

## 📊 Save Your Progress with Git

Time to commit your intelligent BMI calculator!

```bash
git add .
git commit
```

**📝 Copy this commit message:**

```
feat: add conditional statements and string literals

- Implement ES6 template literals with backticks for elegant string formatting
- Add if/else control structures for decision-making logic
- Create truthy/falsy value understanding with practical examples
- Complete BMI Comparison challenge with intelligent output messages
- Combine mathematical operations with conditional logic for real-world applications
```

```bash
git push origin main
```

🎉 **Your intelligent BMI calculator is now live in your portfolio!**

## 🔧 Troubleshooting

### Template literals not working?

- [ ] Are you using backticks (`) not regular quotes (' or ")?
- [ ] Is your syntax `${variable}` correct?
- [ ] Is the backtick key above your Tab key?
- [ ] Are you putting statements (like if/else) inside `${}`? Only expressions work!

### if statement always runs the same block?

- Check your condition - are you using `=` instead of `===`?
- Is your condition actually returning true/false?
- Are your curly braces `{}` in the right places?

### Truthy/falsy confusion?

- Remember: only `0`, `''`, `undefined`, `null`, `NaN` are falsy
- Everything else (including `[]` and `{}`) is truthy
- Use explicit comparisons when you need specific checks

### BMI Challenge not working?

- Make sure your if/else condition is `BMIMark > BMIJohn`
- Check your template literal syntax: `${variable}`
- Verify your BMI calculations from Challenge #1

## 🎯 Check Your Understanding

Before moving to Hour 4, make sure you can:

- [ ] Create template literals with backticks and `${}`
- [ ] Write if/else statements for decision-making
- [ ] List the 5 falsy values in JavaScript
- [ ] Build intelligent programs that respond to conditions
- [ ] Combine strings, math, and logic in real applications

### Quick Quiz:

1. What are the 3 main advantages of template literals over string concatenation?
2. What happens if the condition in an if statement is falsy?
3. Name all 5 falsy values in JavaScript
4. How do you check if a variable is not undefined?
5. What's the difference between `'5' == 5` and `'5' === 5`? (Preview for Hour 4!)

## 🚀 Next Up: Hour 4

Get ready for Hour 4 where you'll learn:

- Type conversion vs coercion (explicit vs automatic)
- Equality operators (=== vs ==) and why === is safer
- Logical operators (&&, ||, !) for complex conditions
- Ternary operator for elegant conditional expressions
- Final challenge combining everything!

**You're becoming a true programmer who builds intelligent applications!**

## 📚 Key Concepts Summary

| Concept                  | Syntax                      | Purpose                     | Example                      |
| ------------------------ | --------------------------- | --------------------------- | ---------------------------- |
| **Template Literals**    | `` `text ${var}` ``         | Clean string formatting     | `` `Hello ${name}!` ``       |
| **if/else**              | `if (condition) {} else {}` | Decision making             | `if (age >= 18) {}`          |
| **Truthy/Falsy**         | 5 falsy values              | Implicit boolean conversion | `if (value) {}`              |
| **String Concatenation** | `'text' + variable`         | Old way (avoid)             | `'Hello ' + name`            |
| **Boolean Conversion**   | `Boolean(value)`            | Explicit true/false         | `Boolean(0)` returns `false` |

**Remember: Your programs can now think and communicate beautifully! You're building real applications.** 💪
