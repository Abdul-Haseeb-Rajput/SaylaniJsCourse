
// Task 1
function addNumberClosure(n) {
    return function(x) {
      return x + n;
    }
  }

let addFive = addNumberClosure(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25