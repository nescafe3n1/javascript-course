console.log("Fundamentals Part 2");

// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function Declaration 
function logger () {
    console.log("This function is working");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2, 4);
console.log(appleOrangeJuice);

// DRY - Dont Repeat Yourself

////////////////////////////////////////////////////////////////////////
// Function Expressions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge(2004);
console.log(age1);

// Parameters

function calcAge2(birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

const myAge = calcAge2(2004, 2025);
const someonesAge = calcAge2(2005, 2025);

console.log(`I am ${myAge} years old`);
console.log(`His age is ${someonesAge} years old`)

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah")); 
// Missing parameters become undefined

function calcAge3 (birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement (birthYear, firstName) {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement (2004, "Shem"));
console.log(yearsUntilRetirement (2004, "Leueil"));

const globalVar = `I am global`;

function testScope () {
    const localVar = `I am local`;
    console.log(globalVar);
    console.log(localVar);
}

testScope();
// console.log(localVar);
console.log(globalVar);

const userName = "Jonas"; 

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; 
  const timestamp = new Date().toLocaleTimeString();

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));

// Challenge

function calcAverage(score1, score2, score3) {
    const calcScoreAve = (score1 + score2 + score3) / 3;
    return calcScoreAve; 
};

function checkWinner(aveDolph, aveKoala) {
    if (aveDolph > 2 * aveKoala) {
        return `Dolphin Wins! (${aveDolph} vs ${aveKoala})`;
    } else if (aveDolph < 2 * aveKoala) {
        return `Koala  Wins! (${aveKoala} vs ${aveDolph})`;
    } else {
        return `No team wins! Dolphins: ${avgDolph}, Koalas: ${avgKoala}`;
    }
}


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));