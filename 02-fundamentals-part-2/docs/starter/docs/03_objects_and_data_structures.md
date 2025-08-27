## ↪ student

# Part 2 Hour 3: Objects & Data Structures - Student Guide

## What You'll Learn Today

By the end of this hour, you'll be able to:

- Create object literals with properties and values
- Access and modify object properties using dot and bracket notation
- Add methods (functions) to objects and understand the `this` keyword
- Distinguish between objects and arrays - when to use each
- Build a comprehensive user profile system
- Work with nested objects and arrays

## Quick Review: Hour 2 Foundation

Before we start, make sure you remember:

- Array creation and element access by index
- Array methods: push, pop, shift, unshift
- Array iteration with for loops and forEach
- Functions that work with array data

**Ready to model real-world entities? Let's learn objects!**

## The Array Limitation Problem

Arrays work great for ordered data, but what about representing a person? Look at this problem:

```javascript
////////////////////////////////////
// The Array Problem
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

console.log(jonasArray[0]); // What is this? firstName?
console.log(jonasArray[1]); // lastName?
console.log(jonasArray[2]); // age?
```

**Problems with this approach:**

- Hard to remember what each position means
- No descriptive names for the data
- Difficult to understand and maintain
- Not self-documenting code

**Objects solve this problem!**

## Object Creation with Object Literal Syntax

Objects use curly braces and key-value pairs. Each property has a name (key) and a value.

### Basic Object Creation

```javascript
////////////////////////////////////
// Objects - Creation with Object Literal Syntax
console.log("=== OBJECTS ===");

// Object literal syntax - curly braces create objects
const jonas = {
  firstName: "Jonas", // property: string value
  lastName: "Schmedtmann", // property: string value
  age: 2037 - 1991, // property: calculated value
  job: "teacher", // property: string value
  friends: ["Michael", "Peter", "Steven"], // property: array value
};
console.log(jonas);
```

**Key Points:**

- **Curly braces `{}`** create objects (not square brackets like arrays)
- **Properties** are key-value pairs separated by commas
- **Keys** don't usually need quotes, but **values** follow normal rules
- Objects can contain **any data type** - strings, numbers, arrays, even other objects

### The Same Data - Arrays vs Objects

**Array approach (hard to understand):**

```javascript
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  46,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
// What does position 2 represent? You have to remember!
```

**Object approach (self-documenting):**

```javascript
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 46,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// Crystal clear what each value represents!
```

## Property Access Methods

There are two ways to access object properties: **dot notation** and **bracket notation**.

### Dot Notation (Most Common)

```javascript
// Dot notation - clean and readable
console.log(jonas.firstName); // 'Jonas'
console.log(jonas.lastName); // 'Schmedtmann'
console.log(jonas.age); // 46
console.log(jonas.job); // 'teacher'
console.log(jonas.friends); // ['Michael', 'Peter', 'Steven']
```

### Bracket Notation (More Flexible)

```javascript
// Bracket notation - uses strings
console.log(jonas["firstName"]); // Same result as dot notation
console.log(jonas["lastName"]);
console.log(jonas["age"]);
```

### Bracket Notation's Superpower

```javascript
// Bracket notation with expressions - compute property names!
const nameKey = "Name";
console.log(jonas["first" + nameKey]); // 'Jonas'
console.log(jonas["last" + nameKey]); // 'Schmedtmann'

// This is impossible with dot notation
// jonas.'first' + nameKey  // ❌ Syntax error!
```

### When to Use Each Notation

| Use Dot Notation When                | Use Bracket Notation When              |
| ------------------------------------ | -------------------------------------- |
| Default choice - cleaner             | Property name is in a variable         |
| Simple property names                | Property name has spaces/special chars |
| Property name is known at write time | Property name is computed dynamically  |

**Rule of thumb: Use dot notation as default, bracket notation when you need its flexibility.**

## Property Modification and Addition

Objects are mutable even when declared with `const`. You can change existing properties and add new ones.

### Modifying Existing Properties

```javascript
// Both notations work for modification
jonas.job = "programmer";
jonas["age"] = 35;
console.log(jonas);
```

### Adding New Properties

```javascript
// Objects can grow - add properties after creation
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
jonas.hasDriversLicense = true;
console.log(jonas);
```

**Important:** `const` objects can have properties changed. `const` only prevents reassigning the entire object variable, not modifying its contents.

