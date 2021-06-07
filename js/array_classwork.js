"use strict";

alert("Here is array coursework");

let test = [];

//array is a memory that stores more than one thing, to define use [] and use commas to separate

    test = [100, 101, 90, 95, 80, 70];

    var cars = [];
    cars = ['Compass', 'Sebring', 'Sonata', 'Cutlass'];

    var stuff = [2, 3, 5, 7, cars];

    // dump whole array
    console.log(stuff);

    //output 3rd element
    console.log("output the 3rd element");
    console.log(stuff[3]); //to look for a specific item *index*

    //length = how many elements of the array
    console.log('length of array');
    console.log(stuff.length);

    // use For loop to go thru array
    console.log('use for loop to go through array');
    for (let index = 0; index < stuff.length; index++) {
        console.log(stuff[index]);
    }

    console.log('This is an array with one element');
    var something = [10];
    console.log(something);

    //for-each

    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

    // loop through the array and log the values. array.forEach(function(functionname) { });
    shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
    });

    for (let number = 0; number < shapes.length; number++) {
        console.log('Here is a lovely shape: ' + shapes[number] + '.');
    }