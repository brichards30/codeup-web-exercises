//Exercise 2
function showMultiplicationTable(x,y) {
    for (var y = 0; y <= 10; y++) {
        console.log(x + " x " + y + " = " + (x * y) + "\n");
    }
}
showMultiplicationTable(6);
// Exercise 3
for (x = 0; x <10; x++) {
    let x = Math.ceil(Math.random() * 100) + 10; //IMPORTANT
    if (x % 2 === 0) {
        console.log(x + " is even");
    } else{
        console.log(x+ " is odd");
    }
}

//E4

 for (let x = 1; x < 10; x++) {
        var number = "";
        number = x;
        for (let y = 1; y < x; y++){
            number = number + x.toString();
        }
        console.log(number.toString());
    }

 /*Katheleen's method
    for (var index = 1, number = ""; index < 10; index++) {
        number += "1";
        console.log(index * number)
    }
*/

//E5
for (let x = 100; x > 0; x -= 5) {
    console.log(x);
}
