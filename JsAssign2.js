
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


// task 4


function addListItem(text) {
    const newListItem = document.createElement('li');
    newListItem.textContent = text;
    const unorderedList = document.querySelector('ul');
    unorderedList.appendChild(newListItem);
  }
  
  // Add a new list item with the text content "New item"
addListItem('im new item');



// task 5

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}
  
let myElement = document.querySelector('#element-id');
changeBackgroundColor(myElement, 'green');


// task 6


function saveObjectToLocalStorage(key, object) {
    let serializedObject = JSON.stringify(object);
    localStorage.setItem(key, serializedObject);
  }
  
  const myObject = { name: 'haseeb', age: 21 };
  saveObjectToLocalStorage('my-object', myObject);

//  task 7

function getObjectFromLocalStorage(key) {
    const serializedObject = localStorage.getItem(key);
    return JSON.parse(serializedObject);
  }

  const myObject1 = getObjectFromLocalStorage('my-object');
  console.log(myObject1);
  
  
  
