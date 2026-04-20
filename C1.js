function debounce(func, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, delay);
    const myPromise = new Promise((resolve, reject) => {
      let success = true;

      if (success) {
        resolve("Task completed");
      } else {
        reject("Task failed");
      }
    });
    myPromise
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

  };
}

// function Event() {
//   let from = document.getElementById("from").innerHTML
//   console.log(from)
// }
// let debounceSearch = debounce(Event, 500)
// document.querySelector("#submit").addEventListener("click", debounceSearch);
// 
// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4]
