# Hour 1: Modal Foundation & Class Toggling

## 🎯 What You'll Learn This Hour:

- Master DOM element selection with `querySelector` and `querySelectorAll`
- Understand class manipulation with `classList.add()` and `classList.remove()`
- Create reusable helper functions for modal open/close functionality
- Build your first complete UI component from scratch
- Apply JavaScript fundamentals to real-world modal development

## Quick Review: Previous Course Foundation

Before we start, make sure you remember:

- Variables: `let`, `const`, data types
- Functions: declarations, expressions, parameters, return values
- Arrays: creation, methods, iteration
- Objects: properties, methods, the `this` keyword
- Basic DOM manipulation from previous lessons

**Ready to build your first complete UI component? Let's create something amazing!**

## 📊 Progress Tracker

- [x] **Hour 1:** Modal Foundation & Class Toggling ← _You are here_
- [ ] **Hour 2:** Keyboard Events & Advanced UX

## ⏰ Session Timeline

- Opening: Modal Component Development
- Section 1: DOM Element Selection & Caching
- Section 2: Open/Close Helpers with Class Toggling
- Section 3: Refactor, Recap, and Q&A

## 🛠️ Setup Your Modal Development Environment

### Step 1: Add Modal Project to Your Course

1. **Download Modal project zip file** (provided by instructor)
2. **Extract the contents** to get `05-modal` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   ├── 02-fundamentals-part-2/     (from Part 2)
   ├── 03-developer-skills/        (from Developer Skills)
   ├── 04-guess-my-number-game/    (from Game Development)
   └── 05-modal/                   (new Modal project folder)
   ```

### Step 2: Open Modal Project in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/05-modal/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..
```

```bash
# Add the new Modal project folder
git add 05-modal/
```

```bash
# Commit with descriptive message
git commit -m "feat: add modal project starter files and documentation"
```

```bash
# Push to remote repository
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
05-modal/
└── starter/
    ├── index.html
    ├── script.js
    ├── style.css
    └── docs/
        ├── 01_modal_foundation_and_class_toggling.md
        └── 02_keyboard_events_and_advanced_ux.md
```

### Step 5: Test Your Current Setup

Let's start by understanding what we're building:

```javascript
// Modal Development Hour 1 - Foundation & Class Toggling
'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

/*
What We're Building Today:
- A complete modal window component
- Modal opens when clicking any "Show modal" button
- Modal closes when clicking the "×" button or overlay
- Professional class-based show/hide functionality
- Reusable helper functions for clean code

Key Concepts:
- DOM element selection and caching
- Class manipulation for show/hide
- Event listeners for user interaction
- DRY (Don't Repeat Yourself) principles
*/

console.log('Modal project ready!');
```

**Verify everything works:**

- Open `index.html` in browser
- Check Developer Tools Console (F12)
- Should see: "Modal project ready!"
- Notice the modal is initially hidden (no visible modal on page load)

## Section 1: DOM Element Selection & Caching

### Why This Matters

Before we can manipulate elements, we need to select them. Caching DOM elements in variables improves performance and makes our code more readable. We'll select all the elements we need and store them in descriptive variables.

```javascript
// First, add strict mode at the top
'use strict';

// Select the modal element
const modalEl = document.querySelector('.modal');

// Select the overlay element
const overlayEl = document.querySelector('.overlay');

// Select the close button
const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the open buttons using querySelectorAll
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify our selections worked correctly
console.log('Open buttons:', btnsOpenModalEl.length);
```

**Key Points:**

- `querySelector` gets the FIRST element that matches the selector
- `querySelectorAll` gets ALL elements that match the selector
- We use descriptive variable names with `El` suffix to indicate DOM elements
- Caching elements improves performance by avoiding repeated DOM searches

### Your Turn

1. **Add the code above** to your `script.js` file
2. **Save and test** - check the browser console
3. **Verify** you see "Open buttons: 3" in the console
4. **Check** that all elements are properly selected (no null values)

## Section 2: Open/Close Helpers with Class Toggling

### Why This Matters

Instead of changing inline styles, we'll use CSS classes to show and hide the modal. This keeps our styling logic in CSS and makes our JavaScript cleaner and more maintainable.

### Creating the `openModal` Function

```javascript
// Create our openModal function
const openModal = function () {
  // Remove the hidden class from modal to make it visible
  modalEl.classList.remove('hidden');

  // Remove the hidden class from overlay to show dark background
  overlayEl.classList.remove('hidden');
};
```

**Key Points:**

- `classList.remove()` removes a specific class without affecting others
- We remove the `hidden` class to make elements visible
- Both modal and overlay need to be shown together

### Creating the `closeModal` Function

```javascript
// Create our closeModal function
const closeModal = function () {
  // Add the hidden class back to modal to hide it
  modalEl.classList.add('hidden');

  // Add the hidden class back to overlay to hide dark background
  overlayEl.classList.add('hidden');
};
```

