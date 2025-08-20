## 🎯 What You'll Learn Today

By the end of this hour, you'll be able to:

- ✅Perform mathematical operations with JavaScript operators
- Use assignment shortcuts (+=, ++, --) like a pro
- Compare values with comparison operators
- Understand operator precedence and use parentheses
- Build your first real application: BMI Calculator
- Solve practical coding challenges

## 🔄 Quick Review: Hour 1

Before we start, make sure you remember:

- Variables: `let`, `const`, `var` ✅
- Data types: `number`, `string`, `boolean` ✅
- Console: `console.log()` for output ✅
- Browser: F12 opens Developer Tools ✅

**Ready to level up? Let's make JavaScript do math!**

## ➕ Mathematical Operators

JavaScript can do any math you need - from simple addition to complex formulas.

### Basic Math Operations

```javascript
////////////////////////////////////
// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // 46, 19
```

**Key Point:** Subtraction calculates age from birth year!

### All Math Operators

```javascript
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

console.log("Math operations:");
console.log("Addition:", 10 + 5); // 15
console.log("Subtraction:", 20 - 8); // 12
console.log("Multiplication:", 4 * 7); // 28
console.log("Division:", 15 / 3); // 5
console.log("Exponentiation:", 2 ** 3); // 8
```

### String Concatenation (Joining Text)

```javascript
// Math with strings!
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // "Jonas Schmedtmann"

console.log("Hello " + "World" + "!"); // "HelloWorld!"
console.log("I am " + 25 + " years old"); // "I am 25 years old"
```

**Remember:** Plus (+) joins strings together. Notice the space in the middle!

## 🚀 Assignment Operators (Shortcuts!)

Programmers are smart and lazy - we hate typing the same thing twice!

### Basic Assignment

```javascript
////////////////////////////////////
// Assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; // 15
console.log("x starts as:", x);
```

### Assignment Shortcuts

```javascript
x += 10; // Same as: x = x + 10 = 25
console.log("After x += 10:", x);

x *= 4; // Same as: x = x * 4 = 100
console.log("After x *= 4:", x);

x /= 2; // Same as: x = x / 2 = 50
console.log("After x /= 2:", x);
```

### Increment and Decrement

```javascript
x++; // Same as: x = x + 1
console.log("After x++:", x); // 51

x--; // Same as: x = x - 1
x--; // Again: x = x - 1
console.log("After x-- twice:", x); // 49
```

**Quick Reference:**

- `+=` Add to current value
- `-=` Subtract from current value
- `*=` Multiply current value
- `/=` Divide current value
- `++` Add 1
- `--` Subtract 1

## 🎯 Your Turn: Practice Assignment Operators

### Exercise: Score Calculator

```javascript
// Practice assignment operators:
// 1. Create a variable 'score' with value 100
// 2. Add 50 using +=
// 3. Multiply by 2 using *=
// 4. Subtract 25 using -=
// 5. Use ++ twice
// 6. Log the final result (should be 377)

let score = 100;
// Your code here...
```

**Expected result:** 377

## ⚖️ Comparison Operators

Make decisions by comparing values! These always return `true` or `false`.

### Basic Comparisons

```javascript
////////////////////////////////////
// Comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah); // true (46 > 19)
console.log(ageSarah >= 18); // true (19 >= 18)
console.log(ageJonas < 30); // false (46 < 30)

console.log("Number comparisons:");
console.log(25 > 20); // true
console.log(15 < 10); // false
console.log(18 >= 18); // true
console.log(16 <= 15); // false
```

### Storing Comparison Results

```javascript
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge); // true

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder); // true
```

**Important:** Comparisons always return boolean values (`true` or `false`)!

### Complex Comparisons

```javascript
console.log("Complex comparison:");
console.log(now - 1991 > now - 2018); // Same as: ageJonas > ageSarah
```

**How it works:** Math happens first, then comparison!

## 🎯 Your Turn: Practice Comparisons

### Exercise: Age Verification

```javascript
// Create comparison examples:
// 1. Compare your age to 18 (>=)
// 2. Check if 100 is greater than 99
// 3. Store a comparison result in a variable
// 4. Try comparing the result of two calculations

const myAge = 25; // Change this to your age
// Your code here...
```

## 📐 Operator Precedence (Order Matters!)

