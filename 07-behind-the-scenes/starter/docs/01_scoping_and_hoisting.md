# Hour 1: Scoping, Execution Contexts & Hoisting – Student Guide

## 🎯 What You'll Learn This Hour:

- Understand how JavaScript executes code with execution contexts and the call stack
- Master scoping rules: global, function, and block scope with lexical scoping
- Predict hoisting behavior for `var`, `let`, `const`, and different function types
- Identify and fix Temporal Dead Zone (TDZ) errors
- Use strict mode for better error detection and debugging

## 📊 Progress Tracker

- [ ] **Hour 1:** Scoping, Execution Contexts & Hoisting ← _You are here_
- [ ] **Hour 2:** The `this` Keyword & Arrow Functions
- [ ] **Hour 3:** Primitives vs Objects, Copying & Strict Mode

## ⏰ Session Timeline

- Opening: JavaScript engine and execution model introduction
- Section 1: Execution contexts and call stack behavior
- Section 2: Scoping rules and scope chain lookup
- Section 3: Hoisting behavior and Temporal Dead Zone (TDZ)

## 🛠️ Setup Your Behind the Scenes Development Environment

### Step 1: Add Behind the Scenes Project to Your Course

1. **Download Behind the Scenes project zip file** (provided by instructor)
2. **Extract the contents** to get `07-behind-the-scenes` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   ├── 02-fundamentals-part-2/     (from Part 2)
   ├── 03-developer-skills/        (from Developer Skills)
   ├── 04-guess-my-number-game/    (from Game Development)
   ├── 05-modal/                   (from Modal Project)
   ├── 06-pig-game/                (from Pig Game)
   └── 07-behind-the-scenes/       (new Behind the Scenes project folder)
   ```

### Step 2: Open Behind the Scenes Project in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/07-behind-the-scenes/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..
```

```bash
# Add the new Behind the Scenes project folder
git add 07-behind-the-scenes/
```

```bash
# Commit with descriptive message
git commit -m "feat: add behind the scenes starter files and documentation"
```

```bash
# Push to remote repository
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
07-behind-the-scenes/
└── starter/
    ├── index.html
    ├── script.js
    ├── style.css
    └── docs/
        ├── 01_scoping_and_hoisting.md
        ├── 02_this_keyword_and_arrow_functions.md
        └── 03_primitives_vs_objects_and_strict_mode.md
```

### Step 5: Test Your Current Setup

Let's start by understanding what we're exploring:

```javascript
// Behind the Scenes Development Hour 1 - Scoping & Hoisting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

/*
In this hour, we'll explore:
1. How JavaScript executes code (execution contexts)
2. Where variables are accessible (scoping)
3. Why some code works before declaration (hoisting)
4. How to avoid common pitfalls (TDZ and strict mode)

This foundation is crucial for understanding JavaScript's behavior!
*/
```

**Add this to your `script.js` file and open `index.html` in your browser to verify everything works.**

## Section 1: Execution Contexts & Call Stack

### Why This Matters

Understanding how JavaScript executes code helps you debug errors, read stack traces, and understand why certain behaviors occur. The execution context and call stack are fundamental to how JavaScript works behind the scenes.

### The Execution Model

JavaScript executes code in **execution contexts**. Think of each context as a container that holds:

- **Variable Environment**: All variables and functions available in that context
- **Scope Chain**: Links to outer scopes for variable lookup
- **`this` binding**: What `this` refers to in that context

```javascript
'use strict';

// Global Execution Context
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();
// Expected: alpha:start → beta → alpha:end
```

**What happens:**

1. Global context executes first
2. `alpha()` creates a new execution context
3. `beta()` creates another execution context on top
4. Contexts are removed as functions complete (Last In, First Out)

### Your Turn: Call Stack Practice

Create your own nested function calls and use `console.trace()` to see the call stack:

```javascript
function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); // Add this to see the call stack
}

outerFunction();
```

**Expected output:**

- "Outer function start"
- "Inner function"
- Call stack trace showing: `innerFunction` → `outerFunction` → global
- "Outer function end"

## Section 2: Scoping & Scope Chain

### Why This Matters

Scoping determines where variables are accessible in your code. Understanding scope prevents bugs and helps you write cleaner, more predictable code.

### The Three Types of Scope

**1. Global Scope**: Variables declared outside any function or block

```javascript
const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar); // Accessible everywhere
}
```

**2. Function Scope**: Variables declared inside a function

```javascript
function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar); // Works here
}
// console.log(functionVar); // Error: not accessible outside
```

**3. Block Scope**: Variables declared inside `{}` blocks (let/const only)

```javascript
if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; // var ignores block scope
}

// console.log(blockVar); // Error: not accessible
// console.log(alsoBlockVar); // Error: not accessible
console.log(notBlockScoped); // Works! var leaks out
```

### Scope Chain in Action

When JavaScript looks for a variable, it searches from inner to outer scopes:

```javascript
const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, /* blockConst not here */, functionVar);
}

demoScope();
```

### Your Turn: Scope Chain Exploration

Try this shadowing example and predict what each `console.log` will output:

```javascript
const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); // 'FunctionName' via scope chain
  }
  b();
}

a();
```

**Challenge**: What happens if you remove the `const name = 'FunctionName';` line inside function `a()`?

## Section 3: Hoisting & Temporal Dead Zone

### Why This Matters

Hoisting explains why some variables and functions are available before their declaration, while others throw errors. Understanding this prevents common bugs and makes your code more predictable.

### Variable Hoisting Behavior

Different declaration types behave differently with hoisting:

```javascript
// Variable hoisting examples
console.log(varX); // undefined (var hoisted, initialized to undefined)
// console.log(letX); // ReferenceError (TDZ)
// console.log(constX); // ReferenceError (TDZ)

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3
```

