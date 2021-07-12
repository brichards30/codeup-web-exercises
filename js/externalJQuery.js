//Template below
// $(document).ready(function (){
//
// })
"use strict"

$(document).ready(function (){

    var quotes = $('#my-fav-quotes')
    console.log(quotes);
    //quotes.css({'list-style': 'none'});

    var h2 = $('h2');
    console.log(h2);
    alert(h2.html());

    var allMyLs = $("li");
    console.log(allMyLs[1]);
    alert(allMyLs.html());

    var deepGif = $('#thats-deep-gif')
    deepGif.css({"border-radius": "30px", "width": "50%"})
});
// var quotes = $('#my-fav-quotes')
// console.log(quotes);

//quotes.css();

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
//
//
//     var aDiv = $('#something');
//
//     console.log(aDiv);
//
//     var divs = $('.content');
//
//     console.log(divs);
//
//     var currentImg = $('img');
//
//     console.log(currentImg);
//
//     // var stuff = $('img, .content')
//     // console.log(stuff);
//
//     var h1 = $("h1");
//
//     console.log(h1.html('Morris Chestnut Baby!'));
//
//     var img = $("img");
//
//     img.css({"width": "50%", "border": "solid 3px red", "border-radius": "30px"});
//     // img.css("border", "solid 3px red");
//     // img.css("border-radius", "30px");
//
// });

//using multiple selectors, separate by commas within one " ". The index order is based on order HTML is read (top to bottom)