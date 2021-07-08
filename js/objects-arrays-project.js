function removeDuplicates(arrayOfStrings) {
    return [... new Set(arrayOfStrings)]
}
console.log(removeDuplicates(["bob","squid","samantha","bob"]));
console.log(removeDuplicates(["tilda", "tilda"]));
console.log(removeDuplicates(["2016-02-13", "1994-12-21", "2016-02-13", "2016-02-13", "2005-11-29"]));


function max(arrayOfNumbers) {
    var largestNumber;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        //     // arrayOfNumbers[i]
        //
        if (largestNumber === undefined) {
            largestNumber = arrayOfNumbers[0]
        }
        if (arrayOfNumbers[i] > largestNumber) {
            console.log("i got here");
            largestNumber = arrayOfNumbers[i]
        }
        // }
        return largestNumber;

        // arrayOfNumbers.forEach(function (lonelyNumber) {
        //     if (largestNumber === undefined) {
        //         largestNumber = lonelyNumber
        //     }
        //     if (arrayOfNumbers[i] > largestNumber) {
        //         console.log("i got here");
        //         largestNumber = lonelyNumber
        //     }
        // })
        // return largestNumber;
        // return Math.max(...arrayOfNumbers);
    }
}

    console.log(max([4, 34, 193, 2, 345, 46, 0]));

//"..." spread operator removes numbers out of the array [12,12,41,563] turns to 12,12,41,563

function whoIsPassing(arrayOfStudents) {
    var passingStudents = [];

    for (let i = 0; i < arrayOfStudents.length ; i++) {
        if(arrayOfStudents[i].classAverage >= 60) {
            passingStudents.push({
                name: arrayOfStudents[i].name,
                passing: true
            })
        }else if {

        }

    }
}
var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]
console.log(whoIsPassing(students));

function dateStringToObject(string) {

    var splitString = string.split("-")
    return {month: splitString[1], day: splitString[2], year: splitString[0]};
}

console.log(dateStringToObject("2016-2-13"));
console.log(dateStringToObject("2005-11-29"));
console.log(dateStringToObject("1994-12-21"));

function reverseString(str) {

    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;

}

console.log(reverseString("squid"));;
// Should return the following
"diuqs"

console.log(reverseString("tilda"));;
// Should return the following
"adlit"

console.log(reverseString("2016-02-13"));;
// Should return the following
"31-21-6102"

function numberInfo(number){
    // var isNumberPositive = (number > 0)
    // var isNumberEven = (number % 2 === 0)
    // var isNumberZero = (number === 0)

    return {
        isPositive: (number > 0),
            isEven: (number % 2 === 0),
        isZero: (number === 0)
    }
}

console.log(numberInfo(-1));
console.log(numberInfo(6));
console.log(numberInfo(0));

function mostOccuringNumber(number) {
    //1. check number of times each # occurs
    var counts = [];
    for (let i = 0; i < number.length; i++) {
        var aNumber = number[i];
        if (counts[aNumber] === undefined) {
            counts[aNumber] = 1;
        } else {
            counts[aNumber]++; //gives us access to the counts element @ index "aNumber"
        }
    }
//2. scan thru associative array and keep track of value with highest count
    var maxCount = 0;
    var winningNumber = "";

    for (const countsKey in counts) {
        //console.log("the counts element " + countsKey + " is value " + counts[countsKey]);
        var currentCount = counts[countsKey];
        // when currentCount is > maxCount, we have a new winner so far
        maxCount = currentCount;
        winningNumber = countsKey;
    }
    return winningNumber;
}

mostOccuringNumber();