**Key Points:**

- `classList.add()` adds a specific class
- We add the `hidden` class to hide elements
- Both modal and overlay need to be hidden together

### Your Turn

1. **Add both functions** to your `script.js` file
2. **Save and test** - the functions are created but not yet connected
3. **Notice** how we use the same function for both open and close operations

## Section 3: Connecting Everything with Event Listeners

### Why This Matters

Now we need to connect our functions to user interactions. We'll add event listeners to make the modal respond to clicks.

### Wiring Up the Open Buttons

```javascript
// Attach openModal function to all show buttons
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
```

**Key Points:**

- `forEach` loops through all buttons in the NodeList
- Each button gets the same click event listener
- We pass the function reference, not call it (`openModal` not `openModal()`)

### Wiring Up the Close Actions

```javascript
// Attach closeModal function to close button
btnCloseModalEl.addEventListener('click', closeModal);

// Attach closeModal function to overlay click
overlayEl.addEventListener('click', closeModal);
```

**Key Points:**

- Close button click closes the modal
- Overlay click also closes the modal (UX standard)
- Same function handles multiple close triggers (DRY principle)

### Your Turn

1. **Add all event listeners** to your `script.js` file
2. **Save and test** - try clicking the buttons!
3. **Test opening** - click any "Show modal" button
4. **Test closing** - click the "×" button or outside the modal
5. **Verify** the modal opens and closes smoothly

## 🧪 Final Verification

Your complete `script.js` should look like this:

```javascript
'use strict';

// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
```

**Test Checklist:**

- [ ] Modal opens when clicking any "Show modal" button
- [ ] Modal closes when clicking the "×" button
- [ ] Modal closes when clicking outside (overlay)
- [ ] Console shows "Open buttons: 3"
- [ ] No JavaScript errors in console

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
feat(modal): implement modal open/close functionality with DOM manipulation and helper functions
```

**What this means:**

- `feat:` indicates a new feature
- `(modal):` specifies which project this is for
- The rest describes what you accomplished

### Step 3: Push to Remote Repository

```bash
git push origin main
```

**What this does:**

- Uploads your local commits to GitHub (or your remote repository)
- Makes your changes available to others
- You'll see: `Writing objects: 100% (X/X), X KiB | X KiB/s`
- Your changes are now safely backed up online

## 🔧 Troubleshooting

### **Modal doesn't open when clicking buttons**

- Check if you used `querySelectorAll` for the buttons
- Verify you used `forEach` to add event listeners to all buttons
- Make sure the function reference is correct (`openModal` not `openModal()`)

### **Class manipulation not working**

- Check if elements are properly selected (not null)
- Verify class names match exactly (case-sensitive)
- Confirm you're using `classList` methods, not `className`

### **Event listeners not working**

- Check if script is loaded after HTML elements
- Verify event listener syntax is correct
- Confirm function names are spelled correctly

### **Variables undefined or null**

- Check if selectors match HTML class names exactly
- Verify elements exist in HTML
- Confirm script runs after DOM is loaded

### **Multiple copies of listeners**

- Avoid re-binding in hot-reload loops
- Define event listeners once per page load

## ✅ Hour Checklist

- [ ] Successfully selected all DOM elements with proper selectors
- [ ] Created `openModal` function using `classList.remove()`
- [ ] Created `closeModal` function using `classList.add()`
- [ ] Attached event listeners to all open buttons using `forEach`
- [ ] Attached event listeners to close button and overlay
- [ ] Modal opens when clicking any "Show modal" button
- [ ] Modal closes when clicking the "×" button
- [ ] Modal closes when clicking outside the modal
- [ ] Code is clean and organized with descriptive variable names
- [ ] All changes committed to Git repository

## 📚 Key Concepts Summary

| Concept              | Purpose                         | Example                                          |
| -------------------- | ------------------------------- | ------------------------------------------------ |
| `querySelector`      | Select single DOM element       | `document.querySelector('.modal')`               |
| `querySelectorAll`   | Select multiple DOM elements    | `document.querySelectorAll('.show-modal')`       |
| `classList.add()`    | Add CSS class to element        | `modalEl.classList.add('hidden')`                |
| `classList.remove()` | Remove CSS class from element   | `modalEl.classList.remove('hidden')`             |
| `addEventListener`   | Attach event handler to element | `btn.addEventListener('click', handler)`         |
| `forEach`            | Loop through NodeList           | `btns.forEach(btn => btn.addEventListener(...))` |
| Helper Functions     | Reusable code blocks            | `const openModal = function() { ... }`           |

## 🎯 What's Next?

Congratulations! You've built your first complete UI component. In Hour 2, we'll add:

- **Keyboard Events:** ESC key to close the modal
- **Advanced UX:** Prevent body scrolling when modal is open
- **Accessibility:** Focus management and ARIA attributes
- **Professional Polish:** Smooth animations and transitions

You're becoming a real web developer! 🚀