Just like in math: multiplication before addition!

### Precedence Example

```javascript
////////////////////////////////////
// Operator Precedence
console.log("=== OPERATOR PRECEDENCE ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // true
// Math first: (2037 - 1991) > (2037 - 2018)
// Then compare: 46 > 19 = true
```

### Assignment Precedence

```javascript
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y); // Both are 10

// How it works: 25 - 10 - 5 = 10, then y = 10, then x = 10
```

### Parentheses Override Everything

```javascript
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); // 46, 19, 32.5

// Without parentheses would be wrong:
// ageJonas + ageSarah / 2 = 46 + 9.5 = 55.5 ❌
```

**Golden Rule:** When in doubt, use parentheses!

## 🏆 Coding Challenge #1: BMI Calculator

Time for your first real coding challenge! This BMI calculator could be used in actual fitness or medical apps.

### The Challenge

**Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:**

`BMI = mass / height ** 2` or `BMI = mass / (height * height)`

**(mass in kg and height in meter)**

**Your Tasks:**

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

**TEST DATA 1:** Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

**TEST DATA 2:** Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

**GOOD LUCK! 😀**

### Your Solution Space

```javascript
////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
// 2. Create markHigherBMI variable
// 3. Log results to console
```

## ✅ Your Complete Hour 2 Code

By the end of Hour 2, your `script.js` should include:

```javascript
// JavaScript Fundamentals - Hour 2
// Insert your complete code here
```

## 📊 Save Your Progress with Git

Time to commit your second milestone!

```bash
git add .
git commit
```

**📝 Copy this commit message:**

```
feat: implement operators and expressions

- Add mathematical operators (+, -, *, /, **)
- Implement assignment operators (+=, -=, *=, /=, ++, --)
- Create comparison operators for boolean logic
- Understand operator precedence and parentheses
- Complete BMI Calculator coding challenge with real-world application
```

```bash
git push origin main
```

🎉 **Your BMI calculator is now in your portfolio!**

## 🔧 Troubleshooting

### Math operations giving unexpected results?

- Check operator precedence - multiplication/division before addition/subtraction
- Use parentheses to make your intentions clear
- Example: `2 + 3 * 4` = 14, not 20

### Assignment operators not working?

- Common mistake: `x =+ 10` instead of `x += 10`
- Make sure the operator order is correct

### BMI calculation seems wrong?

- Check the formula: `mass / height ** 2`
- Make sure you're using the right variables
- Verify your test data matches the challenge

### Getting NaN (Not a Number)?

- Check if you're doing math with strings
- Make sure all variables have number values
- Use `console.log(typeof variable)` to check data types

## 🎯 Check Your Understanding

Before moving to Hour 3, make sure you can:

- [ ] Use all mathematical operators (+, -, \*, /, \*\*)
- [ ] Apply assignment shortcuts (+=, -=, ++, --)
- [ ] Compare values with comparison operators
- [ ] Understand when to use parentheses
- [ ] Build a working BMI calculator
- [ ] Debug mathematical expressions

### Quick Quiz:

1. What does `x += 5` mean?
2. What's the result of `2 + 3 * 4`?
3. How do you calculate 2 to the power of 3?
4. What type of value do comparison operators return?
5. Why use parentheses in `(a + b) / 2`?

## 🚀 Next Up: Hour 3

Get ready for Hour 3 where you'll learn:

- String templates for beautiful output
- if/else statements for making decisions
- Boolean logic and truthy/falsy values
- Improving your BMI calculator with intelligent messages

**You're now ready to make your programs smart and interactive!**

## 📚 Key Concepts Summary

| Operator Type  | Symbols                  | Purpose        | Example       |
| -------------- | ------------------------ | -------------- | ------------- |
| **Math**       | `+`, `-`, `*`, `/`, `**` | Calculations   | `2 ** 3` = 8  |
| **Assignment** | `+=`, `-=`, `*=`, `/=`   | Shortcuts      | `x += 5`      |
| **Increment**  | `++`, `--`               | Add/subtract 1 | `count++`     |
| **Comparison** | `>`, `<`, `>=`, `<=`     | Compare values | `age >= 18`   |
| **Precedence** | `()`                     | Control order  | `(a + b) / 2` |

**Remember: Operators are the building blocks for solving real problems. You just built your first calculator!** 💪
