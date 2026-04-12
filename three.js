// 1. The classic String vs Number comparison
const ageNumber = 25;
const ageString = "25";

console.log(ageNumber == ageString);  // true  (Coerces string to number)
console.log(ageNumber === ageString); // false (Types are different)

// 2. The "Falsy" values trap
// In JS, 0, empty strings, and false can be loosely equal
const score = 0;
const emptyStr = "";

console.log(score == emptyStr);       // true  (Both are "falsy")
console.log(score === emptyStr);      // false (Number vs String)

// 3. Objects and Arrays (The Reference Trap)
// Both == and === behave the same here: they check memory location
const arrayA = [1, 2];
const arrayB = [1, 2];

console.log(arrayA == arrayB);        // false (Different spots in memory)
console.log(arrayA === arrayB);       // false