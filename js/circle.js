(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,


        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            return area;
            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = Math.PI * Math.pow(this.radius, 2);
            if (doRounding === true) {
                return Math.round(this.getArea());
            } else {
                return area;
            }


                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value


        },

    };
    let area = Math.PI * Math.pow(circle.radius, 2);

            // log info about the circle
            console.log("Raw circle information");
            console.log("Area of a circle with radius: " + circle.radius + ", is: " + area);
            //console.log(circle.logInfo(false));
            console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(true));
            //console.log(circle.logInfo(true));

            console.log("=======================================================");
            // TODO: Change the radius of the circle to 5.

            // log info about the circle
            console.log("Raw circle information ");
            console.log("Area of a circle with radius: " + circle.radius + ", is: " + area);
            //console.log(circle.logInfo(false));
            console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(true));
            //console.log(circle.logInfo(true));

//console.log(circle.getArea());


})();
