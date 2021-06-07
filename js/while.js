"use strict";

//While Loops

var number = 1;
while (true) {
    number = number * 2;
if (number > 67000) {
    break;
} console.log(number);
}



//Do While Loop
let allCones = Math.floor(Math.random() * 50) + 50;
console.log("The number of cones I can sell " + allCones);

//total cones sold today
let totalSold = 0;
do {
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if((totalSold + conesBought) > allCones) {
        console.log("I'm sorry, I can't sell " + conesBought);
        continue;
    }
    console.log("My customer purchased " + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold " + totalSold + " ice cream cones");

} while (totalSold < allCones);


