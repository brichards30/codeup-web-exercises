// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(input) {
    if (typeof input !== "string") {
        return false;
    } else {
        return input.split(" ").length - 1;
    }
}

// TODO: Add validation to function above, if the argument pass is not a string it should return false.
console.log(countSpaces("Hi, my name is Slim Shady!"));
console.log(countSpaces(5));
console.log(countSpaces(true));
console.log(countSpaces(null));
console.log(countSpaces("B Richards"));

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames(names) {

   return names.map(name => name.toUpperCase())
   //  return upperCased;
}

//console.log(lowercased);
console.log(capitalizeAllNames(["bob","Seth","TOFU","Toyota"]));


// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
//Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

function capitalizeFirstLetter(names) {
    return names.map(name => name[0].toUpperCase() + name.substr(1).toLowerCase())
}
console.log(capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]));
// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
    var personOne = {
        firstName: "silvia",
        lastName: "floopertan",
        ageInYears: 34,
        heightInInches: 65
    }
    personOne.getFullName = function () {
        console.log("This person's name is: " + this.firstName + " " + this.lastName);
    }
    personOne.getFullName();
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
    var personTwo = {
        firstName: "dan",
        lastName: "valdarez",
        ageInYears: 61,
        heightInInches: 73
    }
    personTwo.getNicelyFormattedFullName = function () {
        return ("This person's name is: " + this.firstName[0].toUpperCase() + this.firstName.substr(1) + " " + this.lastName[0].toUpperCase() + this.lastName.substr(1));
    }
    personTwo.getNicelyFormattedFullName();
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
    var personThree = {
        firstName: "arlene",
        lastName: "martinez",
        ageInYears: 25,
        heightInInches: 62
    }
    personThree.intro = function () {
        return "Hello, my name is " + this.firstName[0].toUpperCase() + this.firstName.substr(1) + " " + this.lastName[0].toUpperCase() + this.lastName.substr(1) + " and I am " + this.ageInYears + " years old."
    }
    personThree.intro();

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters

function stringsToObjects (arrayStrings) {
    var newObjects =[]

    for (let i = 0; i < arrayStrings.length; i++) {
        // console.log(arrayStrings[i]);
        newObjects.push({originalString:arrayStrings[i] , lengthOfOriginalString: arrayStrings[i].length});
    }
    return newObjects;
}
var arrayOfObjects = stringsToObjects(["hello", "dave"]);
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]


// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between

function arrayOfObjectsToStrings(arrayObjects) {
    var ogStrings = []

    arrayObjects.forEach(function (lonelyObject){

        ogStrings.push(lonelyObject.originalString)
    })

   return ogStrings.join(" ")
}
arrayOfObjectsToStrings(arrayOfObjects);
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//
function getAllUsers(arrOfPersons) {
    var tallPeople =[];

    for (let i = 0; i < arrOfPersons.length; i++) {
        // console.log(arrayStrings[i]);

        var currentUser = arrOfPersons[i];

        var currentUserHeight = currentUser.heightInInches;
        // var userIsTallEnough = currentUserHeight >= 65

        if (currentUserHeight >= 65) {
            tallPeople.push(currentUser);
            //if (userIsTallEnough)
            //tallPeople.push(currentUser)
        }
        // tallPeople.push({firstName: arrOfPersons[i].firstName,
        //     lastName: arrOfPersons[i].lastName,
        //     ageInYears: arrOfPersons[i].ageInYears,
        //     heightInInches: arrOfPersons[i].heightInInches});
    }
    return tallPeople;
}

console.log(getAllUsers(people));