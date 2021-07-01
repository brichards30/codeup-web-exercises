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