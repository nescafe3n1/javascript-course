# Hour 2: Keyboard Events & Advanced UX

## 🎯 What You'll Learn This Hour:

- Master keyboard event handling with `keydown` events
- Implement ESC key functionality for modal closing
- Use visibility guards to prevent unnecessary operations
- Understand global event listeners and event object properties
- Apply professional UX patterns for keyboard accessibility
- Learn focus management and ARIA attributes for accessibility

## Quick Review: Previous Course Foundation

Before we start, make sure you remember:

- DOM element selection and caching
- Class manipulation with `classList.add()` and `classList.remove()`
- Event listeners and helper functions
- Modal open/close functionality from Hour 1

**Ready to make your modal truly professional with keyboard accessibility? Let's enhance the user experience!**

## 📊 Progress Tracker

- [x] **Hour 1:** Modal Foundation & Class Toggling ← _Completed_
- [ ] **Hour 2:** Keyboard Events & Advanced UX ← _You are here_

## ⏰ Session Timeline

- Opening: Keyboard Accessibility & Professional UX
- Section 1: Keyboard Event Fundamentals
- Section 2: ESC Key Implementation with Guards
- Section 3: Advanced UX & Accessibility Features

## 🛠️ Setup Your Enhanced Modal Development

### Step 1: Verify Hour 1 Code is Working

Make sure your `script.js` from Hour 1 is working correctly:

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
- [ ] No JavaScript errors in console

### Step 2: Prepare for Keyboard Events

Let's start by understanding what we're building today:

```javascript
// Modal Development Hour 2 - Keyboard Events & Advanced UX
'use strict';

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

/*
What We're Adding Today:
- ESC key functionality to close the modal
- Focus management for keyboard users
- ARIA attributes for screen reader accessibility
- Professional UX patterns

Key Concepts:
- Global keyboard event listeners
- Event object properties (e.key, e.code)
- Visibility guards to prevent unnecessary operations
- Focus management and accessibility
*/

console.log('Enhanced modal development ready!');
```

## Section 1: Keyboard Event Fundamentals

### Why This Matters

Keyboard events are different from click events. They're global - they can happen anywhere on the page. We need to understand how to listen for them and identify which key was pressed.

### Understanding Keyboard Events

```javascript
// Let's start by understanding keyboard events
console.log('Keyboard events test');

// Add a basic keyboard event listener
document.addEventListener('keydown', function (e) {
  // Log the event object to see what we get
  console.log('Key pressed:', e);

  // Log just the key property
  console.log('Key name:', e.key);
});
```

**Key Points:**

- `keydown` fires when a key is pressed down
- `keypress` fires when a character is typed (ignores special keys)
- `keyup` fires when a key is released
- `e.key` gives you the actual character (like 'Escape' or 'a')
- `e.code` gives you the physical key location (like 'Escape' or 'KeyA')

### Your Turn

1. **Add the code above** to your `script.js` file
2. **Save and test** - press any key and check the console
3. **Try different keys** - letters, numbers, special keys
4. **Notice** how `e.key` shows the actual character

### Testing Specific Keys

```javascript
// Let's modify our event listener to be more specific
document.addEventListener('keydown', function (e) {
  // Only respond to ESC key
  if (e.key === 'Escape') {
    console.log('ESC key pressed!');
  }
});
```

**Key Points:**

- We use `e.key === 'Escape'` to detect the ESC key
- The comparison is case-sensitive
- Only ESC key presses will trigger the message

### Your Turn

1. **Replace** the previous keyboard event code with this version
2. **Save and test** - press ESC and other keys
3. **Verify** only ESC triggers the message
4. **Try** different keys to confirm the filtering works

## Section 2: ESC Key Implementation with Guards

### Why This Matters

Now let's connect the ESC key to our modal closing. But we need to be smart about it - we only want to close the modal if it's currently open. This prevents unnecessary work and confusing behavior.

### Adding ESC Key Close

```javascript
// Add ESC key functionality to close the modal
document.addEventListener('keydown', function (e) {
  // Check if ESC key was pressed AND modal is visible
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});
```

**Key Points:**

- `e.key === 'Escape'` detects the ESC key
- `!modalEl.classList.contains('hidden')` checks if modal is visible
- The `!` means "not" - so this checks if the modal does NOT contain the hidden class
- We only close the modal if both conditions are true

### Your Turn

1. **Add the ESC key code** to your `script.js` file
2. **Save and test** - open the modal and press ESC
3. **Verify** the modal closes when you press ESC
4. **Test** that ESC doesn't do anything when the modal is already closed

### Testing and Debugging

```javascript
// Let's add some debugging to see what's happening
document.addEventListener('keydown', function (e) {
  // Log what's happening for debugging
  console.log(
    'Key pressed:',
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
  );

  // Check if ESC key was pressed AND modal is visible
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});
```

**Key Points:**

- The console.log helps us understand what's happening
- We can see both the key pressed and whether the modal is visible
- This helps debug any issues with the functionality

### Your Turn

1. **Add the debugging code** to see what's happening
2. **Test different scenarios:**
   - Modal closed, press ESC (should do nothing)
   - Modal open, press ESC (should close modal)
   - Modal open, press other keys (should do nothing)
3. **Remove the console.log** when you're satisfied it works