### Function Hoisting Behavior

Functions also hoist differently depending on how they're declared:

```javascript
// Function hoisting examples
console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// console.log(addExpr(2, 3)); // ReferenceError in TDZ
// console.log(addArrow(2, 3)); // ReferenceError in TDZ

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Now all work:
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // 5
console.log(addArrow(2, 3)); // 5
```

### Understanding the Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between when a `let` or `const` variable is hoisted and when it's initialized:

```javascript
// TDZ Fix Example
// Bad: TDZ
// console.log(apiUrl); // ReferenceError
// const apiUrl = 'https://example.com';

// Good: declare before use
const apiUrl = 'https://example.com';
console.log(apiUrl);
```

### Your Turn: Hoisting Practice

This matches the instructor's final code - predict what this will output:

```javascript
'use strict';

// 1) Hoisting expectation
// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

// 2) Scope chain expectation
function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer();

// 3) Call stack expectation
function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two'
```

## 📊 Git Commit Time!

### Step 1: Stage All Changes

```bash
git add .
```

**What this does:**

- Stages all modified files in your current directory
- Prepares them for commit (like putting items in a shopping cart)
- The `.` means "all files in current directory and subdirectories"
- You'll see: `modified: script.js` in the output

### Step 2: Commit Your Changes

```bash
git commit
```

**What happens:**

- Opens your default text editor (usually VS Code or vim)
- You'll see a commit message template
- Replace the template with your message
- Save and close the editor to complete the commit

**If you see vim editor (most common):**

1. **Enter Insert Mode:**

   - Press `i` to enter insert mode
   - You'll see `-- INSERT --` at the bottom of the screen
   - Now you can type and edit text normally

2. **Edit the commit message:**

   - Delete the existing template text (use Backspace or Delete keys)
   - Type your new commit message
   - You can use arrow keys to navigate

3. **Save and exit:**

   - Press `Esc` to exit insert mode
   - Type `:wq` and press Enter
   - This saves the file and quits vim

**If you see VS Code editor:**

- Simply edit the message directly
- Press `Ctrl+S` (or `Cmd+S` on Mac) to save
- Close the tab to complete the commit

**If you make a mistake:**

- Press `Esc` to exit insert mode
- Type `:q!` and press Enter to quit without saving
- This will cancel the commit and you can try again

**Your commit message:**

```
feat(behind-the-scenes): complete Hour 1 with scoping and hoisting examples

- Add execution contexts and call stack demonstrations
- Implement scoping examples for global, function, and block scope
- Show hoisting behavior for var, let, const, and function types
- Include TDZ examples and error handling
- Add comprehensive verification tests for all concepts
- Master JavaScript's behind-the-scenes execution behavior
```

**What this means:**

- `feat:` indicates a new feature
- `(behind-the-scenes):` specifies which project this is for
- The rest describes what you accomplished

### Step 3: Push to Remote Repository

```bash
git push origin main
```

**What this does:**

- Uploads your committed changes to the remote repository
- Makes your work available to others
- Backs up your progress in the cloud

## 🔧 Troubleshooting

### Common Issues & Solutions

- **"ReferenceError: Cannot access before initialization"**

  - **Cause**: Trying to use `let`/`const` variables before their declaration (TDZ)
  - **Fix**: Move the usage after the declaration line

- **"Unexpected `undefined` instead of error"**

  - **Cause**: Using `var` which hoists to `undefined`
  - **Fix**: Use `let`/`const` for block scoping and TDZ protection

- **"Function not working when called early"**

  - **Cause**: Using function expression or arrow function (not hoisted)
  - **Fix**: Use function declaration for early calls, or move call after definition

- **"Variable accessible outside block"**

  - **Cause**: Using `var` which ignores block scope
  - **Fix**: Use `let`/`const` for proper block scoping

- **"Can't see variable from inner function"**
  - **Cause**: Variable declared in different scope chain branch
  - **Fix**: Declare variable in a common parent scope

## ✅ Hour 1 Checklist

Mark each item as you complete it:

- [ ] Understand execution contexts and call stack behavior
- [ ] Differentiate between global, function, and block scope
- [ ] Predict `var` hoisting (shows `undefined`)
- [ ] Identify `let`/`const` TDZ errors
- [ ] Distinguish function declaration vs expression hoisting
- [ ] Use strict mode for better error detection
- [ ] Apply scope chain for variable lookup
- [ ] Debug hoisting-related issues
- [ ] Complete verification tests successfully
- [ ] Commit changes to Git repository

## 📚 Key Concepts Summary

| Concept               | Purpose                      | Example                                       |
| --------------------- | ---------------------------- | --------------------------------------------- |
| **Execution Context** | Container for code execution | Function call creates new context             |
| **Call Stack**        | Track execution order        | LIFO (Last In, First Out)                     |
| **Global Scope**      | Accessible everywhere        | `const global = 'value'`                      |
| **Function Scope**    | Accessible within function   | `function() { const local = 'value' }`        |
| **Block Scope**       | Accessible within `{}`       | `if(true) { let block = 'value' }`            |
| **Hoisting**          | Move declarations to top     | `var` → `undefined`, functions work early     |
| **TDZ**               | Period before initialization | `let`/`const` throw errors before declaration |
| **Scope Chain**       | Variable lookup path         | Inner → Outer → Global                        |

## 🎯 What You've Mastered

Congratulations! You now understand:

- **How JavaScript executes code** through execution contexts
- **Where variables are accessible** with scoping rules
- **Why some code works before declaration** through hoisting
- **How to avoid common pitfalls** with TDZ and strict mode

**Next Up**: In Hour 2, you'll learn about the `this` keyword and arrow functions - JavaScript's most confusing features made simple!
