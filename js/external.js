
"use strict";

/* console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var response = prompt("What is your favorite color?")

alert("Great, " + response + " is my favorite color too!");

 var confirmed = confirm("Are you of serious right now?");
console.log(confirmed); */

/*var price = 3
var ltm = 3, brother = 5, herc = 1;
console.log("The Little Mermaid " + (ltm * price));
console.log("Brother Bear " + (brother * price));
console.log("Hercules " + (herc * price));
var total_price = (ltm + brother + herc) * 3;
console.log(total_price);
alert("The price for the movies is: " + (3+5+1) * 3);

alert("I got paid " + ((350*10) + (400*6) + (380*4)));*/

/*var full = confirm("Is this class full?");
var conflict = confirm("Does this conflict with your schedule?");
alert("Enrollment Status " + (!full && !conflict));*/

var premium = confirm("Are you a premium member?");
var quantity = confirm("Are you buying 2 or more items?");
var offer = confirm("Has the offer expired?");

alert("Offer Status " + (!offer && (quantity || premium)));








