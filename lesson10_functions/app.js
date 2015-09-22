// EXERCISE 1

function greeting() {
  console.log("Hello world!", new Date);
}

greeting();
greeting();
greeting();
greeting();


function enthusiasm() {
  alert("ENTHUSIASTIC TEXT!!!!!!!!!");
}

enthusiasm();
enthusiasm();
enthusiasm();
enthusiasm();


// EXERCISE 2

function random_number() {
  return Math.floor(Math.random() * 11);
}

var x = 0;

while (x < 10) {
  console.log(random_number());
  x++;
}


// PRACTICE

var value_logger = function (value) {
  console.log(value);
};

value_logger("Howdy ho, neighborino!");

/* parameters and variables defined in function invocations
are local to that invocation. This is called "scope" and
we'll cover it in more detail in a later lesson */
// value;     // ReferenceError: No variable 'value' exists

value_logger(3 + 7);

// where's the seven?
value_logger(3, 7);

var doubler = function (num) {
  return num * 2;
};

// is it ten?
var should_be_ten = doubler(5);
console.log(should_be_ten);

var double_value_logger = function (value1, value2) {
  console.log(value1, value2);
};

double_value_logger("hello", "how are you");

// what is value2?
// What happens to the value of a parameter when we don't pass it an argument?
double_value_logger("hello");

var add = function(num1, num2){
  return num1 + num2;
};

var sum = add(7, 12);
console.log(sum);


// EXERCISE 3

// no exercise 3


// EXERCISE 4

function tripler(num) {
  return num * 3;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

console.log(remainder(divide(multiply(tripler(5), 12), 2), 3));

console.log(remainder(divide(tripler(multiply(4, 6)), -2), 19));
console.log(tripler(multiply(divide(remainder(5, 2), -1), -1)));
console.log(remainder(tripler(multiply(divide(15, 5), 3)), 3));
console.log(remainder(multiply(divide(tripler(1000000), 6), .5), 100000));


// EXERCISE 5

function factorial_of_n(num) {
  var og_num = num;
  var total = num;
  while (og_num > 1) {
    total *= og_num-1;
    og_num--;
  }
  return total;
}

console.log(factorial_of_n(5));

function count_by_n(count_by, count_up_to) {
  var first_num = count_by;
  var last_num = count_up_to;
  var print_num = 0;
  while (print_num < count_up_to) {
    print_num += count_by;
    console.log(print_num);
  }
}

count_by_n(3, 99);


// EXERCISE 6

function this_that(string1, string2, count_up_to, fizz_num, buzz_num) {
  var first_num = 1;
  var last_num = count_up_to;
  while (first_num <= last_num) {
    if (first_num % fizz_num === 0 && first_num % buzz_num === 0) {
      console.log(string1 + string2);
    }
    else if (first_num % fizz_num === 0) {
      console.log(string1);
    }
    else if (first_num % buzz_num === 0) {
      console.log(string2);
    }
    else {
      console.log(first_num);
    }
    first_num++;
  }
}

this_that("bitch", "ass", 200, 2, 7);


// EXERCISE 7

function fibonacci_lookup(num) {
  var num1 = 0;
  var num2 = 1;
  var counter = 1;
  console.log(num1, num2)
  counter++;
  while (counter <= num) {
    if (counter % 2 === 0) {
      num1 += num2;
      console.log(num1);
      if (counter === num-1) {
        console.log("ANSWER: " + num1);
      }
      counter++;
    }
    else if (counter % 2 === 1) {
      num2 += num1;
      console.log(num2);
      if (counter === num-1) {
        console.log("ANSWER: " + num2);
      }
      counter++;
    }
  }
}

fibonacci_lookup(7);


// EXTRA CREDIT

function calculator(num1, num2, operator) {
  if (operator === "add") {
    return add(num1, num2);
  }
  else if (operator === "multiply") {
    return multiply(num1, num2);
  }
  else if (operator === "divide") {
    return divide(num1, num2);
  }
  else if (operator === "remainder") {
    return remainder(num1, num2);
  }
}

console.log(calculator(6, 3, "add"));
console.log(calculator(6, 3, "multiply"));
console.log(calculator(6, 3, "divide"));
console.log(calculator(6, 3, "remainder"));
