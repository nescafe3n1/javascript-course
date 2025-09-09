# 🧠 Developer Skills Hour 2: Learning How to Code & Problem-Solving Framework - Student Guide

## 📋 Hour 2: Thinking Like a Developer

### **What You'll Learn This Hour:**

- Understand the psychology and methodology of learning to code effectively
- Master the 4-step problem-solving framework used by professional developers
- Practice breaking complex problems into manageable sub-problems
- Apply systematic thinking to tackle real coding challenges
- Build confidence in independent problem-solving and continuous learning
- Develop the mindset shift from tutorial follower to independent developer

## Quick Review: Hour 1 Foundation

Before we start, make sure you remember:

- VS Code extensions and professional development environment
- Prettier for automatic code formatting
- Live Server for automatic browser refresh
- Code snippets for faster development

**Ready to think like a professional developer? Let's master problem-solving!**

## 📊 Progress Tracker

- [x] **Hour 1:** Professional Environment Setup ✅
- [ ] **Hour 2:** Problem-Solving Framework ← _You are here_
- [ ] **Hour 3:** Research & Debugging Skills
- [ ] **Hour 4:** Advanced Challenges

## ⏰ Session Timeline

### **Opening: Developer Mindset**

Understanding what learning to code really involves and how professionals think differently.

### **Section 1: The 4-Step Framework**

Learn the systematic problem-solving approach used by every professional developer.

### **Section 2: Practical Application**

Apply the framework to solve a real thermometer problem step by step.

### **Section 3: Extended Challenge**

Practice the framework again with an enhanced version of the problem.

## 🚀 Getting Started

### **The Learning Reality Check**

Most people think coding is about memorizing syntax. Wrong. Coding is about solving problems systematically.

**The Real Learning Journey:**

- Learn basics → Feel confident → Try real project → Get stuck everywhere → Question everything → Keep pushing through → Gradual improvement → Eventual success

**Key Insight:** Problem-solving matters more than syntax memorization.

### **Opening Code**

```javascript
// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
"use strict";

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

/*
The Reality of Learning to Code:
- Most people expect: Learn syntax → Become developer
- Actual process: Learn basics → Feel confident → Try real project → 
  Get stuck everywhere → Question everything → Keep pushing → 
  Gradual improvement → Success
- Key insight: Problem-solving matters more than syntax memorization
*/

console.log(
  "Key insight: Professional developers think systematically, not just code"
);

/*
Beginner vs Professional Problem-Solving Approaches:

BEGINNER APPROACH:
1. Jump straight into coding
2. Get stuck immediately  
3. Google random solutions
4. Copy-paste without understanding
5. Get frustrated when nothing works

PROFESSIONAL APPROACH:
1. Understand the problem completely
2. Break into smaller sub-problems
3. Research specific solutions  
4. Implement step by step
5. Test and debug systematically

Today we learn the professional approach!
*/

console.log("Goal: Transform from beginner to professional problem-solver");
```

## 🧠 Section 1: The 4-Step Problem-Solving Framework

### **The Framework Every Professional Uses**

Every professional developer uses some version of this framework. It's not just for coding - it's for any complex problem. Master this, and you can tackle problems you've never seen before with confidence.

### **The 4 Steps**

**STEP 1: UNDERSTAND THE PROBLEM**

- Ask the right questions until 100% clear
- Key questions:
  - What exactly needs to be accomplished?
  - What are the inputs and expected outputs?
  - What are the edge cases and constraints?
  - Are there any special requirements?
- Common mistake: Assuming you understand without clarification

**STEP 2: DIVIDE AND CONQUER**

- Break big problem into small sub-problems
- Strategy:
  - Identify the main components
  - Find dependencies between components
  - Order sub-problems logically
  - Ensure each piece is solvable independently
- Benefit: Small problems are much easier to solve

**STEP 3: RESEARCH SOLUTIONS**

- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google with specific keywords
- Research tips:
  - Be specific in search terms
  - Look for official documentation first
  - Understand solutions before implementing
  - Adapt solutions to your specific case

**STEP 4: IMPLEMENT AND TEST**

