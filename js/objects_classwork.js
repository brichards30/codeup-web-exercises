//alert("this is a test");

//Ways to create an object
//var car = new Object();
//or
var car = {};

car = {
    year: 2018,
    make: "Jeep",
    model: "Compass",
    numberOfSeats: 8,
}
car.numberOfCylinders = 4;


var person = {
    name: "James",
    heightInInches: 72,
    age: 28,
}

console.log("");

var child = {
        name: "Samantha",
        age: 2
}

person.daughter = child;
car.owner = person
console.log(car);

function infoFunction (arg) {
    //return car.year + ", " + car.make + " " + car.model
    if (arg === true) {
        return "Hi, my name is " + this.owner.name + " and I own a " + this.year + ", " + this.make + " " + this.model + ".";
    }
    return this.year + ", " + this.make + " " + this.model;
}
car.info = infoFunction;

console.log("");

var carTwo = {};

carTwo = {
    make: "Lincoln",
    model: "Navigator",
    year: 2021,
    numberOfDoors: 4,
    numberOfSeats: 8,
    transmission: "automatic",
    owner: {
        name: "Dennis",
        heightInInches: 68,
        age: 48,
        son: {
            name: "Jett",
            age: 17,
        }
    },
    info: infoFunction
}

