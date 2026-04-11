// Q.1
console.log(a);
var a = 10; 
// Ans:- it show undefined becoses it run link 1 first and that line 2 so the in first link the varable "a" was not defind that by is shoe undefined in output

// Q.2
let b = 10;
console.log(b);

// Q.3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Q.4
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