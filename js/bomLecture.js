//BOM = browser object model

var person = {
    name: "B",
    age: 31,
    getInfo: function () {
        return "This is " + this.name + ", and she is " + this.age + " years old."
    }
}

person.height = "68 inches";

person.name = "Denise"
person.age  = "undisclosed"

console.log(person.getInfo());

//setTimeout tells JS to wait a specific time before running code
//setInterval tells JS to run the code multiple times after predetermined time
console.log(person.height);