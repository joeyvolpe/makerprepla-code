// var n = 0;
//
// console.log("I am called the Count... because I really love to count!");
//
// while (n < 10) {
//   console.log(n, "ha-ha-ha");
//   n++;
// }
//
//
// var num = 0;
//
// while (num <= 50) {
//   console.log(num);
//   num += 2;
// }


// EXERCISE 1

var number = 100;
var song = '<ul>';

while (number >= 0) {
  if (number !== 0) {
    song = song + '<li>' + number + ' bottle' + (number === 1 ? '' : 's') + ' of beer on the wall! Chug, chug, chug.</li>';
  } else {
    song += '<li>No bottles of beer on the wall! Stumble, stumble, stumble...</li>';
  }
  number--;
}
song += "</ul>";

document.querySelector('#lyrics').innerHTML = song;


// EXERCISE 2

var n = 1;
var end = 43;
var string = '';

while (n <= end) {
  if (n !== end) {
    if (n % 2 === 0) {
      string += "<p class='even'>" + n + '</p><hr>';
    }
    else if (n % 2 === 1) {
      string += "<p class='odd'>" + n + '</p><hr>';
    }
  }
  else if (n === end) {
    if (n % 2 === 0) {
      string += "<p class='even'>" + n + '</p>';
    }
    else if (n % 2 === 1) {
      string += "<p class='odd'>" + n + '</p>';
    }
  }
  n++;
}
console.log(string);

document.querySelector('#target').innerHTML = string;


// EXERCISE 3

var num = 1;
var sum = 1;

while (num <= 10) {
  sum = sum * num;
  num++;
}

console.log("The product of the numbers 1 through " + (num - 1) + " is " + sum);

document.querySelector('#product').innerHTML = "<p class='even'>The product of the numbers 1 through " + (num - 1) + " is " + sum + ". Num was " + num + " because we started incrementing from 1.</p>";


// EXERCISE 4

var start = 1;

while (start <= 100) {
  if (start % 3 === 0 && start % 5 === 0){
    console.log("FizzBuzz");
  }
  else if (start % 3 === 0) {
    console.log("Fizz");
  }
  else if (start % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(start);
  }
  start++;
}


// EXERCISE 5

// var i = 0;
// var n = 5;
// var j;
//
// while (i < n) {
//   j = 0;
//   while (j < n) {
//     console.log("i is", i, "and j is", j);
//     j++;
//   }
//   i++;
// }

var innerCount = 1;
var outerCount = 1;
var totalGuests = 5;

while (outerCount <= 5) {
  if (outerCount === 1) {
    console.log("Welcome, ", outerCount);
  }
  while (innerCount < outerCount) {
    console.log("Welcome, ", outerCount, ". Meet ", innerCount);
    innerCount++;
  }
  outerCount++;
  innerCount = 1;
}


// EXERCISE 6

var input;

while (!(input = prompt("Write something."))) {
  console.log("You haven't written anything yet.");
}

console.log("You wrote something!");


// Exercise 7:
//
// Write code to ask a user to enter an integer greater than 0. Keep asking for a number until it is valid (larger than 0);

var integerInput;
var secondInput;

while (!(integerInput = prompt("Enter an integer greater than 0."))) {
  console.log("You haven't written anything yet.");
}
while (secondInput = prompt("Enter an integer greater than 0.")) {
  if (secondInput <= 0) {
    console.log("The number you entered is not greater than 0.");
  }
  else if (secondInput > 0) {
    console.log("Valid input! Fuck yea bro.");
    break;
  }
}
