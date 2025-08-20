## 🎯 What You'll Learn Today

By the end of this hour, you'll be able to:

- Set up a professional JavaScript development environment
- Use Git for version control and build your coding portfolio
- Create and manage variables with let, const, and var
- Understand JavaScript data types and check them with typeof
- Use the browser console for debugging and testing

## 🛠️ Setup Your Development Environment

### Step 1: Create Your Course Folder

**Using Windows File Explorer:**

1. Open File Explorer
2. Navigate to Desktop or Documents/Developer folder
3. Right-click → New → Folder
4. Name it: `javascript-course`

### Step 2: Open in VS Code

1. Open VS Code
2. File → Open Folder
3. Select your `javascript-course` folder

### Step 3: Clone Course Structure

```bash
# In VS Code terminal, run:
git clone https://github.com/aikengunay/javascript-course.git .
```

**You should now see the complete course structure:**

```
javascript-course/
├── 01-fundamentals-part-1/
│   └── starter/
│       ├── index.html (starter HTML)
│       ├── script.js (empty, ready for code)
│       └── README.md (session instructions)
├── README.md (course overview)
└── .gitignore
```

### Step 4: Create Your Own Course Repository

1. Go to [github.com](https://github.com)
2. Click **"New Repository"**
3. Name it: `javascript-course`
4. Keep it **public**
5. **Don't** initialize with README (we already have files)
6. Copy the repository URL

### Step 5: Connect to Your Repository

```bash
# Remove connection to instructor's repo
git remote remove origin

# Add connection to YOUR course repo
git remote add origin [your-github-repo-url]

# Push complete course structure
git push -u origin main
```

🎉 **Success!** Check your GitHub - you should see your complete JavaScript course repository!

### Step 6: Navigate to Session 1

```bash
# Navigate to the first session starter folder
cd 01-fundamentals-part-1/starter
```

**Or use VS Code GUI:**

- File → Open Folder
- Navigate to `javascript-course/01-fundamentals-part-1/starter`
- Click "Select Folder"

---

## 💻 Your First JavaScript Code

### Open Your Files

1. **index.html** - Your webpage (already set up)
2. **script.js** - Where you'll write JavaScript code

**You're now working in the starter folder structure:**

```
01-fundamentals-part-1/
└── starter/
    ├── index.html ← Your webpage
    ├── script.js ← Your JavaScript code
    └── README.md ← Session instructions
```

### Test Your Setup

Add this code to your `script.js` file:

```javascript
// JavaScript Fundamentals - Hour 1
// My first JavaScript code!

let js = "amazing";
console.log(40 + 8 + 23 - 10);
```

### See It Work!

1. Open `index.html` in your browser
2. Press **F12** to open Developer Tools
3. Click the **Console** tab
4. You should see: the number **61**

**🔧 Console Tips:**

- The console is your debugging friend
- All developers use it constantly
- You can type JavaScript directly in the console!

---

## 📦 Variables: Storing Your Data

Think of variables as labeled boxes where you store different types of information.

### Variables with `let` (Can Change)

```javascript
console.log("=== VARIABLES ===");

let firstName = "Jonas";
console.log(firstName);

let age = 30;
age = 31; // We can change let variables
console.log(age);
```

### Variables with `const` (Cannot Change)

```javascript
const birthYear = 1991;
console.log(birthYear);

// birthYear = 1990; // ❌ This would cause an error!

const PI = 3.1415;
console.log(PI);
```

### The Old Way: `var` (Don't Use This!)

```javascript
var job = "programmer";
job = "teacher";
console.log(job);

// Note: Modern JavaScript uses let and const
// You'll see var in old code, but avoid it
```

### 🏆 Best Practices

**Use `const` by default:**

```javascript
const country = "Portugal";
const language = "Portuguese";
const population = 10;
```

**Use `let` only when you need to change the value:**

```javascript
let age = 25;
age = 26; // This will change
```

**Variable Naming Rules:**

```javascript
// ✅ Good names
let firstName = "Sarah";
let myCurrentJob = "teacher";
let PI = 3.1415; // Constants in UPPERCASE

// ❌ Bad names (will cause errors)
// let 3years = 3; // Can't start with number
// let jonas&matilda = "JM"; // No special characters
// let new = 27; // Can't use reserved words
```

## 🔤 JavaScript Data Types

JavaScript has different types of data. Here are the main ones:

### Basic Data Types

```javascript
console.log("=== DATA TYPES ===");

// Number (integers and decimals)
let age = 23;
console.log(age);
console.log(typeof age); // "number"

// String (text in quotes)
let firstName = "Jonas";
console.log(firstName);
console.log(typeof firstName); // "string"

// Boolean (true or false)
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // "boolean"

// Undefined (no value assigned yet)
let year;
console.log(year); // undefined
console.log(typeof year); // "undefined"
```

### Dynamic Typing Magic

JavaScript variables can change types:

```javascript
// Start as a number
let dynamicVariable = 23;
console.log(dynamicVariable, typeof dynamicVariable); // 23, "number"

// Change to a string
dynamicVariable = "Now I'm a string!";
console.log(dynamicVariable, typeof dynamicVariable); // "Now I'm a string!", "string"

// Change to a boolean
dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable); // true, "boolean"
```

**Key Points:**

- `typeof` tells you what type of data you have
- Variables can hold different types at different times
- JavaScript adapts automatically

## 🎯 Your Turn: Practice Time!

### Exercise 1: Personal Info Variables

Create variables for your personal information:

```javascript
// Create these variables about yourself:
// 1. Your first name (const)
// 2. Your age (let - it changes every year!)
// 3. Your favorite number (const)
// 4. Whether you like JavaScript so far (boolean)

// Log each variable and its type to the console
```

### Exercise 2: Variable Reassignment

```javascript
// 1. Create a let variable called 'score' with value 100
// 2. Log it to the console
// 3. Change it to 150
// 4. Log it again
// 5. Try the same with const - what happens?
```

### Exercise 3: Data Type Detective

```javascript
// Use typeof to check the data type of these values:
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);

// What do you think each one will return?
```

## ✅ Your Complete Hour 1 Code

By the end of Hour 1, your `script.js` should look like this:

```javascript
// JavaScript Fundamentals - Hour 1
// Insert your complete code here
```

## 📊 Save Your Progress with Git

Time to save your work like a professional developer!

```bash
git add .
git commit
```

**📝 Copy this commit message:**

```
feat: add basic variables and data types

- Set up JavaScript environment and browser console
- Implement let, const, var variable declarations
- Add data type exploration with typeof operator
- Establish development workflow and best practices
```

```bash
git push origin main
```

🎉 **Your code is now saved in your GitHub repository!**

## 🔧 Troubleshooting

### Console doesn't show anything?

- [ ] Is `script.js` linked correctly in `index.html`?
- [ ] Is the browser console open (F12)?
- [ ] Are there any JavaScript syntax errors (red text in console)?
- [ ] Did you save the file?

### Getting a `const` assignment error?

- This means you tried to change a `const` variable
- Use `let` for variables that need to change
- Use `const` for values that stay the same

### Git commands not working?

- [ ] Are you in the correct directory?
- [ ] Is Git installed on your computer?

## 🎯 Check Your Understanding

Before moving to Hour 2, make sure you can:

- [ ] Create variables using `let` and `const`
- [ ] Explain when to use `let` vs `const`
- [ ] Use `typeof` to check data types
- [ ] See output in the browser console
- [ ] Make a Git commit to save your work

### Quick Quiz:

1. What's the difference between `let` and `const`?
2. What does `typeof "Hello"` return?
3. Can you change a `const` variable after creating it?
4. How do you open the browser console?

## 🚀 Next Up: Hour 2

Get ready for Hour 2 where you'll learn:

- Mathematical operations and calculations
- Comparing values and making decisions
- Solving your first real coding challenge
- Building a BMI calculator from scratch

**You're building the foundation for everything that comes next!**

## 📚 Key Concepts Summary

| Concept           | Description                        | Example                             |
| ----------------- | ---------------------------------- | ----------------------------------- |
| **let**           | Variable that can change           | `let age = 25; age = 26;`           |
| **const**         | Variable that cannot change        | `const name = "John";`              |
| **typeof**        | Check data type                    | `typeof 42` returns `"number"`      |
| **console.log()** | Display output in console          | `console.log("Hello");`             |
| **Data Types**    | number, string, boolean, undefined | `42`, `"text"`, `true`, `undefined` |

**Remember: Practice makes perfect! The more you code, the more natural it becomes.** 💪