## Section 3: Advanced UX & Accessibility Features

### Why This Matters

Professional modals manage focus properly and are accessible to screen readers. When the modal opens, focus should move to the modal. When it closes, focus should return to the button that opened it.

### Focus Management

```javascript
// Add focus management variables
let lastFocusedButton = null;

// Enhance openModal function with focus management
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  // Move focus to the modal
  modalEl.focus();
  // Store which button opened the modal
  lastFocusedButton = document.activeElement;
};

// Enhance closeModal function to restore focus
const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  // Restore focus to the button that opened the modal
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};
```

**Key Points:**

- `modalEl.focus()` moves focus to the modal when it opens
- `document.activeElement` gets the currently focused element
- We store the focused element before opening the modal
- We restore focus when closing the modal

### Your Turn

1. **Add the focus management code** to your `script.js` file
2. **Replace** your existing `openModal` and `closeModal` functions
3. **Save and test** - open and close the modal
4. **Notice** how focus moves to the modal and back to the button

### ARIA Attributes for Accessibility

```javascript
// Add ARIA attributes for screen reader accessibility
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
```

**Key Points:**

- `role="dialog"` tells screen readers this is a modal dialog
- `aria-modal="true"` indicates it's a modal that blocks interaction
- `aria-label` provides a descriptive label for the close button
- These attributes help screen readers understand the modal's purpose

### Your Turn

1. **Add the ARIA attributes** to your `script.js` file
2. **Save and test** - the modal is now more accessible
3. **Verify** the attributes are added by checking the HTML in Developer Tools

## 🧪 Final Verification

Your complete `script.js` should look like this:

```javascript
'use strict';

// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Focus management
let lastFocusedButton = null;

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// Keyboard events
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// Accessibility attributes
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
```

**Test Checklist:**

- [ ] Modal opens when clicking any "Show modal" button
- [ ] Modal closes when clicking the "×" button
- [ ] Modal closes when clicking outside (overlay)
- [ ] Modal closes when pressing ESC key
- [ ] Focus moves to modal when opened
- [ ] Focus returns to button when closed
- [ ] ARIA attributes are present in HTML
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
feat(modal): add keyboard accessibility, focus management, and ARIA attributes
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

### **ESC key doesn't work at all**

- Check if the event listener is attached to `document`
- Verify the key comparison uses `'Escape'` (case-sensitive)
- Confirm the event listener is added after the modal elements exist

### **ESC key works but closes modal even when it's already closed**

- Check if visibility guard is present
- Verify `!modalEl.classList.contains('hidden')` condition
- Confirm the guard is in the correct position

### **Focus management not working**

- Check if `lastFocusedButton` variable is declared
- Verify focus is set in both open and close functions
- Confirm the element can receive focus

### **ARIA attributes not working**

- Check if `setAttribute` is called after element selection
- Verify attribute names and values are correct
- Confirm elements exist before setting attributes

### **Multiple copies of listeners**

- Avoid re-binding in hot-reload loops
- Define event listeners once per page load

## ✅ Hour Checklist

- [ ] Successfully added keyboard event listener to `document`
- [ ] ESC key closes the modal when it's open
- [ ] ESC key does nothing when modal is closed
- [ ] Focus moves to modal when opened
- [ ] Focus returns to button when closed
- [ ] ARIA attributes are added to modal and close button
- [ ] All functionality works together smoothly
- [ ] Code is clean and well-organized
- [ ] All changes committed to Git repository

## 📚 Key Concepts Summary

| Concept                  | Purpose                        | Example                                                 |
| ------------------------ | ------------------------------ | ------------------------------------------------------- |
| `keydown`                | Listen for key press events    | `document.addEventListener('keydown', handler)`         |
| `e.key`                  | Get the key that was pressed   | `e.key === 'Escape'`                                    |
| `classList.contains()`   | Check if element has a class   | `modalEl.classList.contains('hidden')`                  |
| `focus()`                | Move focus to an element       | `modalEl.focus()`                                       |
| `document.activeElement` | Get currently focused element  | `lastFocusedButton = document.activeElement`            |
| `setAttribute()`         | Add HTML attributes            | `modalEl.setAttribute('role', 'dialog')`                |
| Visibility Guard         | Prevent unnecessary operations | `if (condition && !modal.classList.contains('hidden'))` |

## 🎯 What's Next?

Congratulations! You've built a professional, accessible modal component that follows industry standards. Your modal now includes:

- **Keyboard Accessibility:** ESC key closing
- **Focus Management:** Proper focus handling for keyboard users
- **Screen Reader Support:** ARIA attributes for accessibility
- **Professional UX:** Industry-standard modal behavior

### **Advanced Features You Could Add:**

- **Animations:** Smooth open/close transitions with CSS
- **Multiple Modals:** Handle multiple modals on the same page
- **Form Integration:** Add form validation and submission
- **Customization:** Make modal content and styling configurable
- **Touch Support:** Add swipe gestures for mobile devices

### **Real-World Applications:**

Your modal is now ready for:

- **Web Applications:** Login forms, confirmations, settings
- **E-commerce:** Product details, shopping cart, checkout
- **Content Management:** Image galleries, video players
- **User Interface:** Notifications, alerts, tooltips

You're becoming a truly professional web developer! 🚀
