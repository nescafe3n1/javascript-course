// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////
// Professional Development Environment Setup

console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

const messyExample = function (name, age) {
  if (age >= 18) {
    return 'Hello ' + name + ', you are an adult';
  } else {
    return 'Hello ' + name + ', you are a minor';
  }
};

console.log('Current messy code example:', messyExample('John', 25));
console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

////////////////////////////////////
// Extension Installation Test

function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

////////////////////////////////////
// Prettier Configuration Test

// This code has terrible formatting - Prettier will fix it!
const prettierTest = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  skills: ['JavaScript', 'React', 'Node.js'],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};

console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);

const studentTest = {
  firstName: 'your-name',
  skills: ['HTML', 'CSS', 'JavaScript'],
  experience: 'beginner',
  goals: ['become-developer', 'build-projects'],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

////////////////////////////////////
// Live Server Testing

let liveServerTest = 'Initial message - change #1';
console.log('Live Server test:', liveServerTest);

const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

function demonstrateLiveReload() {
  const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();

////////////////////////////////////
// Code Snippets Testing

console.log("Testing snippet functionality - cl + Tab created this!");

function testSnippets() {
  console.log("Function created with snippet - func + Tab!");
  return "Snippets working perfectly!";
}

testSnippets();

const snippetTest = (message) => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest("Snippets save so much typing time!");

////////////////////////////////////
// Environment Setup Verification

console.log("🎉 Professional Development Environment Complete!");
console.log("✅ Prettier: Automatic code formatting");
console.log("✅ Live Server: Automatic browser refresh");
console.log("✅ Snippets: Fast code generation");
console.log("✅ Extensions: Enhanced productivity");
console.log("Ready for professional JavaScript development!");

function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11;
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22;

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();

// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

console.log("Key insight: Professional developers think systematically, not just code");

console.log('4-Step Framework: Understand → Divide → Research → Implement');

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

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

console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

console.log(
  'Goal: Master research and debugging like a professional developer'
);
console.log(
  'Strategic research builds lasting knowledge, not just quick fixes'
);

////////////////////////////////////
// STACK OVERFLOW RESEARCH RESULTS

function reverseStringMethods(str) {
  const method1 = str.split("").reverse().join("");

  let method2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }

  const method3 = [...str].reverse().join("");

  return { method1, method2, method3 };
}

// Test our Stack Overflow research results
const reverseResults = reverseStringMethods("hello");
console.log("Stack Overflow research results:", reverseResults);

////////////////////////////////////
// MDN DOCUMENTATION MASTERY

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  // Verify concat doesn't modify original arrays
  console.log('Original array1 unchanged:', array1);

  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log('MDN documentation applied:', concatResults);

////////////////////////////////////
// BROWSER DEVELOPER TOOLS MASTERY

function demonstrateConsoleDebugging(data) {
  console.group("Debugging Session");

  console.log("Input data:", data);

  if (typeof data !== "object") {
    console.warn("Warning: Expected object, got", typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: "John", age: 30, city: "New York" };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

////////////////////////////////////
// DEBUGGER STATEMENT AND BREAKPOINTS

function stepThroughDebugging(numbers) {
  debugger;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === "number") {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });

  return average;
}

const mixedNumbers = [10, 20, "error", 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log("Debug session result:", debugResult);

function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores)) {
    return 'Error: Input must be an array';
  }

  const validScores = scores.filter(
    score => typeof score === 'number' && !isNaN(score)
  );

  if (validScores.length === 0) {
    return 'Error: No valid scores to calculate average';
  }

  const sum = validScores.reduce((a, b) => a + b, 0);
  return sum / validScores.length;
}

// Developer Skills Hour 4 - Advanced Problem-Solving & Real-World Challenges

console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

console.log('Ready to tackle complex problems using systematic approaches');
console.log('Challenge: Build solutions that work under pressure');

////////////////////////////////////
// MAIN CHALLENGE: Weather Forecast String Builder

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log("..." + str);
}

printForecast(data1);
printForecast(data2);

console.log("Weather forecast formatter working correctly!");

function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error("Invalid input: Expected array of 7 daily hours");
    return null;
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return {
    totalHours,
    averageHours,
    maxDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: dailyHours
      .map((hours, index) => (hours > 0 ? dayNames[index] : null))
      .filter((day) => day !== null),
  };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log("Optimized analysis:", optimizedAnalysis);

////////////////////////////////////
// SYSTEMATIC DEBUGGING AND ENHANCEMENT

function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }

  const { unit = "°C", separator = "...", includeIndex = true } = options;

  let result = "";

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  return separator + result.slice(0, -separator.length);
}

console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log(
  "Enhanced function (custom):",
  enhancedForecastFunction(testData, {
    unit: "°F",
    separator: " | ",
    includeIndex: true,
  })
);

console.log("🎯 Complete developer skills successfully applied!");
console.log("Legacy code debugged, fixed, and enhanced systematically")
