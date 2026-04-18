let a="shashi"
console.log(`${a=="shashi"?"yes":"no"}`)

let c=a.split("").reverse().join("");
console.log(c)

const numbers = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(numbers)];

console.log(unique);
// [1, 2, 3, 4]