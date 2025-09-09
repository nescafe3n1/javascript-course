### **What You'll Learn This Hour:**

- Set up VS Code with essential JavaScript development extensions
- Configure Prettier for automatic code formatting with custom settings
- Install Live Server for automatic browser refresh (no more manual F5!)
- Create custom code snippets to speed up your coding
- Build a professional development workflow that saves hours daily

## Quick Review: Course Foundation

Before we start, make sure you remember:

- Basic JavaScript syntax and console usage
- File management and folder organization
- Git basics for version control
- Browser developer tools (F12)

**Ready to level up your development environment? Let's build professional tools!**

## 📊 Progress Tracker

- [ ] **Hour 1:** Professional Environment Setup ← _You are here_
- [ ] **Hour 2:** Problem-Solving Framework
- [ ] **Hour 3:** Research & Debugging Skills
- [ ] **Hour 4:** Advanced Challenges

## ⏰ Session Timeline

### **Opening: Professional Development Reality**

Understanding why professional developers use specific tools and how they dramatically improve productivity.

### **Section 1: Essential VS Code Extensions**

Install and configure the core extensions that every professional developer uses.

### **Section 2: Prettier Configuration**

Set up automatic code formatting with custom settings for consistent, professional code.

### **Section 3: Live Server Setup**

Configure automatic browser refresh to eliminate manual F5 refreshing forever.

### **Section 4: Custom Code Snippets**

Create personalized shortcuts that save hours of repetitive typing.

## 🛠️ Setup Your Developer Skills Environment

### Step 1: Add Developer Skills to Your Course

1. **Download Developer Skills zip file** (provided by instructor)
2. **Extract the contents** to get `03-developer-skills` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   └── 02-fundamentals-part-2/     (from Part 2)
   └── 03-developer-skills/        (new Developer Skills folder)
   ```

### Step 2: Open Developer Skills in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/003-developer-skills/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..

# Add the new Developer Skills folder
git add .
git commit -m "feat: add Developer Skills starter files and documentation"
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
03-developer-skills/
└── starter/
    ├── index.html
    ├── script.js
    └── docs/
        ├── 01_functions_and_scope.md
        ├── 02_arrays_and_data_manipulation.md
        ├── 03_objects_and_data_structures.md
        └── 04_dom_manipulation_and_interactivity.md
```

### **Step 5: Test Your Current Setup**

Let's start by creating some intentionally messy code that we'll improve throughout the hour:

```javascript
// Remember, we're gonna use strict mode in all scripts now!
"use strict";

////////////////////////////////////
// Professional Development Environment Setup

console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// Create some messy code - don't worry about formatting yet
const messyExample = function (name, age) {
  if (age >= 18) {
    return "Hello " + name + ", you are an adult";
  } else {
    return "Hello " + name + ", you are a minor";
  }
};

console.log("Current messy code example:", messyExample("John", 25));
console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");
```

**Verify it works:**

- Open `index.html` in browser
- Press F12 for Developer Tools
- Check Console tab
- Should see: "Part 2: Functions ready!"

**🎯 Current State:** This code works but looks unprofessional and hard to read. By the end of this hour, it will be automatically formatted beautifully!

## 📦 Section 1: Essential VS Code Extensions

### **Installing Core Extensions**

**Step 1: Open Extensions Panel**

- Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
- Or click the Extensions icon in the left sidebar

**Step 2: Install Prettier Extension**

1. Search for: `Prettier`
2. Install: **"Prettier - Code formatter"** by Prettier
3. Wait for "Enabled" status
4. Reload VS Code if prompted

**Step 3: Install Live Server Extension**

1. Search for: `Live Server`
2. Install: **"Live Server"** (the one with the colorful icon)
3. Look for "Go Live" button in status bar after installation

**Step 4: Install Additional Productivity Extensions**
Install these one by one:

- **Auto Rename Tag** (for HTML efficiency)
- **Bracket Pair Colorizer** (for better bracket matching)
- **GitLens** (for enhanced Git integration)

### **Test Your Extensions Installation**

Add this code to verify your extensions are working:

```javascript
////////////////////////////////////
// Extension Installation Test

function testExtensions() {
  const extensionTests = [
    { name: "Prettier", status: "installed", purpose: "code formatting" },
    { name: "Live Server", status: "installed", purpose: "auto refresh" },
    {
      name: "Auto Rename Tag",
      status: "installed",
      purpose: "HTML efficiency",
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log("Extension installation status:", extensionStatus);
```

**✅ Checkpoint:** All extensions show "Enabled" in Extensions panel, and you see "Go Live" in the status bar.

## 🎨 Section 2: Prettier Configuration

### **Creating Custom Prettier Settings**

**Step 1: Create .prettierrc Configuration File**

