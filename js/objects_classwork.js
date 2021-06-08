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

car.info = function (name) {
    //return car.year + ", " + car.make + " " + car.model
    if (name !== undefined) {
        return "Hi, my name is " + name + " and I own a " + car.year + ", " + car.make + " " + car.model + "."
    }
}
car.info();
console.log(car.info("Brittany"));
