// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(input) {
    if (typeof input !== "string") {
    return false;
    }else{
        return input.split(" ").length-1;
    }
}
// TODO: Add validation to function above, if the argument pass is not a string it should return false.
console.log(countSpaces("Hi, my name is Slim Shady!"));
console.log(countSpaces(5));
console.log(countSpaces(true));
console.log(countSpaces(null));
console.log(countSpaces("B Richards"));

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]


// function capitalizeAllNames(stringsArray) {
//
function capitalizeAllNames(input) {
    var input = ["bob","Seth","TOFU","Toyota"];
    return input.toUpperCase();
    }

console.log(capitalizeAllNames(input));


// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

function capitalizeFirstLetter(input) {

}