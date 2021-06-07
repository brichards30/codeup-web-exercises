//alert('Iterating arrays exercises');

(function(){
    "use strict";

    /**
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Ronnie', 'Bobby', 'Ricky', 'Mike'];

    /**
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("Log statement that will log the number of elements in names");
    console.log(names.length);
    console.log("");

    /**
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("log statements that will print each name individually by accessing its index");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("");


    /**
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("Code that uses for loop to log every item in names");
    for (let index = 0; index < names.length; index++) {
        console.log(names[index]);
    }
    console.log("");

    /**
     * Refactor your above code to use a `forEach` loop
     */
    console.log("Refactor using forEach loop.");
    names.forEach(function(name) {
        console.log('This is a member of New Edition: ' + name + '.');
    });
    console.log("");

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log("Create 3 functions.");

    function first() {
     return names[0];
 }
    first();
    function second() {
        return names[1];
    }
    second();

    function last() {
        return names[3];
    }
    last();

console.log(first);
})();


