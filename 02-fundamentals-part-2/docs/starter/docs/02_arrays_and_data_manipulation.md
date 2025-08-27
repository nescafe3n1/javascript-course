## What You'll Learn Today

By the end of this hour, you'll be able to:

- Create arrays and access elements by index
- Use essential array methods: push, pop, shift, unshift
- Iterate through arrays with for loops and forEach
- Apply functions to work with array data
- Build a student grade management system
- Understand when to use arrays vs individual variables

## Quick Review: Hour 1 Foundation

Before we start, make sure you remember:

- Function declarations and expressions
- Parameters, arguments, and return values
- Function scope (global vs local variables)
- How to call functions and use their results

**Ready to manage collections of data? Let's learn arrays!**

## Why Arrays Matter

Imagine managing grades for 30 students. Would you create 30 separate variables?

**Without arrays - not scalable:**

```javascript
const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;
// ... 27 more variables?
```

**With arrays - scalable and powerful:**

```javascript
const grades = [85, 92, 78, 96, 88];
console.log(grades);
```

**Arrays solve the problem of managing collections of related data.**

## Array Creation and Access

### Creating Arrays

```javascript
////////////////////////////////////
// Arrays - Creation and Access
console.log("=== ARRAYS ===");

// Array creation
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Different data types in same array
const mixed = ["Jonas", 27, true, friends];
console.log(mixed);

// Alternative way (but literal notation is preferred)
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
```

### Accessing Array Elements

**Arrays use zero-based indexing - very important!**

```javascript
// Array indexing starts at 0
console.log(friends[0]); // Michael (first element)
console.log(friends[1]); // Steven (second element)
console.log(friends[2]); // Peter (third element)

// Array length property
console.log(friends.length); // 3

// Get the last element
console.log(friends[friends.length - 1]); // Peter

// Changing array elements
friends[1] = "Jay";
console.log(friends); // ['Michael', 'Jay', 'Peter']
```

**Key Points:**

- **Zero-based indexing**: First element is index 0, not 1
- **Length property**: `array.length` tells you how many elements
- **Mutable**: You can change elements even in const arrays
- **Last element**: Use `array[array.length - 1]`

### Arrays with Expressions

```javascript
// Arrays can contain expressions and function calls
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991];
console.log(jonas);

// Using our calcAge function from Hour 1
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
console.log(ages);
```

## Your Turn: Practice Array Basics

### Exercise 1: Personal Arrays

```javascript
// Create your own arrays:
// 1. Create an array 'hobbies' with 3 of your hobbies
// 2. Create an array 'numbers' with 5 different numbers
// 3. Log the first and last element of each array
// 4. Change the second element in hobbies array
// 5. Create an array that includes your name, age, and a boolean

// Your code here...
```

## Essential Array Methods

Arrays come with built-in methods - functions that can add, remove, and manipulate elements.

### Adding Elements

```javascript
////////////////////////////////////
// Array Methods - Adding Elements

const friends = ["Michael", "Steven", "Peter"];

// Push - add to end
const newLength = friends.push("Jay");
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4 (push returns new length)

// Unshift - add to beginning
friends.unshift("John");
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
```

### Removing Elements

```javascript
// Pop - remove from end
const popped = friends.pop();
console.log(popped); // 'Jay' (returns what was removed)
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// Shift - remove from beginning
const shifted = friends.shift();
console.log(shifted); // 'John' (returns what was removed)
console.log(friends); // ['Michael', 'Steven', 'Peter']
```

### Finding Elements

```javascript
// IndexOf - find position of element
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1 (not found)

// Includes - check if element exists
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
```

**Method Summary:**
| Method | Purpose | Returns |
|--------|---------|---------|
| `push()` | Add to end | New length |
| `pop()` | Remove from end | Removed element |
| `unshift()` | Add to beginning | New length |
| `shift()` | Remove from beginning | Removed element |
| `indexOf()` | Find element position | Index or -1 |
| `includes()` | Check if exists | true or false |

## Your Turn: Practice Array Methods

### Exercise 2: Fruit Basket

```javascript
// Practice array methods:
// 1. Start with array: ['apple', 'banana']
// 2. Add 'orange' to the end
// 3. Add 'grape' to the beginning
// 4. Remove the last element
// 5. Check if 'banana' is in the array
// 6. Find the index of 'grape'
// 7. Log the final array and all results

let fruits = ["apple", "banana"];
// Your code here...

// Expected progression:
// After push: ['apple', 'banana', 'orange']
// After unshift: ['grape', 'apple', 'banana', 'orange']
// After pop: ['grape', 'apple', 'banana']
// includes('banana'): true
// indexOf('grape'): 0
```

## Array Iteration

Processing every element in an array is fundamental. You'll learn both traditional and modern approaches.

### For Loop with Arrays

```javascript
////////////////////////////////////
// Array Iteration - Loops

const friends = ["Michael", "Steven", "Peter"];

// Traditional for loop
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// For loop with processing
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
```

**For Loop Structure:**

- `let i = 0` - start at first index
- `i < friends.length` - continue while within bounds
- `i++` - increment index each time