- Code the solution step by step with testing
- Approach:
  - Start with the simplest sub-problem
  - Test each piece before moving on
  - Combine solutions gradually
  - Debug systematically if issues arise
- Testing mindset: Assume nothing works until proven otherwise

### **Framework in Code Comments**

```javascript
////////////////////////////////////
// The 4-Step Problem-Solving Framework

/*
STEP 1: UNDERSTAND THE PROBLEM
- Ask the right questions until 100% clear
- Key questions:
  * What exactly needs to be accomplished?
  * What are the inputs and expected outputs?
  * What are the edge cases and constraints?
  * Are there any special requirements?
*/

/*
STEP 2: DIVIDE AND CONQUER  
- Break big problem into small sub-problems
- Strategy:
  * Identify the main components
  * Find dependencies between components
  * Order sub-problems logically
  * Ensure each piece is solvable independently
*/

/*
STEP 3: RESEARCH SOLUTIONS
- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google
- Research tips: Be specific, understand before implementing
*/

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/

console.log("4-Step Framework: Understand → Divide → Research → Implement");
```

## 🌡️ Section 2: Practical Problem-Solving Application

### **Real-World Challenge: Smart Home Thermometer**

Time for hands-on practice! We'll solve a real problem that a developer might encounter building a smart home application.

**The Problem:**

```
We work for a company building a smart home thermometer.
Our task: "Given an array of temperatures from one day,
calculate the temperature amplitude. Keep in mind that
sometimes there might be a sensor error."

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
```

### **Apply the 4-Step Framework**

**STEP 1: UNDERSTANDING THE PROBLEM**
Let's ask the right questions:

1. **What is temperature amplitude?**
   Answer: Difference between highest and lowest temperature

2. **How do we calculate max and min temperatures?**
   Answer: Loop through array, track highest and lowest values

3. **What's a sensor error and what to do?**
   Answer: 'error' string in data - we should ignore these values

4. **What should the function return?**
   Answer: A number representing the amplitude (max - min)

**STEP 2: BREAKING UP INTO SUB-PROBLEMS**

1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array
4. Subtract min from max (amplitude) and return it

Notice how the big scary problem became 4 simple tasks!

### **Implementation**

```javascript
////////////////////////////////////
// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

/*
PROBLEM STATEMENT:
Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

STEP 1: UNDERSTANDING THE PROBLEM
- Temperature amplitude = difference between highest and lowest temperature
- Sensor errors = 'error' strings that should be ignored
- Return a number representing amplitude (max - min)

STEP 2: SUB-PROBLEMS
1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array  
4. Subtract min from max and return result
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
```

**Expected Result:** Max should be 17, min should be -6, so amplitude should be 23.

## 🔄 Section 3: Extended Challenge Practice

### **New Requirement: Two Arrays**

Let's practice the framework again with changing requirements (this happens all the time in real development):

**Problem 2:**

```
Function should now receive TWO arrays of temperatures instead of one,
but still calculate the amplitude across both arrays combined.
```

### **Apply Framework Again**

**STEP 1: UNDERSTAND THE PROBLEM**

- Do we need to implement functionality twice? NO!
- Solution: Merge the two arrays into one, then use existing logic
- Question: How do we merge two arrays in JavaScript?

**STEP 2: BREAK INTO SUB-PROBLEMS**

1. Merge two arrays into one combined array
2. Apply existing temperature amplitude logic

That's it! Very simple breakdown.

**STEP 3: RESEARCH**
Need to research: How to merge/combine two arrays in JavaScript?
Quick search reveals: `array1.concat(array2)` method

**STEP 4: IMPLEMENT**
Combine and reuse existing code.

### **Extended Implementation**

```javascript
////////////////////////////////////
// EXTENDED PROBLEM: Two Arrays

/*
PROBLEM 2: Function should handle TWO arrays of temperatures

STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm  
STEP 3: RESEARCH - array1.concat(array2) method
STEP 4: IMPLEMENT - Combine and reuse existing code
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);
```

## 🎯 Framework Mastery Reflection

### **What We Accomplished**

