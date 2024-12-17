
// JavaScript Notes

// 1. VARIABLES
// Variables can be declared using var, let, and const.
// - var: Declares a variable globally or function-scoped, allowing redeclaration.
// - let: Declares a block-scoped variable, cannot be redeclared.
// - const: Declares a block-scoped, read-only variable that cannot be reassigned.
var globalVariable = "I am global"; 
let blockScoped = "I am block scoped"; 
const constantValue = "I cannot change"; 

// 2. DATA TYPES
// JavaScript has dynamic typing, where variables can hold any type of value.
// Common types include:
// - String: Textual data enclosed in quotes.
// - Number: Numeric values (integers, floats).
// - Boolean: True or false values.
// - Null: Represents an intentional absence of value.
// - Undefined: A variable declared but not initialized.
// - Object: Collection of key-value pairs.
// - Array: Ordered list of elements.
// - Symbol: Unique and immutable value used as an identifier.
let stringType = "Hello";
let numberType = 42;
let booleanType = true;
let nullType = null;
let undefinedType;
let objectType = { key: "value" };
let arrayType = [1, 2, 3];
let symbolType = Symbol("unique");

// 3. FUNCTIONS
// Functions are reusable blocks of code that perform specific tasks.
// They can be defined in multiple ways:
// - Regular functions: Use the function keyword.
// - Arrow functions: A shorter syntax introduced in ES6.
// - IIFE (Immediately Invoked Function Expression): Executes immediately after creation.
function regularFunction(param) {
  return param * 2;
}

const arrowFunction = (param) => param * 2;

(function () {
  console.log("I run immediately");
})();

// 4. CONDITIONALS
// Conditional statements control the flow of code execution based on conditions.
// - if: Executes block if the condition is true.
// - else if: Checks additional conditions if the previous one is false.
// - else: Executes if no previous conditions are true.
if (numberType > 10) {
  console.log("Number is greater than 10");
} else if (numberType === 10) {
  console.log("Number is exactly 10");
} else {
  console.log("Number is less than 10");
}

// 5. LOOPS
// Loops repeat code blocks while conditions are true.
// - for: Repeats a block for a specified number of times.
// - while: Repeats while a condition is true.
// - do-while: Executes at least once, then repeats while condition is true.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

do {
  console.log(count);
  count++;
} while (count < 10);

// 6. EVENTS
// Events are user interactions like clicks, input, or keypresses.
// Use addEventListener to attach event handlers to elements.
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// 7. OBJECTS
// Objects are collections of properties (key-value pairs).
// They can also contain methods (functions as properties).
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet();

// 8. ARRAY METHODS
// Arrays are ordered collections with useful methods for manipulation:
// - push: Adds an element to the end.
// - pop: Removes the last element.
// - shift: Removes the first element.
// - unshift: Adds an element to the beginning.
// - forEach: Iterates over each element.
// - map: Creates a new array by applying a function to each element.
// - filter: Creates a new array with elements that match a condition.
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.pop();
numbers.shift();
numbers.unshift(0);

numbers.forEach((num) => console.log(num));
let squared = numbers.map((num) => num * num);
let evenNumbers = numbers.filter((num) => num % 2 === 0);

// 9. PROMISES AND ASYNC/AWAIT
// Promises handle asynchronous operations, allowing chaining using then and catch.
// async/await offers cleaner syntax for working with Promises.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();

// 10. DOM MANIPULATION
// The DOM represents the structure of a webpage.
// Use JavaScript to select, modify, or create elements dynamically.
const title = document.querySelector("h1");
title.textContent = "Updated Title";
title.style.color = "blue";

document.body.appendChild(document.createElement("p")).textContent = "New Paragraph";

// 11. CLASSES
// Classes provide a blueprint for creating objects with shared properties and methods.
// ES6 introduced classes for object-oriented programming.
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} says hello!`);
  }
}

const dog = new Animal("Buddy", "Dog");
dog.speak();

// 12. MODULES
// Modules allow splitting code into reusable files.
// Use export to share and import to use them in other files.
// File: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// File: main.js
import { add, subtract } from "./math.js";
console.log(add(5, 3));

// 13. ERROR HANDLING
// Handle runtime errors using try-catch.
// - try: Executes code that may throw an error.
// - catch: Handles the error and prevents crashes.
// - finally: Executes regardless of the outcome.
try {
  const riskyOperation = () => {
    throw new Error("Something went wrong");
  };
  riskyOperation();
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This block always runs");
}

// 14. LOCAL STORAGE AND SESSION STORAGE
// Store key-value data in the browser persistently (localStorage) or temporarily (sessionStorage).
localStorage.setItem("key", "value");
console.log(localStorage.getItem("key"));
localStorage.removeItem("key");
sessionStorage.setItem("sessionKey", "sessionValue");
console.log(sessionStorage.getItem("sessionKey"));

// 15. DATE AND TIME
// The Date object is used for working with dates and times.
// It provides methods for formatting, retrieving, and manipulating date components.
const now = new Date();
console.log(now.toString());
console.log(now.toISOString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

// 16. SETS AND MAPS
// Sets store unique values, while Maps store key-value pairs with ordered keys.
const uniqueSet = new Set([1, 2, 3, 3]);
uniqueSet.add(4);
uniqueSet.delete(2);
console.log(uniqueSet);

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.get("key1"));
map.delete("key2");
console.log(map.size);

// 17. STRING METHODS
// JavaScript provides various methods to manipulate strings:
let text = "   Hello World!   ";

console.log(text.length); // 17
console.log(text.toUpperCase()); // "   HELLO WORLD!   "
console.log(text.toLowerCase()); // "   hello world!   "
console.log(text.indexOf("World")); // 7
console.log(text.slice(3, 8)); // "Hello"
console.log(text.replace("World", "Universe")); // "   Hello Universe!   "
console.log(text.trim()); // "Hello World!"
console.log(text.split(" ")); // ["", "", "Hello", "World!", ""]
console.log(text.includes("Hello")); // true
console.log(text.charAt(4)); // "o"
console.log(text.concat(" Let's learn JavaScript!")); // "   Hello World!   Let's learn JavaScript!"

// 18. MATH OBJECT
// The Math object provides properties and methods for mathematical constants and functions.

console.log(Math.abs(-10)); // 10
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.random()); // Random value between 0 and 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.PI); // 3.141592653589793

// 19. JSON (JavaScript Object Notation)
// JSON is used for parsing and stringifying JavaScript objects.

const jsonString = '{"name": "Alice", "age": 25}';
const personObj = JSON.parse(jsonString);
console.log(personObj.name); // Alice

const newObj = { name: "Bob", age: 30 };
const jsonStringified = JSON.stringify(newObj);
console.log(jsonStringified); // '{"name":"Bob","age":30}'

// 20. Array and Object Destructuring

const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first);  // 1
console.log(second); // 2

const person = { name: "John", age: 25 };
const { name, age } = person;
console.log(name); // John
console.log(age);  // 25

// 21. SPREAD and REST Operators

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" };
console.log(updatedPerson); // { name: "Alice", age: 25, city: "New York" }

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
