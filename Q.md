# 🚀 JavaScript Revision – Interview Style Questions

> ⚠️ Rules:
>
> * Try to answer without notes first
> * Speak answers out loud (like interview)
> * Write code where needed

---

# 1. Variables & Data Types

1. What is the difference between `var`, `let`, and `const`?
2. What are primitive data types in JavaScript?
3. What is the difference between `null` and `undefined`?
4. Can you reassign and redeclare variables using `let` and `const`?
5. What is dynamic typing in JavaScript?

---

# 2. Operators & Conditionals

1. Difference between `==` and `===`?
2. What are logical operators? Explain with examples.
3. How does the ternary operator work?
4. What is type coercion? Give examples.
5. Predict output:

```js
console.log("5" + 2);
console.log("5" - 2);
```

---

# 3. Loops & Functions

1. Difference between `for`, `for-in`, and `for-of`?
2. What is a function in JavaScript?
3. What is the difference between function declaration and function expression?
4. What are arrow functions?
5. Predict output:

```js
function test() {
  return
  10;
}
console.log(test());
```

---

# 4. Strings

1. What are template literals?
2. Difference between `slice()` and `substring()`?
3. How do you reverse a string?
4. What are escape characters?
5. Predict output:

```js
let str = "hello";
console.log(str[1]);
```

---

# 5. Arrays

1. Difference between `map()`, `filter()`, and `reduce()`?
2. What does `splice()` do?
3. Difference between `slice()` and `splice()`?
4. How do you remove duplicates from an array?
5. Predict output:

```js
const arr = [1,2,3];
arr.push(4);
console.log(arr);
```

---

# 6. DOM Basics

1. What is DOM?
2. Difference between `getElementById` and `querySelector`?
3. What is the difference between `innerHTML` and `textContent`?
4. How do you create and append elements in DOM?
5. What is BOM?

---

# 7. Events

1. What is event bubbling?
2. What is event capturing?
3. What is event delegation?
4. Difference between `onclick` and `addEventListener`?
5. How do you prevent default behavior?

---

# 8. Async JavaScript

1. What is a callback?
2. What is callback hell?
3. What is a Promise?
4. Difference between `.then()` and `async/await`?
5. What is error handling in async code?

---

# 9. OOP & Prototypes

1. What is a prototype in JavaScript?
2. Difference between class and object?
3. What is inheritance?
4. What is the use of `super` keyword?
5. What is `instanceof`?

---

# 10. Advanced JavaScript

1. What is hoisting?
2. What is scope? Types of scope?
3. What is an IIFE?
4. What is destructuring?
5. What is the spread operator?

---

# ✅ Revision Strategy

* Do 2 topics per day
* Speak answers like interview
* Write tricky outputs manually

---

🔥 When stuck, ask:
"Explain question X"

I’ll explain in interview style.

---

# 🧪 Practice Section (Solve These – Coding + Output Based)

## 1. Variables & Scope

1. Predict output:

```js
var a = 10;
function test() {
  console.log(a);
  var a = 20;
}
test();
```

2. Fix the bug:

```js
let a = 10;
if(true){
  let a = 20;
}
console.log(a);
```

---

## 2. Functions & Closures

1. Write a function that returns another function which adds a number.

2. Predict output:

```js
function outer(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}
const fn = outer();
console.log(fn());
console.log(fn());
```

---

## 3. Arrays

1. Write a program to find sum using `reduce()`.

2. Remove duplicates from:

```js
[1,2,2,3,4,4]
```

3. Flatten array:

```js
[1,[2,[3,4]]]
```

---

## 4. Strings

1. Reverse a string without using built-in reverse.

2. Check if string is palindrome.

---

## 5. DOM

1. Create a button using JS and append to body.

2. Add click event that changes text.

---

## 6. Events

1. Implement event delegation on a list.

2. Stop event bubbling in a nested div.

---

## 7. Async JavaScript

1. Convert callback to promise.

2. Fetch data from API using async/await with try-catch.

3. Predict output:

```js
console.log("Start");
setTimeout(()=>console.log("Timeout"),0);
Promise.resolve().then(()=>console.log("Promise"));
console.log("End");
```

---

## 8. OOP

1. Create a class `Person` with name and method.

2. Implement inheritance using `extends`.

---

## 9. Advanced

1. Implement debounce function.

2. Implement throttle function.

3. Deep copy an object.

---

🔥 Rule: Solve before checking a