**PROBLEM 1 - Temperature Amplitude:**

- ✅ Step 1: Asked questions to understand amplitude calculation
- ✅ Step 2: Broke into 4 simple sub-problems
- ✅ Step 3: Used existing knowledge (no research needed)
- ✅ Step 4: Implemented and tested systematically

**PROBLEM 2 - Two Arrays:**

- ✅ Step 1: Understood we needed to merge arrays first
- ✅ Step 2: Identified 2 sub-problems (merge + existing logic)
- ✅ Step 3: Researched array.concat() method
- ✅ Step 4: Implemented efficiently by reusing existing code

### **Key Insights**

- Complex problems become manageable when broken down
- Systematic approach prevents getting overwhelmed
- Research fills knowledge gaps efficiently
- Good problem decomposition enables code reuse

```javascript
////////////////////////////////////
// PROBLEM-SOLVING FRAMEWORK MASTERY

/*
FRAMEWORK SUCCESS ANALYSIS:
- ✅ Solved complex problems systematically
- ✅ Broke problems into manageable pieces
- ✅ Applied research when needed
- ✅ Implemented and tested successfully
- ✅ Adapted to changing requirements efficiently
*/

console.log("🎯 Framework mastered - ready for independent problem solving!");
```

## 📊 Git Commit Time!

You now think like a professional developer! Let's save this major milestone:

### **Commit Your Problem-Solving Skills**

```bash
git add .
git commit
```

**Copy this commit message:**

```
feat: implement problem-solving framework and methodology

- Master the 4-step problem-solving framework used by professionals
- Apply systematic thinking to break complex problems into sub-problems
- Practice problem decomposition with temperature amplitude calculator
- Implement research methodology for unknown solutions
- Develop confidence in tackling unfamiliar programming challenges
- Transform from tutorial follower to independent problem solver
```

```bash
git push origin main
```

## 🎯 Check Your Understanding

Before moving to Hour 3, make sure you can:

- [ ] Apply the 4-step problem-solving framework systematically
- [ ] Break complex problems into manageable sub-problems
- [ ] Ask clarifying questions before coding
- [ ] Research solutions when knowledge gaps exist
- [ ] Implement solutions step by step with testing

### Quick Quiz:

1. What are the 4 steps of the problem-solving framework?
2. Why is it important to understand the problem before coding?
3. What's the benefit of breaking problems into sub-problems?
4. When should you research solutions vs. using existing knowledge?
5. How do you test each piece of your solution?

### Quiz Answers:

1. Understand → Divide → Research → Implement
2. Prevents wasted time and ensures you solve the right problem
3. Small problems are easier to solve and debug
4. Research when you don't know how to solve a sub-problem
5. Test each piece individually before combining them

## 🎯 What's Next in Hour 3?

You now think systematically about problems like a professional developer! Hour 3 builds on this foundation:

- **Research mastery:** Google, Stack Overflow, and MDN like a pro
- **Debugging fundamentals:** Finding and fixing bugs systematically
- **Browser developer tools:** Professional debugging techniques
- **Error identification:** Resolution strategies that make you self-sufficient

You'll become completely independent in finding solutions and fixing problems!

## 📚 Key Concepts Summary

| Concept                       | Purpose                                       | Example                                           |
| ----------------------------- | --------------------------------------------- | ------------------------------------------------- |
| **4-Step Framework**          | Systematic problem-solving approach           | Understand → Divide → Research → Implement        |
| **Problem Decomposition**     | Break complex problems into manageable pieces | Temperature amplitude → 4 sub-problems            |
| **Research Methodology**      | Find solutions for unknown sub-problems       | Google, Stack Overflow, MDN documentation         |
| **Systematic Implementation** | Build solutions step by step with testing     | Test each piece before combining                  |
| **Professional Mindset**      | Think like experienced developers             | Ask questions, research, implement systematically |

**Remember: Professional developers use this framework daily. You now think systematically about any programming challenge!**

_🚀 Congratulations! You now possess the systematic thinking framework that transforms beginners into professional problem-solvers capable of tackling any programming challenge independently!_