## Your Turn: Practice Object Basics

### Exercise 1: Personal Object

```javascript
// Create your own objects:
// 1. Create a 'book' object with title, author, pages, and isRead properties
// 2. Create a 'playlist' object with name, creator, songs array, and genre
// 3. Access and log different properties using both dot and bracket notation
// 4. Add a new property to each object
// 5. Modify an existing property in each object

// Your code here...

// Example structure:
const book = {
  // Your properties here
};

const playlist = {
  // Your properties here
};

// Practice accessing properties
console.log(book.title);
console.log(playlist["creator"]);

// Add new properties

// Modify existing properties
```

## Objects vs Arrays: When to Use What

Choosing between objects and arrays is crucial for clean code. The decision depends on your data structure needs.

### Use Arrays For:

```javascript
// Ordered, indexed data - think lists
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];
```

**Array characteristics:**

- Order matters
- Items are similar/same type
- Access by position/index
- Great for lists, sequences, collections

### Use Objects For:

```javascript
// Named, descriptive data - think entities
const person = {
  name: "Jonas",
  age: 46,
  occupation: "teacher",
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};
```

**Object characteristics:**

- Properties describe characteristics
- Access by meaningful names
- Great for modeling real-world entities
- Self-documenting structure

### Combining Objects and Arrays

```javascript
// Objects can contain arrays, arrays can contain objects
const student = {
  name: "Sarah",
  grades: [85, 92, 78], // Array inside object
  address: {
    // Object inside object
    street: "123 Main St",
    city: "New York",
  },
};

console.log(student.grades[0]); // 85
console.log(student.address.city); // 'New York'
```

**Mix and match based on what makes sense for your data!**

## Object Methods and the 'this' Keyword

Functions inside objects are called **methods**. Methods let objects not just store data, but also perform actions on that data.

### Simple Object Methods

```javascript
////////////////////////////////////
// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Method - function inside object
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

// Call methods using dot notation
console.log(jonas.calcAge(1991)); // 46
console.log(jonas.calcAge(jonas.birthYear)); // Same result
```

**Key Points:**

- **Methods are functions stored as object properties**
- Call methods using dot notation: `object.method()`
- Methods can take parameters like regular functions

### The 'this' Keyword - Accessing Own Properties

```javascript
const jonasImproved = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this); // Shows the jonas object
    return 2037 - this.birthYear; // Access own birthYear!
  },
};

console.log(jonasImproved.calcAge()); // 46
```

**What is 'this'?**

- `this` refers to the object the method belongs to
- Lets methods access other properties of the same object
- Eliminates need to pass object's own data as parameters

### Advanced: Storing Calculated Values

```javascript
const jonasAdvanced = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear; // Store result as new property
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonasAdvanced.calcAge()); // 46
console.log(jonasAdvanced.age); // 46 (now stored as property)
console.log(jonasAdvanced.getSummary()); // Full description
```

**Advanced techniques:**

- Store calculated values as properties to avoid recalculation
- Methods can call other methods using `this`
- Build complex functionality by combining multiple methods

## Your Turn: Practice Object Methods

### Exercise 2: Calculator Object

```javascript
// Create a 'calculator' object:
// 1. Properties: num1, num2, operator
// 2. Methods: add(), subtract(), multiply(), divide()
// 3. Method: calculate() that uses the operator to perform the right operation
// 4. Method: getResult() that returns a formatted string
// 5. Use 'this' to access the object's own properties

const calculator = {
  num1: 10,
  num2: 5,
  operator: "+",

  add: function () {
    // Your code here - use this.num1 and this.num2
  },

  subtract: function () {
    // Your code here
  },

  multiply: function () {
    // Your code here
  },

  divide: function () {
    // Your code here
  },

  calculate: function () {
    // Use this.operator to determine which method to call
    // Hint: if (this.operator === '+') return this.add();
  },

  getResult: function () {
    // Return formatted string like "10 + 5 = 15"
  },
};

// Test your calculator
console.log(calculator.calculate());
console.log(calculator.getResult());
```

## Coding Challenge #3: User Profile System

Time to build a comprehensive user profile system! You'll combine objects, arrays, methods, and the 'this' keyword in a real-world application.

### The Challenge

**Build a user profile system with the following features:**

