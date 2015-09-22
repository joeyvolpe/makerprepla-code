// we've defined a function and set it equal to a variable
var fn = function () {
  console.log('heeey');
};

// of course, we can invoke it manually
fn();

// Alternately, we can ask the browser to run it at a later time

// The below is called an event handler, take a guess at what it does...
// Add it to an HTML document containing a div#target and test it out
// Remember, div#target means a div with an id of "target"
document.querySelector('#target').addEventListener('click', fn);

/* Often times, instead of using a variable, we'll just define the function inline
using an anonymous function.*/
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal');
});


// EXERCISE 1

var beeper = function(){
  console.log("Beep!");
};

// document.querySelector('button').addEventListener('click', beeper);

// $('button').on('click', beeper);
$('button').click(beeper);


// EXERCISE 2

$('.money').click(function(){
  $('.money').show().text("show me the money").css({color: "white", backgroundColor: "black"});
});

$('.oprah').click(function(){
  $('.oprah').show().text("show me the oprah").css({fontSize: 36, fontFamily: "verdana"});
});

$('.opera').click(function(){
  $('.opera').html("<img src='http://cache.desktopnexus.com/thumbseg/1404/1404858-bigthumbnail.jpg'></img>");
});



// EXERCISE 3

$('#target').on('mouseover', function(){
  $('#target').addClass('highlighted')
});

$('#target').on('mouseleave', function(){
  $('#target').removeClass('highlighted')
});


// EXERCISE 4