1. Right-click in the file explorer panel
2. Select "New File"
3. Name it exactly: `.prettierrc` (don't forget the dot!)
4. Click on the file to open it

**Step 2: Add Your Prettier Configuration**
Type this configuration exactly in your `.prettierrc` file:

```json
{
  "singleQuote": true,
  "arrowParens": "avoid",
  "printWidth": 80,
  "tabWidth": 2,
  "semi": true
}
```

**Step 3: Set Prettier as Default Formatter**

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: `Preferences: Open Settings (JSON)`
3. Add these settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### **Testing Prettier Formatting**

Go back to your `script.js` file and add this messy code:

```javascript
////////////////////////////////////
// Prettier Configuration Test

// This code has terrible formatting - Prettier will fix it!
const prettierTest = {
  firstName: "Sarah",
  lastName: "Johnson",
  skills: ["JavaScript", "React", "Node.js"],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = (items) => {
  return items.map((item) => {
    return item.toUpperCase();
  });
};

console.log(
  "Before Prettier formatting - this code works but looks unprofessional"
);
```

**🔥 The Magic Moment:** Save your file (`Ctrl+S` or `Cmd+S`) and watch Prettier automatically format everything!

## 🎯 Your Turn: Practice Prettier Formatting

### Exercise: Code Formatting Practice

Create this messy code and watch Prettier format it automatically:

```javascript
// Create this with terrible formatting:
const studentTest = {
  firstName: "your-name",
  skills: ["HTML", "CSS", "JavaScript"],
  experience: "beginner",
  goals: ["become-developer", "build-projects"],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

// Save the file and watch the magic happen!
```

**What to do:**

1. Copy this code into your `script.js` file
2. Make it intentionally messy (remove spaces, add extra lines)
3. Save the file (`Ctrl+S` or `Cmd+S`)
4. Watch Prettier automatically format it beautifully!

**Expected result:** Clean, professional formatting with consistent spacing and structure.

**✅ Checkpoint:** When you save, your code automatically transforms from messy to beautifully formatted with proper spacing, consistent quotes, and clean structure.

## 🔄 Section 3: Live Server Setup and Testing

### **Starting Live Server**

**Step 1: Launch Live Server**

1. Look at the bottom status bar in VS Code
2. Click the "Go Live" button
3. Your browser should automatically open to `http://127.0.0.1:5500`

**Step 2: Open Developer Console**

- Press `F12` or right-click and select "Inspect"
- Click the "Console" tab to see your JavaScript output

### **Testing Live Reload Functionality**

Add this code to test automatic browser updates:

```javascript
////////////////////////////////////
// Live Server Testing

// Test 1: Basic live reload
let liveServerTest = "Initial message - change #1";
console.log("Live Server test:", liveServerTest);

// Test 2: Time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// Test 3: Function testing
function demonstrateLiveReload() {
  const randomColor = ["red", "blue", "green", "purple", "orange"][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();
```

### **Live Reload Testing Exercise**

1. **Save your file** and watch your browser console update automatically
2. **Change the `liveServerTest` message** to "Updated message - change #2"
3. **Save again** and confirm the browser updates without manual refresh
4. **Add a new function** and save to see instant updates

```javascript
// Student Exercise: Add this function and test live reload
function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log("Current time:", now);
  return now;
}

showCurrentTime();
```

**✅ Checkpoint:** Every time you save a file, your browser console updates automatically without you pressing F5 or manually refreshing.

## ⚡ Section 4: Custom Code Snippets

### **Creating JavaScript Snippets**

**Step 1: Open Snippet Configuration**

1. Go to File → Preferences → Configure User Snippets
2. Select "JavaScript" from the language list
3. This opens the JavaScript snippets configuration file

**Step 2: Add Essential Snippets**
Replace the empty object with these useful snippets:

```json
{
  "Console Log": {
    "prefix": "cl",
    "body": "console.log($1);",
    "description": "Console log statement"
  },
  "Function Declaration": {
    "prefix": "func",
    "body": "function $1() {\n\t$2\n}",
    "description": "Function declaration"
  },
  "Arrow Function": {
    "prefix": "arrow",
    "body": "const $1 = ($2) => {\n\t$3\n};",
    "description": "Arrow function"
  },
  "For Loop": {
    "prefix": "forloop",
    "body": "for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {\n\t$3\n}",
    "description": "For loop"
  }
}
```

### **Testing Your Snippets**

Go back to your `script.js` file and test these shortcuts:

```javascript
////////////////////////////////////
// Code Snippets Testing

// Type 'cl' then press Tab - it should expand to console.log();
console.log("Testing snippet functionality - cl + Tab created this!");

// Type 'func' then press Tab - it should create a function template
function testSnippets() {
  console.log("Function created with snippet - func + Tab!");
  return "Snippets working perfectly!";
}

testSnippets();

// Type 'arrow' then press Tab - it should create an arrow function template
const snippetTest = (message) => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest("Snippets save so much typing time!");
```

**✅ Checkpoint:** Typing `cl` + Tab creates `console.log();`, typing `func` + Tab creates a function template.

## 🎉 Hour 1 Complete! Your Professional Environment

### **Final Verification Code**

Add this summary to confirm everything is working:

```javascript
////////////////////////////////////
// Environment Setup Verification

console.log("🎉 Professional Development Environment Complete!");
console.log("✅ Prettier: Automatic code formatting");
console.log("✅ Live Server: Automatic browser refresh");
console.log("✅ Snippets: Fast code generation");
console.log("✅ Extensions: Enhanced productivity");
console.log("Ready for professional JavaScript development!");

// Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; // work days

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();
```

## 📊 Git Commit Time!

Now let's save this professional setup to your portfolio:

### **Commit Your Professional Environment**

```bash
git add .
git commit -m "feat: configure professional development environment

- Install and configure Prettier for automatic code formatting
- Set up Live Server for automatic browser refresh and live reload
- Create custom code snippets for faster JavaScript development
- Install essential VS Code extensions for enhanced productivity
- Establish professional developer workflow and file organization"

git push origin main
```

## 🔍 Troubleshooting Common Issues

### **Prettier Not Formatting Automatically**

- Check Extensions panel - ensure Prettier shows "Enabled"
- Verify Prettier is set as default formatter
- Ensure "Format on Save" is enabled in settings

### **Live Server Button Missing**

- Reinstall Live Server extension
- Restart VS Code
- Check status bar for "Go Live" button

### **Browser Not Refreshing**

- Check if port 5500 is available
- Disable firewall temporarily
- Close other Live Server instances

### **Snippets Not Working**

- Verify snippet configuration saved correctly
- Try typing trigger word + Tab
- Restart VS Code if needed

## 🎯 Check Your Understanding

Before moving to Hour 2, make sure you can:

- [ ] Install and configure VS Code extensions properly
- [ ] Set up Prettier for automatic code formatting
- [ ] Use Live Server for automatic browser refresh
- [ ] Create and use custom code snippets
- [ ] Navigate VS Code efficiently with keyboard shortcuts

### Quick Quiz:

1. What's the difference between Prettier and Live Server?
2. How do you trigger a code snippet in VS Code?
3. What does "Format on Save" do?
4. How do you start Live Server?
5. Why are code snippets valuable for developers?

### Quiz Answers:

1. Prettier formats code automatically; Live Server refreshes browser automatically
2. Type the trigger word and press Tab
3. Automatically formats code when you save the file
4. Click "Go Live" in the status bar or right-click HTML file
5. They save time by generating common code patterns quickly

## 🎯 What's Next in Hour 2?

You now have a professional development environment! Hour 2 introduces the developer mindset:

- **Learning how to learn** programming effectively
- **The 4-step problem-solving framework** every developer uses
- **Breaking complex problems** into manageable pieces
- **Tackling real coding challenges** with systematic approaches

You'll transform from someone who codes to someone who **thinks like a developer!**

## ✅ Success Checklist for Hour 1

**Environment Setup:**

- [ ] Prettier formats code automatically when saving
- [ ] Live Server refreshes browser automatically when files change
- [ ] All extensions show as "Enabled" in Extensions panel
- [ ] Code snippets expand correctly with Tab key

**Professional Skills Gained:**

- [ ] Automated code formatting eliminates manual spacing work
- [ ] Live reload eliminates manual browser refresh cycles
- [ ] Custom snippets reduce repetitive typing by 80%
- [ ] Professional workflow matches industry standards

**Time Savings Achieved:**

- [ ] ~550 keystrokes saved daily through snippets
- [ ] ~50 manual browser refreshes eliminated daily
- [ ] ~30 minutes formatting work automated daily
- [ ] Professional consistency in all code projects

## 📚 Key Concepts Summary

| Concept                   | Purpose                         | Example                           |
| ------------------------- | ------------------------------- | --------------------------------- |
| **VS Code Extensions**    | Enhance development environment | Prettier, Live Server, GitLens    |
| **Prettier**              | Automatic code formatting       | Formats on save with custom rules |
| **Live Server**           | Automatic browser refresh       | No more manual F5 refreshing      |
| **Code Snippets**         | Fast code generation            | `cl` + Tab = `console.log()`      |
| **Professional Workflow** | Industry-standard development   | Automated tools + efficiency      |

**Remember: Professional developers use these tools daily. You now have the same efficiency as experienced developers!**

🚀 Congratulations! You now work with the same professional tools and efficiency as experienced developers. Your development speed and code quality just leveled up significantly!