### forEach Method

```javascript
// forEach method - modern approach
friends.forEach(function (friend, index) {
  console.log(`${index}: ${friend}`);
});

// Arrow function version (even cleaner)
friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});
```

### Practical Example

```javascript
// Real-world example - grade processing
const grades = [85, 92, 78, 96, 88, 74];
let total = 0;

// Calculate average grade
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);

// Count passing students (grade >= 70)
let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);
```

**When to Use Each:**

- **For loop**: When you need index control or might break early
- **forEach**: For simple processing of each element

## Your Turn: Practice Array Iteration

### Exercise 3: Number Processing

```javascript
// Practice array iteration:
// 1. Create array: [10, 25, 30, 15, 40]
// 2. Use for loop to double each number and store in new array
// 3. Use forEach to log each original number with its position
// 4. Calculate the sum of all numbers using a for loop
// 5. Count how many numbers are greater than 20

const numbers = [10, 25, 30, 15, 40];

// Your code here...
```

## Coding Challenge #2: Student Grade Manager

Time to combine functions and arrays in a real-world application! You'll build a grade management system.

### The Challenge

**You're building a grade management system for a teacher.**

**Your Tasks:**

1. Create an array of student grades: `[78, 85, 92, 67, 88, 95, 73, 82]`
2. Create a function `calculateAverage(grades)` that returns the average
3. Create a function `findHighestGrade(grades)` that returns the highest grade
4. Create a function `findLowestGrade(grades)` that returns the lowest grade
5. Create a function `countPassing(grades, passingGrade)` that counts students who passed
6. Use all your functions to create a complete grade report

**Passing grade is 70.**

**Expected output:**

- Average: 82.5
- Highest: 95
- Lowest: 67
- Passing students: 6 out of 8

### Your Solution Space

```javascript
////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  // Your code here
  // Hint: Sum all grades, divide by length
}

// Function to find highest grade
function findHighestGrade(grades) {
  // Your code here
  // Hint: Start with first grade, compare with each subsequent grade
}

// Function to find lowest grade
function findLowestGrade(grades) {
  // Your code here
  // Hint: Similar to highest, but use < comparison
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  // Your code here
  // Hint: Counter pattern - increment when condition is met
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
```

## Complete Hour 2 Code

By the end of Hour 2, your `script.js` should include:

```javascript
// JavaScript Fundamentals Part 2 - Hour 2
```

## Save Your Progress with Git

Time to commit your array and data processing skills!

```bash
git add .
git commit
```

**Copy this commit message:**

```
feat: implement arrays and array methods

- Add array creation and element access with zero-based indexing
- Implement essential array methods: push, pop, shift, unshift, indexOf, includes
- Create array iteration patterns with for loops and forEach method
- Build student grade management system combining functions and arrays
- Establish data processing patterns for real-world applications
```

```bash
git push origin main
```

Your data processing skills are now in your portfolio!

## Troubleshooting

### Array indexing issues?

- Remember arrays start at 0, not 1
- Last element is at `array[array.length - 1]`
- Check bounds to avoid undefined values

### Array method confusion?

- **push/pop** work on the **end** of arrays
- **shift/unshift** work on the **beginning** of arrays
- Methods return different things: elements vs lengths

### For loop syntax errors?

- Template: `for (let i = 0; i < array.length; i++)`
- Don't forget semicolons between loop parts
- Use `i < array.length`, not `i <= array.length`

### Grade manager functions not working?

- Make sure functions have `return` statements
- Check loop conditions and comparisons
- Test each function individually first

---

## Check Your Understanding

Before moving to Hour 3, make sure you can:

- [ ] Create arrays and access elements by index
- [ ] Use push, pop, shift, unshift methods correctly
- [ ] Iterate through arrays with for loops and forEach
- [ ] Write functions that process array data
- [ ] Combine functions and arrays to solve real problems

### Quick Quiz:

1. What index is the first element of an array?
2. Which method adds an element to the beginning of an array?
3. What does `array.indexOf('item')` return if the item isn't found?
4. How do you get the last element of an array?
5. When should you use forEach vs a for loop?

## Next Up: Hour 3

Get ready for Hour 3 where you'll learn:

- Creating objects with properties and methods
- Object notation and property access
- The 'this' keyword for object methods
- Building a user profile system
- Understanding when to use objects vs arrays

**You now manage collections of data like a professional developer!**

## Key Concepts Summary

| Concept                 | Purpose                      | Example                                   |
| ----------------------- | ---------------------------- | ----------------------------------------- |
| **Array Creation**      | Store collections of data    | `const arr = [1, 2, 3]`                   |
| **Zero-based Indexing** | Access elements by position  | `arr[0]` gets first element               |
| **Array Methods**       | Add/remove elements          | `push()`, `pop()`, `shift()`, `unshift()` |
| **Array Iteration**     | Process each element         | `for` loops, `forEach()`                  |
| **Array + Functions**   | Professional data processing | Grade manager system                      |

**Remember: Arrays + Functions = Powerful Data Processing!**
