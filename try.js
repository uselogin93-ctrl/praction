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

// Q.5
function createUser(name) {
    let userName = name;

    return {
        getName: function () {
            return userName;
        },
        setName: function (newName) {
            userName = newName;
        }
    };
}

const user = createUser("Shashi");

console.log(user.getName()); // Shashi
user.setName("Giri");
console.log(user.getName()); // Giri
user.setName("Nishi");
console.log(user.getName());

// Q.6
const obj = {
  name: "JS",
  getName: function () {
    console.log(this.name);
  }
};
obj.getName();

// Q.7
function show() {
  console.log(this);
}
show();