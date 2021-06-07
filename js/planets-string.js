//alert("This is a test.");

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

        planetsArray = planetsString.split("|");

        var planetsString = planetsArray.join(" <br>");
     console.log(planetsString);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsListed = planetsArray.join(" <br>");
    console.log(planetsListed);

    document.write(planetsListed);






    //var exploded = lines.split('<br />');



})();
