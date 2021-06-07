"use strict";
//alert("this is the classwork");

var names = ["Beyonce"];

names.push("Kelly", "Michelle");// adds to the array
console.log(names);
console.log("");


console.log("names.length: check the number of elements");
console.log(names.length);
console.log("");

console.log("Check names with the added names");
console.log(names);
console.log("");

console.log("Unshift adds name to the front");// unshift adds name to the front
names.unshift("Seth");
console.log(names)
console.log("");

console.log("Shift removes name from the front");// unshift adds name to the front
names.shift("Seth");
console.log(names)
console.log("");

console.log("Pop removes last name of the element"); //pop removes the last name of the element
names.pop();
console.log(names)
console.log("");

names.push('Michelle', 'LaToya', 'Latavia', 'Farrah', 'Beyonce');
console.log(names)
console.log("");

console.log("indexOf finds the index of element specified");
console.log(names.indexOf('Beyonce'));

console.log("indexOf finds the LAST index of element specified");
console.log(names.lastIndexOf('Beyonce'));
console.log("");

console.log("Slice is used to select elements from an array as a new array object")
//create a new variable and use .slice(first element, last element to be included, etc);
var destinysChild = names.slice(0, 3);
console.log(destinysChild);
console.log("");

console.log("Sort is for alphabetical order");
console.log(destinysChild);
console.log("");

console.log("Joining as a string");
names.join();
console.log(names);
console.log("");