1. **Create a 'user' object with properties:**

   - firstName, lastName, birthYear, location, interests (array)
   - friends (array of objects with name and status)
   - isActive boolean

2. **Add methods:**

   - `calcAge()`: calculate and store age
   - `addFriend(name, status)`: add a friend to friends array
   - `getActiveFriends()`: return count of friends with status 'active'
   - `getSummary()`: return a complete profile summary
   - `toggleStatus()`: switch isActive between true/false

3. **The friends array should contain objects like:**
   `{name: 'Michael', status: 'active'}`

**Expected behavior:**

- Calculate age automatically
- Track friend relationships
- Generate social media style profile summary
- Manage user's active status

### Your Solution Space

```javascript
////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    // Your code here
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    // Your code here
  },

  // Get active friends count
  getActiveFriends: function () {
    // Filter friends array to count only active friends
    // Hint: use this.friends.filter()
    // Your code here
  },

  // Toggle active status
  toggleStatus: function () {
    // Switch this.isActive between true and false
    // Return the new status
    // Your code here
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());
```

## Complete Hour 3 Code

By the end of Hour 3, your `script.js` should include:

```javascript
// JavaScript Fundamentals Part 2 - Hour 3
```

## Save Your Progress with Git

Time to commit your object-oriented programming skills!

```bash
git add .
git commit
```

**Copy this commit message:**

```
feat: add objects and object manipulation

- Create objects with properties using object literal syntax
- Implement property access with dot and bracket notation
- Add object methods and master the 'this' keyword for self-reference
- Build user profile system combining objects, arrays, and methods
- Establish real-world data modeling patterns for professional development
```

```bash
git push origin main
```

Your object-oriented programming skills are now in your portfolio!

## Troubleshooting

### Object syntax issues?

- Objects use `{curly braces}`, arrays use `[square brackets]`
- Properties use `key: value` with colons, not equals signs
- Don't forget commas between properties
- Strings need quotes, property names usually don't

### Dot vs bracket notation confusion?

- **Dot notation:** `object.property` - use as default
- **Bracket notation:** `object['property']` - use for variables, spaces, or computed names
- You cannot use variables with dot notation: `object.variableName` won't work

### 'this' keyword not working?

- `this` only works inside object methods
- `this` refers to the object that owns the method
- Make sure you're calling the method on an object: `object.method()`

### Method definition syntax errors?

- Template: `methodName: function() { /* code */ }`
- Don't forget the `function` keyword in object literals
- Don't forget the colon after the method name

## Check Your Understanding

Before moving to Hour 4, make sure you can:

- [ ] Create objects using object literal syntax
- [ ] Access properties with both dot and bracket notation
- [ ] Modify and add object properties
- [ ] Write methods that use the `this` keyword
- [ ] Decide when to use objects vs arrays
- [ ] Build complex objects with nested data structures

### Quick Quiz:

1. What's the difference between dot and bracket notation?
2. When should you use objects instead of arrays?
3. What does the `this` keyword refer to inside an object method?
4. How do you add a new property to an existing object?
5. What's the syntax for creating a method in an object literal?

### Quiz Answers:

1. Dot notation is cleaner but only works with simple names; bracket notation works with variables and computed names
2. Use objects for named characteristics, arrays for ordered lists
3. `this` refers to the object that owns the method
4. `object.newProperty = value` or `object['newProperty'] = value`
5. `methodName: function() { /* code */ }`

## Next Up: Hour 4

Get ready for Hour 4 where you'll learn:

- Selecting HTML elements with JavaScript
- Modifying content, styles, and attributes
- Adding event listeners for user interaction
- Building fully interactive web applications
- Creating the final project: Interactive Score Tracker

**You now model real-world entities like a professional developer!**

## Key Concepts Summary

| Concept               | Purpose                              | Example                                    |
| --------------------- | ------------------------------------ | ------------------------------------------ |
| **Object Literal**    | Create objects with named properties | `const obj = {key: value}`                 |
| **Property Access**   | Get/set object values                | `obj.prop` or `obj['prop']`                |
| **Object Methods**    | Functions inside objects             | `methodName: function() {}`                |
| **'this' Keyword**    | Access object's own properties       | `this.property`                            |
| **Objects vs Arrays** | Choose right data structure          | Objects: named data, Arrays: ordered lists |

**Remember: Objects model real-world entities with both data (properties) and behavior (methods)!**
