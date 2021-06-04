/*
function showMultiplicationTable(x,y) {
    for (var y = 0; y <= 10; y++) {
        console.log(x + " x " + y + " = " + (x * y) + "\n");
    }
}
showMultiplicationTable(7);*/


for (x = 0; x <10; x++) {
    let x = Math.ceil(Math.random() * 100) + 10;
    if (x % 2 === 0) {
       console.log(x + " is even");
   } else{
       console.log(x+ " is odd");

   }
}

