"use strict";

/* ########################################################################## */

/**
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*if(colorName === "blue") {
    alert("Blue is the color of the sky.");
} else if (colorName === "red") {
    alert("Strawberries are red.");
} else if (colorName === "cyan") {
    alert("I don't know about cyan.")
} else {
    alert("I don't know about " + colorName + ".");
}
*/
 function analyzeColor(colorName) {
    if (colorName === "blue") {
       return "Blue is the color of the sky"
    } else if (colorName === "red") {
         return "Strawberries are red"
    } else if (colorName === "cyan") {
        return "I don't know anything about cyan.";
    } else {
        return "I don't know anything about that color.";
    }
}

/* alert(analyzeColor("blue"));
alert(analyzeColor("red"));
alert(analyzeColor("cyan"));
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));


/**
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(colorName) {
    switch (colorName) {
        case "red":
            return 'Red is the color of apples.';
        case "orange":
            return "Orange is the color of oranges.";
        case "yellow":
            return "Yellow is the color of sun rays.";
        case "green":
            return "Green is the color of grass.";
        case "blue":
            return "Blue is the color of sky.";
        case "indigo":
            return "Indigo is a pretty color.";
        case "violet":
            return "Violet is a shade of purple.";
    }
}


/**
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorInput = prompt("What is your favorite color?");
alert(analyzeColor(colorInput));


/* ########################################################################## */

/**

 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            return totalAmount;
        case 1:
            return totalAmount - (totalAmount * .10);
        case 2:
            return totalAmount - (totalAmount * .25);
        case 3:
            return totalAmount - (totalAmount * .35);
        case 4:
            return totalAmount - (totalAmount * .50);
        case 5:
            return 0;

    }
}
console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
/**
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("Please enter your total of your bill?");

alert("Your lucky number is " + luckyNumber + "\nYour price before discount is " + totalBill + "\nYour price after discount is " + calculateTotal(luckyNumber, totalBill).toFixed(2));
/* alert("Your price before the discount is " + totalBill + ".")
alert("Your price after discount is " + calculateTotal(luckyNumber, totalBill).toFixed(2) + ".");
 */

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var answer = confirm("Would you like to enter a number?");
if (answer) {
    var number = prompt("Enter a number");
    if (isNaN(number)) {
        alert("You didn't enter a number.");
    } else {
        number = parseFloat(number);
        if (number % 2 === 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }
        alert("100 + your number is : " + Number(number + 100));
        if (number < 0) {
            alert("Your number is negative.");
        } else {
            alert("Your number is positive.");
        }
    }

}