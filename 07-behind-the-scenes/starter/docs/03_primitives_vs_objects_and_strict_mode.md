# Hour 3: Primitives vs Objects, Copying & Strict Mode – Student Guide

## 🎯 What You'll Learn This Hour:

- Understand the stack vs heap memory model for primitives vs objects
- Explain why object assignment creates shared references
- Master shallow copying with spread operator and `Object.assign`
- Apply deep copying with `structuredClone` for complete independence
- Integrate strict mode benefits seen throughout all concepts

## 📊 Progress Tracker

- [x] **Hour 1:** Scoping, Execution Contexts & Hoisting ← _Completed_
- [x] **Hour 2:** The `this` Keyword & Arrow Functions ← _Completed_
- [ ] **Hour 3:** Primitives vs Objects, Copying & Strict Mode ← _You are here_

## ⏰ Session Timeline

- Opening: Memory model and primitives vs objects introduction
- Section 1: Stack vs heap and reference behavior
- Section 2: Shallow vs deep copying techniques
- Section 3: Strict mode benefits and final integration

## Section 1: Stack vs Heap Memory Model

### Why This Matters

Understanding how JavaScript stores data in memory is crucial for avoiding bugs, optimizing performance, and working with complex data structures. The difference between primitives and objects explains many JavaScript behaviors that can seem confusing at first.

### Primitives vs Objects in Memory

JavaScript stores different types of data in different places in memory. Think of primitives like photocopies - each copy is completely independent. Objects are like shared Google Docs - multiple people can have the link, but they're all editing the same document.

**Primitives in the Stack:**

```javascript
// PRIMITIVES IN STACK
let age = 30;
let oldAge = age; // Independent copy
age = 31;

console.log('age:', age); // 31
console.log('oldAge:', oldAge); // 30 (unchanged!)
```

**What happens:** Primitives are stored directly in the stack. When you copy a primitive, you get a completely separate copy in a new memory slot.

**Objects in the Heap:**

```javascript
// OBJECTS IN HEAP
const me = { name: 'Jonas', age: 30 };
const friend = me; // Shared reference

friend.age = 27;

console.log('me:', me); // { name: 'Jonas', age: 27 }
console.log('friend:', friend); // { name: 'Jonas', age: 27 }
```

**What happens:** Objects are stored in the heap, and variables hold references (addresses) to the heap location. When you "copy" an object, you copy the reference, not the object itself.

### Your Turn: Test Reference Behavior

Try this example to see reference sharing in action:

```javascript
function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson); // { name: 'Sarah', age: 30 } - Changed!
console.log('updated:', updatedPerson); // { name: 'Sarah', age: 30 } - Same object!
console.log('same object?:', originalPerson === updatedPerson); // true
```

**Key insight:** Functions receive references to objects, not copies. This means functions can modify the original objects passed to them.

**Challenge:** Why does `const` allow us to modify the object's properties? (Hint: `const` prevents reassignment of the variable, not mutation of the object it points to)

## Section 2: Shallow vs Deep Copying

### Why This Matters

Understanding copying behavior helps you avoid unexpected mutations and choose the right technique for your needs. Sometimes you want shared references, sometimes you need independent copies.

### Shallow Copying Techniques

Shallow copying creates a new object but nested objects/arrays are still shared. It's called "shallow" because it only goes one level deep.

```javascript
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name); // 'Alice' (unchanged)
console.log('copy name:', shallowCopy.name); // 'Bob' (changed)

// But nested objects are still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies); // ['reading', 'coding', 'gaming'] - Changed!
console.log('copy hobbies:', shallowCopy.hobbies); // ['reading', 'coding', 'gaming'] - Same array!

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);
```

**When to use shallow copying:** Perfect for objects with only primitive values (strings, numbers, booleans). Also fine when you know you won't modify nested objects.

### Deep Copying Solutions

For complete independence, we need deep copying - copying all levels including nested objects and arrays.

```javascript
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

// Modern deep copy with structuredClone
const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address); // { city: 'Paris', country: 'France' }
console.log('copy address:', deepCopy.address); // { city: 'London', country: 'France' }
console.log('original hobbies:', deepOriginal.hobbies); // ['travel', 'photography']
console.log('copy hobbies:', deepCopy.hobbies); // ['travel', 'photography', 'cooking']
```

### Common Pitfall: JSON Methods

Many developers try to use JSON methods for deep copying, but this has limitations:

```javascript
const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

// BROKEN: JSON method loses data
const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);
// { name: 'Test', date: '2023-...' } - Lost method and undefined!

// FIXED: structuredClone preserves most types
const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);
// Note: functions still can't be cloned, but dates work!
```

**Rule of Thumb:**

- **Shallow copy** → spread `{...obj}` or `Object.assign({}, obj)`
- **Deep copy** → `structuredClone(obj)` for modern browsers
- **Arrays** → same rules apply: `[...arr]` (shallow) vs `structuredClone(arr)` (deep)

### Your Turn: Copying Challenge

Create a user management system that safely handles user data:

```javascript
const userManager = {
  users: [],

  addUser: function (userData) {
    // Your task: Add userData to users array
    // But make sure external changes to userData don't affect stored data
    // Hint: Use deep copying
  },

  getUsers: function () {
    // Your task: Return users array
    // But prevent external code from modifying the original array
    // Hint: Use shallow copying for the array
  },
};

// Test your implementation
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]); // Should still be 'John'!
```

## Section 3: Strict Mode Benefits & Integration

### Why This Matters

Strict mode has been helping us throughout all three hours by making JavaScript more predictable and catching errors early. Understanding its benefits helps you write better, more reliable code.

