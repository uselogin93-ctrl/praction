# 🚀 JavaScript Interview Practice (No-AI Mode)

> ⚠️ Rules:
>
> * Do NOT use AI or Google while solving
> * Write answers on paper or code editor
> * Only check solutions AFTER attempting

---

# 1. Variables, Scope & Hoisting

## Questions

1. What will be the output and why?

```js
console.log(a);
var a = 10;
```

2. What will be the output and why?

```js
console.log(a);
let a = 10;
```

3. Predict output:

```js
var a = 10;
function test() {
  console.log(a);
  var a = 20;
}
test();
```

4. Explain difference between `var`, `let`, and `const` with real use cases.

5. Predict output:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---

# 2. Functions & Closures

## Questions

1. What is a closure? Explain with an example.

2. Predict output:

```js
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();
```

3. Create a counter using closure.

4. Why can closures cause memory leaks?

5. Predict output:

```js
function x() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}
x();
```

---

# 3. Objects & this Keyword

## Questions

1. Predict output:

```js
const obj = {
  name: "JS",
  getName: function () {
    console.log(this.name);
  }
};
obj.getName();
```

2. Predict output:

```js
const obj = {
  name: "JS",
  getName: () => {
    console.log(this.name);
  }
};
obj.getName();
```

3. Explain difference between `call()`, `apply()`, and `bind()`.

4. Write a polyfill for `bind()`.

5. Predict output:

```js
function show() {
  console.log(this);
}
show();
```

---

# 4. Arrays & Methods

## Questions

1. Implement your own `map()` function.

2. Predict output:

```js
const arr = [1,2,3];
const res = arr.map(num => num * 2);
console.log(res);
```

3. Use `reduce()` to:

   * Find sum of array
   * Find maximum value

4. Flatten this array:

```js
[1, [2, [3, 4]]]
```

5. Remove duplicates from an array.

---

# 5. Promises & Async/Await

## Questions

1. Create a promise manually.

2. Predict output:

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

3. Difference between `async/await` and `.then()`.

4. What is promise chaining?

5. Handle an API call with proper error handling.

---

# 6. Event Loop

## Questions

1. Predict output:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

2. Explain execution step-by-step.

3. Difference between microtask and macrotask.

---

# 7. DOM & Events

## Questions

1. Difference between `getElementById` and `querySelector`.

2. What is event delegation?

3. How to stop event bubbling?

4. Add a click event dynamically using JavaScript.

---

# 8. Advanced Questions

## Questions

1. Implement debounce.

2. Implement throttle.

3. Explain deep copy vs shallow copy.

4. Explain currying with example.

5. What is memoization?

6. Predict output:

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

---

# ✅ Practice Strategy

* Solve 1 topic per day
* Write answers manually
* Run code yourself
* Mark weak areas

---

🔥 When stuck, come back and ask specific question like:
"Explain closure Q2"

I’ll guide you like an interviewer.
