//Template below
// $(document).ready(function (){
//
// })
"use strict"

 $(document).ready(function (){
function whenClickdOnce(event) {
    $(this).css({'background-color': '#335BFF'});
    $(this).css({'color': '#FFFFFF'})
}
$('h1').click(whenClickdOnce);

function dblClickd(event) {
    $(this).css({'font-size': '18px'});
}
$('p').dblclick(dblClickd);

function hoverIn(event) {
    $(this).css('color', '#FF5733');
}

function hoverOut(event){
    $(this).css('color', '#000000');
}

$('li').hover(hoverIn, hoverOut);

     //JQuery Introduction Exercise
// var randomList;
// var h1;
// var h2;
// var catGifs;
// var codeup;
// var stuff;
//
//
//
//     randomList= $('#random-list')
//     console.log(randomList);
//     randomList.css({'list-style': 'none'});
//
//     h1 = $('h1');
//     console.log(h1);
//     alert(h1.html());
//
//     h2 = $('h2');
//     console.log(h2);
//     h2.css({"font-style": "italic"})
//     //alert(h2.html());
//
//     catGifs = $('.cats')
//     catGifs.css({"border-radius": "30px"})
//
//     codeup = $('.codeup')
//     codeup.css({'border': '3px solid red', 'border-radius': '30px'})
//
//     $('li').css({"font-size": "20px"})
//
//     stuff = $('h1, p, li')
//     console.log(stuff)
//     stuff.css({"background-color": "yellow"})
//
//
//
});

//JQuery Notes

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