### Strict Mode Throughout All Concepts

Let's see how strict mode has been protecting us:

```javascript
'use strict';

// 1. Hoisting and TDZ (Hour 1)
// Without strict mode: undeclaredVar = 'This would create a global variable!';
// With strict mode: throws ReferenceError
// undeclaredVar = 'This throws an error in strict mode';

// 2. This keyword (Hour 2)
function demonstrateThis() {
  console.log('this in strict mode:', this); // undefined (not global object)
}
demonstrateThis();

// 3. Object mutation prevention attempts
const readOnlyObj = Object.freeze({ name: 'Frozen' });

try {
  readOnlyObj.name = 'Changed'; // Throws error in strict mode
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}
```

### Real-World Integration Example

Here's a practical example combining all concepts from the three hours:

```javascript
const userManager = {
  users: [],

  addUser: function (userData) {
    // Deep copy to avoid reference issues
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this; // Method chaining
  },

  getUsers: function () {
    // Return shallow copy to prevent external mutation
    return [...this.users];
  },
};

// Test the complete system
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]); // Still 'John'!
```

**What this demonstrates:**

- **Memory management:** Deep copying prevents reference issues
- **`this` keyword:** Methods correctly bind to the userManager object
- **Strict mode:** Catches errors and prevents silent failures
- **Professional patterns:** Method chaining and safe data handling

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
feat(behind-the-scenes): complete Hour 3 with primitives vs objects and copying

- Demonstrate stack vs heap memory model for primitives and objects
- Show reference sharing behavior with object assignment and function parameters
- Implement shallow copying with spread operator and Object.assign
- Add deep copying solutions using structuredClone with practical examples
- Integrate strict mode benefits across all three hours of concepts
- Include real-world user management system combining all techniques
- Add comprehensive memory management and copying behavior examples
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

- **"Why can I modify a `const` object?"**

  - **Cause**: `const` prevents reassignment of the variable, not mutation of the object
  - **Fix**: Use `Object.freeze()` to prevent mutations, or understand that `const` only protects the reference

- **"Shallow copy not working as expected"**

  - **Cause**: Trying to use shallow copy on objects with nested structures
  - **Fix**: Use `structuredClone()` for deep copying when you have nested objects/arrays

- **"JSON.parse(JSON.stringify()) losing data"**

  - **Cause**: JSON can only represent certain data types (loses functions, dates become strings, etc.)
  - **Fix**: Use `structuredClone()` for modern browsers or a proper deep cloning library

- **"Function parameter modifying original object"**

  - **Cause**: Objects are passed by reference, not by value
  - **Fix**: Create a copy inside the function if you need to avoid mutations

- **"Unexpected object mutations"**
  - **Cause**: Multiple variables pointing to the same object reference
  - **Fix**: Use appropriate copying technique (shallow vs deep) based on your data structure

## ✅ Hour 3 Checklist

Mark each item as you complete it:

- [ ] Understand stack vs heap memory model
- [ ] Explain primitive vs object storage differences
- [ ] Demonstrate reference sharing with object assignment
- [ ] Use shallow copying with spread operator and Object.assign
- [ ] Apply deep copying with structuredClone appropriately
- [ ] Recognize when to use shallow vs deep copying
- [ ] Integrate strict mode benefits from all three hours
- [ ] Build practical applications combining all concepts
- [ ] Avoid common copying pitfalls (JSON methods)
- [ ] Complete comprehensive verification tests
- [ ] Commit final changes to Git repository

## 📚 Key Concepts Summary

| Concept                | Purpose                            | Example                                   |
| ---------------------- | ---------------------------------- | ----------------------------------------- |
| **Primitives (Stack)** | Independent copies                 | `let a = 5; let b = a;` → separate values |
| **Objects (Heap)**     | Shared references                  | `const obj2 = obj1` → same object         |
| **Shallow Copy**       | Copy top-level properties only     | `{...obj}` or `Object.assign({}, obj)`    |
| **Deep Copy**          | Copy all levels including nested   | `structuredClone(obj)`                    |
| **Reference Sharing**  | Multiple variables, same object    | Function parameters, object assignment    |
| **Object.freeze()**    | Prevent mutations                  | `Object.freeze(obj)` → read-only          |
| **Strict Mode**        | Better error detection             | `'use strict';` → catches more errors     |
| **Method Chaining**    | Return `this` for fluent interface | `obj.method1().method2()`                 |

## 🎯 Complete JavaScript Behind-the-Scenes Mastery

Congratulations! You now have a complete understanding of:

### **Hour 1 Foundation:**

- **Execution Contexts & Call Stack** - How JavaScript runs code
- **Scoping & Scope Chain** - Where variables are accessible
- **Hoisting & TDZ** - Why some code works before declaration

### **Hour 2 Advanced Concepts:**

- **`this` Keyword** - Dynamic binding rules and common pitfalls
- **Arrow Functions** - Lexical `this` and when to use them
- **Arguments vs Rest Parameters** - Modern function parameter handling

### **Hour 3 Memory & Data:**

- **Memory Model** - Stack vs heap storage for different data types
- **Copying Behavior** - Shallow vs deep copying techniques
- **Strict Mode** - Better error detection and modern development practices

### **Your JavaScript Foundation is Complete!**

You're now ready for:

- **Advanced JavaScript Features** - Destructuring, modules, classes
- **Asynchronous Programming** - Promises, async/await, event loop
- **Framework Development** - React, Vue, Angular with solid understanding
- **Professional Development** - Writing robust, maintainable code

**Excellent work completing this comprehensive journey through JavaScript's behind-the-scenes behavior!**
