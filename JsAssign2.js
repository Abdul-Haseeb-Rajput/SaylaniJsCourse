
// Task 1
function addNumberClosure(n) {
    return function(x) {
      return x + n;
    }
  }

let addFive = addNumberClosure(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25


// Task 2

function searchArray(arr, val) {
    //if the array is empty,the value is not found
    if (arr.length === 0) {
      return false;
    }
    
    if (arr[0] === val) {
      return true;
    } else {
      return searchArray(arr.slice(1), val);
    }
  }

let myArray = [4,2,5,2,3];
console.log(searchArray(myArray, 3)); // Output: true
console.log(searchArray(myArray, 6)); // Output: false



// Task 3

function addParagraph(text) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    document.body.appendChild(newParagraph);
  }

addParagraph("Hello i am a new paragraph!");
