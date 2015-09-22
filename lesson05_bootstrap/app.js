alert("Welcome to my awesome website, pluhcka. Beware, this site is extremely dangerous. Enjoy with caution.");

var name = prompt("What is your name?");

alert("Greetings " + name + "! Nice to meet you.");

var team = prompt("What's your favorite sports team?");

console.log(team + " fucking suck ass!");

var hoursElapsedToday = 17;
var minutesElapsedThisHour = 14;

var hoursInDay = 24;
var minutesInHour = 60;
var secondsInMinute = 60;

var secondsInDay = hoursInDay * minutesInHour * secondsInMinute;
console.log(secondsInDay);

var secondsElapsedToday = hoursElapsedToday * minutesInHour * secondsInMinute + minutesElapsedThisHour * secondsInMinute;
console.log(secondsElapsedToday);

var secondsLeftToday = secondsInDay - secondsElapsedToday;
console.log(secondsLeftToday);


var name = "Joey Volpe";
var age = "27";
var favoriteColor = "tomato";
var birthday = "September 24, 1987";
var hometown = "Los Angeles, CA";
var favoriteFood = "dough";
var occupation = "web developer";
var bestFriend = "Greg";

console.log("My name is " + name + ". I'm " + age + " years old and I was born on " + birthday + " in " + hometown + "! My favorite color is " + favoriteColor + " and my favorite food is " + favoriteFood + ". I'm a " + occupation + " and my best friend's name is " + bestFriend + ".");
