/* set this up for testing, uncomment to test
alert("I have this working!");

var message = "";

for (var index = 0; index < 10; index++) {
    message = message + index + "\n";
}
alert(message);

var message = "";

var howmany = prompt("How many?");

for (let index = 10; index <= howmany; index = index-- or index=index - 5) {
    message = message + index + "\n";
}

alert(message);

alert(index)


for (var index = 0; index < 5; index++) {
    //do something
    alert("index " + index + "\n");
}

var notDone = true;

    while (notDone) {
    //do something
    notDone = confirm("Are we done or are we finished?")
}

 */
var notDone = true;

    do {
        notDone = confirm("Not yet?")
    } while (notDone);

    //Break loop

let number = 0;
while (true) {
    alert("Present!");
    number++;
    if (number > 2) {
        break;
    }

}

for (var i = prompt("Input an odd number"); i < 100; i++) {
    if (i % 2 !== 0) {
        //number isnt even
        //odd numbers
        //skip the rest of the loop and continue with next iteration
        continue;
    }
    console.log("Here is a lovely even number: " + i);
}