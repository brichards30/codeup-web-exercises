function max(arrayOfNumbers) {
    var largestNumber;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // arrayOfNumbers[i]

        if (largestNumber === undefined) {
            largestNumber = arrayOfNumbers[i]
        }
        if (arrayOfNumbers[i] > largestNumber) {
            console.log("i got here");
            largestNumber = arrayOfNumbers[i]
        }
    }
    return largestNumber;
    // return Math.max(...arrayOfNumbers);
}

console.log(max([4, 34, 193, 2, 345, 46, 0]));
//"..." spread operator removes numbers out of the array [12,12,41,563] turns to 12,12,41,563